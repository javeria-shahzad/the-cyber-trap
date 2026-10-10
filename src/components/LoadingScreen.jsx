import byte from "../assets/byte.png";
import "../styles/loading.css";

function LoadingScreen() {
  return (
    <div className="loading-screen">
      <div className="loading-grid"></div>

      <div className="loading-content">
        <div className="loading-byte">
          <div className="byte-loader-ring"></div>
          <img src={byte} alt="BYTE" />
        </div>

        <div className="loading-title">
          <span>THE</span>
          <strong>CYBER TRAP</strong>
        </div>

        <p className="loading-text">
          Loading your safety mission<span className="loading-dots">...</span>
        </p>

        <div className="loading-progress">
          <div className="loading-progress-bar"></div>
        </div>

        <div className="loading-status">
          <span className="status-dot"></span>
          BYTE SYSTEM INITIALIZING
        </div>
      </div>

      <div className="loading-corner loading-corner-tl"></div>
      <div className="loading-corner loading-corner-tr"></div>
      <div className="loading-corner loading-corner-bl"></div>
      <div className="loading-corner loading-corner-br"></div>
    </div>
  );
}

export default LoadingScreen;