
import {
  ArrowRight,
  ShieldCheck,
  Gamepad2,
  Zap,
  Crosshair,
  Brain,
  LockKeyhole,
  Trophy,
  ChevronDown,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import byte from "../assets/byte.png";
import "../styles/homeV4.css";

function Home() {
  const navigate = useNavigate();

  return (
    <main className="cyber-home">
      {/* HERO SECTION */}
      <section className="ct-hero">
        <div className="ct-grid-bg" />
        <div className="ct-glow ct-glow-blue" />
        <div className="ct-glow ct-glow-orange" />

        <div className="ct-hero-inner">
          {/* LEFT CONTENT */}
          <div className="ct-hero-content">
            <div className="ct-eyebrow">
              <span className="ct-live-dot" />
              THINK <span>•</span> SPOT <span>•</span> ESCAPE
            </div>

            <h1 className="ct-title">
              THE CYBER
              <span>TRAP<span className="ct-title-dot">.</span></span>
            </h1>

            <h2 className="ct-tagline">
              Not every game is <span>just a game.</span>
            </h2>

            <p className="ct-description">
              Step into the digital world, uncover hidden online threats,
              and make smarter choices. Play through real-world cyber
              challenges with BYTE, your cyber buddy.
            </p>

            <div className="ct-actions">
              <button
                className="ct-btn ct-btn-primary"
                onClick={() => navigate("/play")}
              >
                <Gamepad2 size={19} />
                START THE GAME
                <ArrowRight size={18} className="ct-btn-arrow" />
              </button>

              <button
                className="ct-btn ct-btn-secondary"
                onClick={() => navigate("/meet-byte")}
              >
                <ShieldCheck size={19} />
                MEET BYTE
              </button>
            </div>

            <div className="ct-status">
              <span className="ct-status-icon">
                <ShieldCheck size={17} />
              </span>
              <span>
                <strong>YOUR MISSION IS ACTIVE</strong>
                <small>Stay alert. Think before you click.</small>
              </span>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="ct-visual">
            <div className="ct-visual-label ct-label-top">
              <span className="ct-label-dot" />
              CYBER BUDDY // ONLINE
            </div>

            <div className="ct-visual-stage">
              {/* Rotating rings */}
              <div className="ct-ring ct-ring-outer" />
              <div className="ct-ring ct-ring-middle" />
              <div className="ct-ring ct-ring-inner" />

              {/* Animated shield */}
              <div className="ct-shield-orbit">
                <div className="ct-shield">
                  <ShieldCheck size={43} strokeWidth={1.5} />
                </div>
              </div>

              {/* BYTE image */}
              <div className="ct-byte-glow" />
              <div className="ct-byte-backdrop" />

              <img
                src={byte}
                alt="BYTE, your cyber safety buddy"
                className="ct-byte-image"
              />

              {/* Scanning beam */}
              <div className="ct-scan-line" />

              {/* Floating particles */}
              <span className="ct-particle ct-particle-one" />
              <span className="ct-particle ct-particle-two" />
              <span className="ct-particle ct-particle-three" />
              <span className="ct-particle ct-particle-four" />
              <span className="ct-particle ct-particle-five" />

              {/* Floating security icons */}
              <div className="ct-float-icon ct-float-shield">
                <ShieldCheck size={25} />
              </div>

              <div className="ct-float-icon ct-float-lock">
                <LockKeyhole size={22} />
              </div>

              <div className="ct-float-icon ct-float-zap">
                <Zap size={23} />
              </div>

              {/* BYTE speech bubble */}
              <div className="ct-speech">
                <span className="ct-speech-dot" />
                Hey, player!
                <br />
                <strong>Ready to spot a trap?</strong>
              </div>

              <div className="ct-level-chip">
                <span>01</span>
                YOUR CYBER JOURNEY
              </div>
            </div>

            {/* Features beside BYTE */}
            <div className="ct-feature-list">
              <div className="ct-mini-feature">
                <span className="ct-mini-icon">
                  <Crosshair size={20} />
                </span>
                <span>
                  <strong>SPOT THREATS</strong>
                  <small>Recognize online traps</small>
                </span>
              </div>

              <div className="ct-mini-feature">
                <span className="ct-mini-icon">
                  <Brain size={20} />
                </span>
                <span>
                  <strong>THINK SMART</strong>
                  <small>Make safer decisions</small>
                </span>
              </div>

              <div className="ct-mini-feature">
                <span className="ct-mini-icon">
                  <LockKeyhole size={20} />
                </span>
                <span>
                  <strong>STAY PROTECTED</strong>
                  <small>Build cyber awareness</small>
                </span>
              </div>
            </div>

            <div className="ct-visual-label ct-label-bottom">
              <span className="ct-label-line" />
              SYSTEM PROTECTION: ACTIVE
            </div>
          </div>
        </div>

        <button
          className="ct-scroll"
          onClick={() =>
            document
              .getElementById("ct-mission")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          aria-label="Scroll to the mission section"
        >
          <span>EXPLORE THE MISSION</span>
          <ChevronDown size={19} />
        </button>
      </section>

      {/* MISSION SECTION */}
      <section className="ct-mission" id="ct-mission">
        <div className="ct-mission-panel">
          <div className="ct-mission-heading">
            <span className="ct-section-tag">
              <span className="ct-live-dot" />
              THE MISSION
            </span>

            <h2>
              REAL THREATS.
              <span> REAL SKILLS.</span>
            </h2>

            <p>
              The internet is full of tricks designed to fool you. Learn
              how to recognize them through interactive challenges,
              explore realistic situations, and turn your choices into
              smarter online habits.
            </p>

            <button
              className="ct-mission-link"
              onClick={() => navigate("/play")}
            >
              BEGIN YOUR MISSION <ArrowRight size={18} />
            </button>
          </div>

          <div className="ct-mission-features">
            <div className="ct-mission-card">
              <span className="ct-card-icon">
                <Brain size={25} />
              </span>
              <strong>BUILD AWARENESS</strong>
              <small>Understand cyber risks.</small>
              <span className="ct-card-number">01</span>
            </div>

            <div className="ct-mission-card">
              <span className="ct-card-icon">
                <Crosshair size={25} />
              </span>
              <strong>DETECT RISKS</strong>
              <small>Spot suspicious signs.</small>
              <span className="ct-card-number">02</span>
            </div>

            <div className="ct-mission-card">
              <span className="ct-card-icon">
                <ShieldCheck size={25} />
              </span>
              <strong>MAKE CHOICES</strong>
              <small>Practice safer actions.</small>
              <span className="ct-card-number">03</span>
            </div>

            <div className="ct-mission-card">
              <span className="ct-card-icon">
                <Trophy size={25} />
              </span>
              <strong>LEVEL UP</strong>
              <small>Grow your cyber skills.</small>
              <span className="ct-card-number">04</span>
            </div>
          </div>
        </div>

        <p className="ct-footer-note">
          <ShieldCheck size={15} />
          THINK BEFORE YOU CLICK. YOUR SAFETY IS YOUR SUPERPOWER.
        </p>
      </section>
    </main>
  );
}

export default Home;
