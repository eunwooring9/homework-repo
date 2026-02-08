import { useState } from "react";

export function SignupForm() {
  const [email, setEmail] = useState("");
  const [isEmailChecked, setIsEmailChecked] = useState(false);
  const [emailError, setEmailError] = useState("");

  const [pw, setPw] = useState("");
  const [pwCheck, setPwCheck] = useState("");

  const [agreed, setAgreed] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsEmailChecked(false);
    setEmailError("");
  };

  const handleCheckEmail = () => {
    if (!email) {
      setEmailError("이메일을 입력해주세요!");
      return;
    }

    if (!email.includes("@")) {
      setIsEmailChecked(false);
      setEmailError("이메일 형식이 올바르지 않습니다.");
      return;
    }

    if (email === "user@test.com") {
      setIsEmailChecked(false);
      setEmailError("이미 사용 중인 이메일입니다");
    } else {
      setIsEmailChecked(true);
      setEmailError("");
    }
  };

  const handleSubmit = () => {
    if (!isEmailChecked) {
      alert("이메일 중복 검사를 해주세요!");
      return;
    }

    if (pw !== pwCheck) {
      alert("비밀번호가 일치하지 않습니다!");
      return;
    }

    if (!agreed) {
      alert("약관에 동의해주세요!");
      return;
    }

    alert(`가입 성공! 환영합니다, ${email}님!`);
  };

  return (
    <div className="signup-container">
      <h2>회원가입</h2>

      <div className="input-box">
        <input type="email" placeholder="test@example.com" value={email} onChange={handleEmailChange} />
        <button className="check-btn" onClick={handleCheckEmail}>
          중복 확인
        </button>

        {/* 에러나면 띄움 */}
        {emailError && <span className="error-msg">{emailError}</span>}
        {/* 성공하면 띄움 */}
        {isEmailChecked && <span className="success-msg">✅ 사용할 수 있는 이메일입니다.</span>}
      </div>

      <div className="input-box">
        <input type="password" placeholder="비밀번호" value={pw} onChange={(e) => setPw(e.target.value)} />
      </div>

      <div className="input-box">
        <input type="password" placeholder="비밀번호 확인" value={pwCheck} onChange={(e) => setPwCheck(e.target.value)} />
        {pw && pwCheck && pw !== pwCheck && <span className="error-msg">비밀번호가 일치하지 않습니다</span>}
      </div>

      <div className="checkbox-box">
        <input type="checkbox" id="terms" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} />
        <label htmlFor="terms">이용약관에 동의합니다</label>
      </div>

      <button className="submit-btn" onClick={handleSubmit}>
        가입하기
      </button>
    </div>
  );
}

export default SignupForm;
