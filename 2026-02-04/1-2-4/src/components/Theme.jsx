import { useState } from "react";

function Theme({ children }) {
  const [isDark, setIsDark] = useState(false);

  const themeStyle = {
    backgroundColor: isDark ? "#333" : "#fff",
    color: isDark ? "#fff" : "#000",
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={themeStyle}>
      <button onClick={() => setIsDark(!isDark)} style={{ background: "none", border: "none", fontSize: "25px" }}>
        {isDark ? "☀️" : "🌙"}
      </button>

      {children}
    </div>
  );
}

export default Theme;
