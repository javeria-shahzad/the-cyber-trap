
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  LockKeyhole,
  Gift,
  Link as LinkIcon,
  MessageCircle,
  Globe,
  ShieldCheck,
  Gamepad2,
  Zap,
  Star,
} from "lucide-react";


import byteThinking from "../assets/thinking.png";
import byteCurious from "../assets/curious.png";
import byteWorried from "../assets/worried.png";
import byteWarning from "../assets/warning.png";
import byteProud from "../assets/proud.png";

import "../styles/Play.css";
import Level01 from "./Level01";


const levels = [
  {
    id: "01",
    title: "THE FAKE REWARD",
    description: "Can you spot a reward that is too good to be true?",
    icon: Gift,
    character: byteCurious,
    color: "cyan",
    difficulty: "BEGINNER",
    path: "/level-01",
  },
  {
    id: "02",
    title: "THE SUSPICIOUS LINK",
    description: "Think before you click that mysterious link.",
    icon: LinkIcon,
    character: byteThinking,
    color: "orange",
    difficulty: "BEGINNER",
    path: "/level-02",
  },
  {
    id: "03",
    title: "THE STRANGER",
    description: "Learn what is safe to share with people online.",
    icon: MessageCircle,
    character: byteWorried,
    color: "purple",
    difficulty: "INTERMEDIATE",
    path: "/level-03",
  },
  {
    id: "04",
    title: "THE PASSWORD TRAP",
    description: "Protect your passwords from online traps.",
    icon: LockKeyhole,
    character: byteWarning,
    color: "pink",
    difficulty: "INTERMEDIATE",
    path: "/level-04",
  },
  {
    id: "05",
    title: "THE FAKE WEBSITE",
    description: "Can you tell a real website from a suspicious one?",
    icon: Globe,
    character: byteProud,
    color: "green",
    difficulty: "CHALLENGE",
    path: "/level-05",
  },
];

function Play() {
  const navigate = useNavigate();

  return (
    <main className="play-page">
      <div className="play-background">
        <div className="play-grid"></div>
        <div className="play-orb play-orb-one"></div>
        <div className="play-orb play-orb-two"></div>
        <div className="play-scanline"></div>
      </div>

      <section className="play-hero">
        <div className="play-hero-content">
          <div className="play-eyebrow">
            <span className="play-status-dot"></span>
            <span>BYTE'S CYBER WORLD</span>
            <Zap size={15} />
          </div>

          <h1 className="play-heading">
            READY.
            <br />
            <span>SET.</span>{" "}
            <span className="play-heading-accent">PLAY!</span>
          </h1>

          <p className="play-description">
            Welcome to your cyber adventure! Enter the digital world,
            solve challenges, and learn how to stay safe online with BYTE.
          </p>

          <div className="play-hero-actions">
            <a href="#choose-level" className="play-primary-button">
              <Gamepad2 size={20} />
              CHOOSE YOUR LEVEL
              <ArrowRight size={18} />
            </a>

            <div className="play-mini-stat">
              <ShieldCheck size={19} />
              <span>5 MISSIONS</span>
            </div>
          </div>

          <div className="play-hero-footer">
            <span>01 — EXPLORE</span>
            <span className="play-footer-line"></span>
            <span>02 — THINK</span>
            <span className="play-footer-line"></span>
            <span>03 — STAY SAFE</span>
          </div>
        </div>

        <div className="play-character-area">
          <div className="play-character-aura"></div>
          <div className="play-character-ring play-ring-one"></div>
          <div className="play-character-ring play-ring-two"></div>
          <div className="play-character-ring play-ring-three"></div>

          <div className="play-orbit-label play-orbit-label-top">
            <Zap size={13} />
            CYBER BUDDY
          </div>

          <div className="play-orbit-label play-orbit-label-bottom">
            <ShieldCheck size={14} />
            YOUR DIGITAL GUIDE
          </div>

          <div className="play-floating-icon play-floating-icon-one">
            <LockKeyhole size={23} />
          </div>

          <div className="play-floating-icon play-floating-icon-two">
            <ShieldCheck size={25} />
          </div>

          <div className="play-floating-icon play-floating-icon-three">
            <Star size={21} />
          </div>

          <div className="play-character">
            <img src={byteThinking} alt="BYTE, your cyber safety buddy" />
          </div>

          <div className="play-character-message">
            <span className="play-message-dot"></span>
            HEY PLAYER! READY?
          </div>
        </div>
      </section>

      <section className="play-levels-section" id="choose-level">
        <div className="play-section-top">
          <div>
            <div className="play-section-eyebrow">
              <span>04</span>
              <span className="play-section-divider"></span>
              THE GAME / LEVELS
            </div>

            <h2 className="play-section-heading">
              CHOOSE YOUR <span>LEVEL</span>
            </h2>

            <p className="play-section-description">
              Five missions. Real-world traps. One smarter player.
              Select a mission to begin your adventure.
            </p>
          </div>

          <div className="play-level-counter">
            <span className="play-counter-label">AVAILABLE MISSIONS</span>
            <span className="play-counter-number">05</span>
            <span className="play-counter-caption">READY TO PLAY</span>
          </div>
        </div>

        <div className="play-levels-grid">
          {levels.map((level, index) => {
            const LevelIcon = level.icon;

            return (
              <button
                type="button"
                className={`play-level-card play-${level.color}`}
                key={level.id}
                onClick={() => navigate(level.path)}
                style={{ "--card-index": index }}
                aria-label={`Play level ${level.id}: ${level.title}`}
              >
                <div className="play-card-top">
                  <span className="play-level-number">
                    LEVEL {level.id}
                  </span>

                  <span className="play-card-arrow">
                    <ArrowRight size={19} />
                  </span>
                </div>

                <div className="play-card-art">
                  <div className="play-card-glow"></div>
                  <div className="play-card-orbit"></div>

                  <div className="play-card-icon">
                    <LevelIcon size={28} strokeWidth={1.8} />
                  </div>

                  <img
                    src={level.character}
                    alt=""
                    className="play-card-character"
                  />

                  <span className="play-card-spark play-spark-one">✦</span>
                  <span className="play-card-spark play-spark-two">✧</span>
                </div>

                <div className="play-card-info">
                  <span className="play-card-difficulty">
                    {level.difficulty}
                  </span>

                  <h3>{level.title}</h3>

                  <p>{level.description}</p>
                </div>

                <div className="play-card-bottom">
                  <span className="play-card-action">
                    ENTER MISSION
                  </span>

                  <span className="play-card-action-icon">
                    <ArrowRight size={17} />
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        <div className="play-bottom-message">
          <div className="play-bottom-character">
            <img src={byteProud} alt="BYTE cheering you on" />
          </div>

          <div className="play-bottom-copy">
            <span>BYTE'S TIP OF THE DAY</span>
            <p>
              Think before you click. A smart player always checks first!
            </p>
          </div>

          <ShieldCheck className="play-bottom-shield" size={36} />
        </div>
      </section>

      <footer className="play-footer">
        <button
          type="button"
          className="play-back-button"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft size={16} />
          BACK
        </button>

        <span>
          POWERED BY <strong>BYTE</strong> — PLAY SMART. STAY SAFE.
        </span>

        <span className="play-footer-status">
          <span className="play-status-dot"></span>
          SYSTEM ONLINE
        </span>
      </footer>
    </main>
  );
}

export default Play;

