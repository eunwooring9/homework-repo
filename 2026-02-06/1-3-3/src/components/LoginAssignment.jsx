import React, { useState } from "react";

export function LoginAssignment() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className="container">
      <div className="emoji">{isLoggedIn ? "🎉" : "🔒"}</div>
      <h1>{isLoggedIn ? "환영합니다" : "로그인해주세요"}</h1>
      <p>{isLoggedIn ? "회원님, 반가워요!" : "더 많은 기능을 보시려면 로그인하세요."}</p>

      <button onClick={handleLogin} className="login-btn">
        {isLoggedIn ? "로그아웃" : "로그인"}
      </button>

      <p className="login-color">
        isLoggedIn: <span style={{ color: isLoggedIn ? "green" : "red" }}>{isLoggedIn.toString()}</span>
      </p>
    </div>
  );
}
