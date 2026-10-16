import { ArrowRight, ShieldCheck, Gamepad2, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
// import byte from "../assets/byte.png";
import "../styles/homeV3.css";
// import byteThinking from "../assets/thinking.png";
import byte from "../assets/byteByte.png";

function Home() { const navigate = useNavigate();
  return (
    <main className="home home-v3">

      {/* =========================
          HERO
      ========================= */}

      <section className="hero">

        {/* Background */}
        <div className="hero-grid"></div>
        <div className="hero-glow hero-glow-blue"></div>
        <div className="hero-glow hero-glow-orange"></div>
        <div className="scan-line"></div>

        {/* Particles */}
        <div className="particles">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Cyber decorative lines */}
        <div className="cyber-line cyber-line-1"></div>
        <div className="cyber-line cyber-line-2"></div>

        {/* Floating icons */}
        <div className="floating-symbol symbol-1">
          <ShieldCheck size={20} />
        </div>

        <div className="floating-symbol symbol-2">
          <Gamepad2 size={21} />
        </div>

        <div className="floating-symbol symbol-3">
          <Zap size={18} />
        </div>

        <div className="floating-symbol symbol-4">
          🔒
        </div>

        <div className="floating-symbol symbol-5">
          ⚠
        </div>

        <div className="floating-symbol symbol-6">
          &lt;/&gt;
        </div>


        {/* =========================
            MAIN HERO CONTENT
        ========================= */}

        <div className="hero-container">

          {/* LEFT CONTENT */}

          <div className="hero-content">

            <div className="hero-eyebrow">
              <span className="eyebrow-line"></span>
              WELCOME TO
            </div>

            <h1>
              THE
              <span>CYBER TRAP</span>
            </h1>

            <p className="hero-tagline">
              Not every game is just a game.
            </p>

            <p className="hero-description">
              Explore common online traps, test your choices
              and learn how to stay safer while gaming.
            </p>

            <div className="hero-buttons">

             

              {/* <button
  className="start-button"
  onClick={onStartGame}
>  
  START THE GAME →
</button> */}

          <button
  className="start-button"
  onClick={() => navigate("/play")}
>
  START THE GAME →
</button>
{/* <button
  className="byte-button"
  onClick={onMeetByte}
>
  MEET BYTE
</button> */}

<button className="byte-button" onClick={() => navigate("/meet-byte")} > MEET BYTE </button>
            </div>

            <div className="hero-note">
              <span className="note-dot"></span>
              YOUR CYBER SAFETY MISSION STARTS HERE
            </div>

          </div>


          {/* =========================
              BYTE AREA
          ========================= */}

          <div className="byte-area">

            <div className="byte-glow"></div>

            <div className="byte-ring"></div>

            <div className="byte-ring byte-ring-outer"></div>

           \

            <span className="orbit-dot orbit-dot-1"></span>
            <span className="orbit-dot orbit-dot-2"></span>
            <span className="orbit-dot orbit-dot-3"></span>


            {/* BYTE */}

            <img
              src={byte}
              alt="BYTE - Cyber Buddy"
              className="byte-character"
            />

            


            {/* BYTE message */}

            <div className="byte-message">

              <div className="message-dot"></div>

              <div>
                <strong>HEY</strong>

                <p>
                  Ready to spot the trap?
                </p>
              </div>

            </div>


            {/* HUD */}

            <div className="byte-hud hud-top">
              <span className="hud-dot"></span>
              SYSTEM ONLINE
            </div>

            <div className="byte-hud hud-bottom">
              CYBER DEFENSE
              <span>ACTIVE</span>
            </div>

          </div>

        </div>


        {/* Scroll indicator */}

        <div className="scroll-indicator">
          <span>SCROLL TO EXPLORE</span>
          <div className="scroll-line"></div>
        </div>

      </section>


      {/* =========================
          INTRO SECTION
      ========================= */}

      <section className="intro-section">

        <div className="intro-content">

          <span className="section-label">
            YOUR MISSION
          </span>

          <h2>
            CAN YOU
            <span>SPOT THE TRAP?</span>
          </h2>

          <p>
            Online games can be fun, but not everything you
            see or receive online is safe. Explore realistic
            situations, make your choices and learn what to do.
          </p>

        </div>

      </section>

    </main>
  );
}

export default Home;