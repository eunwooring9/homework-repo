import { useState } from "react";

function Profile() {
  const [name, setName] = useState("최은우");
  const [status, setStatus] = useState("정말 힘든 하루입니다...");
  const [edit, setEdit] = useState(false);

  return (
    <div className="container">
      <div className="eyes">
        <span>•</span>
        <span>•</span>
      </div>

      <div className="textContainer">
        {edit ? (
          <div className="edit-form">
            <div>
              <input className="edit-input" value={name} onChange={(e) => setName(e.target.value)} />
              <input className="edit-input" value={status} onChange={(e) => setStatus(e.target.value)} />
              <p style={{ color: status.length > 20 ? "red" : "white" }}>{status.length}자</p>
            </div>
          </div>
        ) : (
          <div>
            <h2 className="name-text">{name}</h2>
            <p className="status-text">{status}</p>
          </div>
        )}
      </div>

      <button className="save-btn" onClick={() => setEdit(!edit)}>
        {edit ? "저장" : "편집"}
      </button>
    </div>
  );
}

export default Profile;
