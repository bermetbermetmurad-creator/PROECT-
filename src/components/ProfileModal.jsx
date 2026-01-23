import { useState, useEffect } from "react";
import { useUser } from "./UserContext/UserContext";
import "./ProfileModal.css";

export default function ProfileModal({ isOpen, onClose }) {
  const { user, updateUser, logout } = useUser();

  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    if (user) {
      setName(user.name);
      setBio(user.bio);
      setAvatar(user.avatar);
    }
  }, [user]);

  if (!isOpen || !user) return null;

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setAvatar(URL.createObjectURL(file));
  };

  const handleSave = () => {
    updateUser({ ...user, name, bio, avatar });
    setIsEdit(false);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content profile-modal">

        <button className="close-btn" onClick={onClose}>×</button>

        <div className="profile-header">
          <label className="avatar-box">
            <img src={avatar} alt="avatar" />
            {isEdit && (
              <>
                <input
                  type="file"
                  hidden
                  accept="image/*"
                  onChange={handleAvatarChange}
                />
                <span>Изменить фото</span>
              </>
            )}
          </label>

          {!isEdit ? (
            <>
              <h2>{user.name}</h2>
              <p className="email">{user.email}</p>
              <p className="bio">{user.bio}</p>
            </>
          ) : (
            <>
              <input value={name} onChange={(e) => setName(e.target.value)} />
              <textarea value={bio} onChange={(e) => setBio(e.target.value)} />
            </>
          )}
        </div>

        <div className="profile-actions">
          {!isEdit ? (
            <button className="primary" onClick={() => setIsEdit(true)}>
              Редактировать профиль
            </button>
          ) : (
            <>
              <button className="primary" onClick={handleSave}>
                Сохранить
              </button>
              <button className="secondary" onClick={() => setIsEdit(false)}>
                Отмена
              </button>
            </>
          )}

          <button
            className="danger"
            onClick={() => {
              logout();
              onClose();
            }}
          >
            Выйти
          </button>
        </div>

      </div>
    </div>
  );
}
