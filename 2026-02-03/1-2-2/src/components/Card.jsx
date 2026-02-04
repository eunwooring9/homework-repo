export function Card() {
  const name = "Eunwoo Choi";
  const birthYear = 2001;
  const hobbies = ["노래", "연기", "게임"];
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="profile-card">
        <div className="eyes">
          <p>.</p>
          <p>.</p>
        </div>
        <h2 className="name">{name}</h2>
        <p className="age">나이: {currentYear - birthYear}세</p>
        <p className="hobby">취미: {hobbies.join(", ")}</p>
      </div>
    </>
  );
}
