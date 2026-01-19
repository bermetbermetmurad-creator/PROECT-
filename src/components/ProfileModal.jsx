import React from "react";
import "./ProfileModal.css";
import avatarImg from "../assets/awatar.jpg"; 

const ProfileModal = ({ isOpen, onClose, userName, onLogout }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content profile-modal">
        <button className="close-btn" onClick={onClose}>×</button>
        <img src={avatarImg} alt="Avatar" className="profile-avatar" />
        <h2>{userName}</h2>
        <button className="logout-btn" onClick={onLogout}>Выйти</button>
      </div>
    </div>
  );
};

export default ProfileModal;
