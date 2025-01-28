import React, { createContext, useState, useEffect, useRef } from "react";

export const ChatContext = createContext();

export function ChatProvider({ children }) {
  const [chatVisible, setChatVisible] = useState(false);
  const [endTimeState, setEndTimeState] = useState(null);

  const [totalSeconds, setTotalSeconds] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(0);

  const [messages, setMessages] = useState([
    { text: "Hi, thanks for your order!", sender: "support" },
  ]);

  const intervalRef = useRef(null);

  function setEndTime(date) {
    setEndTimeState(date);
    if (!date) {
      setTotalSeconds(0);
      setSecondsLeft(0);
      return;
    }
    const now = new Date();
    const diffMs = date.getTime() - now.getTime();
    const diffSecs = Math.ceil(diffMs / 1000);
    setTotalSeconds(diffSecs > 0 ? diffSecs : 0);
    setSecondsLeft(diffSecs > 0 ? diffSecs : 0);
  }

  useEffect(() => {
    if (!chatVisible || !endTimeState) {
      setSecondsLeft(0);
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }

    updateSecondsLeft();

    intervalRef.current = setInterval(() => {
      updateSecondsLeft();
    }, 1000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [chatVisible, endTimeState]);

  function updateSecondsLeft() {
    if (!endTimeState) return;
    const now = new Date();
    const diffMs = endTimeState.getTime() - now.getTime();
    const diffSecs = Math.ceil(diffMs / 1000);

    if (diffSecs <= 0) {
      setChatVisible(false);
      setSecondsLeft(0);
      if (intervalRef.current) clearInterval(intervalRef.current);
    } else {
      setSecondsLeft(diffSecs);
    }
  }

  function sendMessage(userText) {
    if (!userText.trim()) return;
    setMessages((prev) => [...prev, { text: userText, sender: "user" }]);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "We got your message. Hang tight!", sender: "support" },
      ]);
    }, 2000);
  }

  return (
    <ChatContext.Provider
      value={{
        chatVisible,
        setChatVisible,
        endTime: endTimeState,
        setEndTime,
        totalSeconds,
        secondsLeft,
        messages,
        sendMessage,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}
