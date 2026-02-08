import { useState } from "react";

export function ProfileCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  const [likes, setLikes] = useState(0);
  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleLike = (e) => {
    e.stopPropagation();
    setLikes((prev) => prev + 1);
  };

  return (
    <div className="card-container" onClick={handleCardClick}>
      <div className="card" style={{ transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)" }}>
        {/* 앞면 */}
        <div className="front">
          <div className="profile-info">
            <h2>최은우</h2>
            <p>Frontend Dev</p>
          </div>
          <button className="heart-btn" onClick={handleLike}>
            💙 {likes}
          </button>
        </div>

        {/* 뒷면 */}
        <div className="back">
          <h2>My Skills</h2>
          <div className="skills">
            <span>HTML/CSS</span>
            <span>JS</span>
            <span>React</span>
          </div>
          <button className="heart-btn" onClick={handleLike}>
            💙 {likes}
          </button>
        </div>
      </div>
    </div>
  );
}
export default ProfileCard;
