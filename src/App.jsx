import { useState } from "react";

function App() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div style={styles.container}>
      <div style={styles.innerBox}>

        <p style={styles.subLabel}>Power Status</p>
        <h1 style={{ ...styles.statusLabel, color: isOn ? "#1D9E75" : "var(--color-text-primary)" }}>
          {isOn ? "ON" : "OFF"}
        </h1>

        {/* Toggle Track */}
        <div
          onClick={() => setIsOn(!isOn)}
          style={{
            ...styles.track,
            background: isOn ? "#1D9E75" : "#E24B4A",
          }}
        >
          {/* Toggle Thumb */}
          <div
            style={{
              ...styles.thumb,
              transform: isOn ? "translateX(40px)" : "translateX(0px)",
            }}
          >
            {isOn ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12l5 5L19 7"
                  stroke="#1D9E75"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"
                  stroke="#E24B4A"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </div>
        </div>

        <div style={styles.hint}>Click the toggle to switch</div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundColor: "#f9f9f9",
  },
  innerBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1.5rem",
    padding: "2rem",
  },
  subLabel: {
    fontSize: "13px",
    color: "#888",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    margin: 0,
  },
  statusLabel: {
    fontSize: "42px",
    fontWeight: "500",
    margin: 0,
    transition: "color 0.3s",
  },
  track: {
    width: "80px",
    height: "40px",
    borderRadius: "20px",
    position: "relative",
    cursor: "pointer",
    transition: "background 0.35s ease",
  },
  thumb: {
    position: "absolute",
    top: "4px",
    left: "4px",
    width: "32px",
    height: "32px",
    background: "white",
    borderRadius: "50%",
    transition: "transform 0.35s cubic-bezier(.4,0,.2,1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  hint: {
    background: "#f0f0f0",
    border: "0.5px solid #ddd",
    borderRadius: "12px",
    padding: "10px 28px",
    fontSize: "13px",
    color: "#888",
  },
};

export default App;