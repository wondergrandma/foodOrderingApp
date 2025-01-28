import React, { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styles from "./UserProfilePage.module.css";

function UserProfilePage() {
  const [isEditing, setIsEditing] = useState(false);

  const [profileData, setProfileData] = useState({
    fullName: "John Doe",
    email: "johndoe@mail.com",
    phone: "123-456-7890",
    street: "123 Main St",
    city: "Chicago",
    state: "Illinois",
    zipCode: "62704",
  });

  const handleEdit = () => setIsEditing(true);
  const handleCancel = () => setIsEditing(false);

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({ ...prevData, [name]: value }));
  };

  const { fullName, email, phone, street, city, state, zipCode } = profileData;

  return (
    <>
      <Header />

      <div className={styles.userProfileContainer}>
        <h1 className={styles.pageTitle}>My Profile</h1>

        {!isEditing && (
          <>
            <hr className={styles.separator} />
            <section className={styles.profileSection}>
              <h2 className={styles.sectionTitle}>Contact Information</h2>
              <p><strong>Full Name:</strong> {fullName}</p>
              <p><strong>Email:</strong> {email}</p>
              <p><strong>Phone:</strong> {phone}</p>
            </section>

            <hr className={styles.separator} />
            <section className={styles.profileSection}>
              <h2 className={styles.sectionTitle}>Address</h2>
              <p><strong>Street:</strong> {street}</p>
              <p><strong>City:</strong> {city}</p>
              <p><strong>State:</strong> {state}</p>
              <p><strong>ZIP Code:</strong> {zipCode}</p>
            </section>

            <button 
              className={styles.editButton}
              onClick={handleEdit}
            >
              Edit Profile
            </button>
          </>
        )}

        {isEditing && (
          <form
            className={styles.editForm}
            onSubmit={(e) => e.preventDefault()}
          >
            <hr className={styles.separator} />
            <section className={styles.formSection}>
              <h2 className={styles.sectionTitle}>Contact Information</h2>
              <label className={styles.label}>Full Name</label>
              <input
                className={styles.inputField}
                type="text"
                name="fullName"
                value={fullName}
                onChange={handleChange}
              />

              <label className={styles.label}>Email</label>
              <input
                className={styles.inputField}
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
              />

              <label className={styles.label}>Phone</label>
              <input
                className={styles.inputField}
                type="text"
                name="phone"
                value={phone}
                onChange={handleChange}
              />
            </section>

            <hr className={styles.separator} />
            <section className={styles.formSection}>
              <h2 className={styles.sectionTitle}>Address</h2>
              <label className={styles.label}>Street</label>
              <input
                className={styles.inputField}
                type="text"
                name="street"
                value={street}
                onChange={handleChange}
              />

              <label className={styles.label}>City</label>
              <input
                className={styles.inputField}
                type="text"
                name="city"
                value={city}
                onChange={handleChange}
              />

              <label className={styles.label}>State</label>
              <input
                className={styles.inputField}
                type="text"
                name="state"
                value={state}
                onChange={handleChange}
              />

              <label className={styles.label}>ZIP Code</label>
              <input
                className={styles.inputField}
                type="text"
                name="zipCode"
                value={zipCode}
                onChange={handleChange}
              />
            </section>

            <div className={styles.buttonsRow}>
              <button 
                className={styles.saveButton}
                onClick={handleSave}
              >
                Save
              </button>
              <button 
                className={styles.cancelButton}
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </>
  );
}

export default UserProfilePage;
