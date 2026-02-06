function ProfileCard({ name, age, job }) {
  return (
    <div className="card">
      <div className="eyes">
        <p>.</p>
        <p>.</p>
      </div>
      <div className="info">
        <h2>{name}</h2>
        <p>{age}세</p>
        <p>{job}가 될 수 있겠죠?</p>
      </div>
    </div>
  );
}
export default ProfileCard;
