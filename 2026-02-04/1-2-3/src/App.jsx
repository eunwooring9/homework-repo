import ProfileCard from "./components/ProfileCard";
import { Post } from "./components/Post";

function App() {
  return (
    <>
      <div className="container">
        <ProfileCard name="은우" age={26} job="개발자" />
        <Post author="최으누" content="살려주세요...너무 어렵자나염...." />
      </div>
    </>
  );
}

export default App;
