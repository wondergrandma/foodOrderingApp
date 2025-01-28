import React, { useContext, useState } from "react";
import { ChatContext } from "../../storage/ChatProvider";
import DeliveryProgress from "./DeliveryProgress";
import styles from "./DeliveryChat.module.css";

function DeliveryChat() {
  const {
    chatVisible,
    setChatVisible,
    totalSeconds,
    secondsLeft,
    messages,
    sendMessage,
  } = useContext(ChatContext);

  const [newMessage, setNewMessage] = useState("");

  if (secondsLeft <= 0) return null;

  const used = totalSeconds - secondsLeft;
  const progressPercent = totalSeconds > 0 
    ? Math.round((used / totalSeconds) * 100)
    : 0;

  const handleSend = () => {
    if (newMessage.trim()) {
      sendMessage(newMessage);
      setNewMessage("");
    }
  };

  if (!chatVisible) {
    return (
      <button
        className={styles["chat-toggle-button"]}
        onClick={() => setChatVisible(true)}
      >
        Open Chat ({formatTime(secondsLeft)})
      </button>
    );
  }


  return (
    <div className={styles["chat-widget"]}>
      <DeliveryProgress progressPercent={progressPercent} />
      <div className={styles["chat-header"]}>
        <div className={styles["time-left"]}>
          {formatTime(secondsLeft)}
        </div>
      </div>

      <div className={styles["chat-messages"]}>
        {messages.map((msg, i) => {
          const bubbleClass =
            msg.sender === "user"
              ? `${styles["chat-message"]} ${styles["user-msg"]}`
              : `${styles["chat-message"]} ${styles["support-msg"]}`;
          return (
            <div key={i} className={bubbleClass}>
              {msg.text}
            </div>
          );
        })}
      </div>

      <div className={styles["chat-input"]}>
        <input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}

function formatTime(sec) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m}:${s.toString().padStart(2, "0")} min left`;
}

export default DeliveryChat;
