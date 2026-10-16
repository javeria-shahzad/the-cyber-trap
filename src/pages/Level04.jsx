import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  LockKeyhole,
  AlertTriangle,
  CheckCircle,
  XCircle,
  RotateCcw,
  MessageCircle,
  KeyRound,
} from "lucide-react";

import byteWarning from "../assets/warning.png";
import byteThinking from "../assets/thinking.png";
import byteCheering from "../assets/cheering.png";

import "../styles/Level04.css";

const answers = [
  {
    id: "A",
    title: "SEND MY PASSWORD",
    description: "They said they can help me fix my account.",
  },
  {
    id: "B",
    title: "USE A STRONG, UNIQUE PASSWORD",
    description: "Keep it private and never share it with anyone.",
  },
  {
    id: "C",
    title: "USE THE SAME PASSWORD EVERYWHERE",
    description: "It is easier to remember one password.",
  },
];

function Level04() {
  const navigate = useNavigate();
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const correctAnswer = "B";
  const isCorrect = selectedAnswer === correctAnswer;

  const getCompletedLevels = () => {
    try {
      const savedLevels = JSON.parse(
        localStorage.getItem("cyberCompletedLevels") || "[]"
      );

      return Array.isArray(savedLevels) ? savedLevels : [];
    } catch {
      return [];
    }
  };

  const [completedLevels, setCompletedLevels] = useState(getCompletedLevels);

  const completedCount = completedLevels.length;
  const score = Math.min(completedCount * 20, 100);

  const handleAnswer = (answer) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(answer);

    if (answer === correctAnswer) {
      const savedLevels = getCompletedLevels();

      if (!savedLevels.includes(4)) {
        const updatedLevels = [...savedLevels, 4];

        try {
          localStorage.setItem(
            "cyberCompletedLevels",
            JSON.stringify(updatedLevels)
          );
        } catch {
          // Keep the mission playable if browser storage is unavailable.
        }

        setCompletedLevels(updatedLevels);
      } else {
        setCompletedLevels(savedLevels);
      }
    }
  };

  const resetGame = () => {
    setSelectedAnswer(null);
  };

  return (
    <main className="level04-page">
      <div className="level04-background">
        <div className="level04-grid"></div>
        <div className="level04-orb level04-orb-one"></div>
        <div className="level04-orb level04-orb-two"></div>
      </div>

      <header className="level04-header">
        <button
          type="button"
          className="level04-back-button"
          onClick={() => navigate("/lets-play")}
        >
          <ArrowLeft size={17} />
          ALL MISSIONS
        </button>

        <div className="level04-progress-label">
          <ShieldCheck size={17} />
          CYBER SAFETY TRAINING
        </div>

        <span className="level04-level-tag">LEVEL 04 / 05</span>
      </header>

      <section className="level04-content">
        <div className="level04-intro">
          <span className="level04-eyebrow">
            <span className="level04-live-dot"></span>
            MISSION 04 — PASSWORD DEFENDER
          </span>

          <h1>
            THE PASSWORD
            <br />
            <span>TRAP</span>
          </h1>

          <p>
            Your password protects your digital world. Can you spot the risky
            choice and keep your accounts secure?
          </p>
        </div>

        <div className="level04-game-layout">
          <div className="level04-scenario">
            <div className="level04-scenario-top">
              <div className="level04-scenario-icon">
                <MessageCircle size={21} />
              </div>

              <div>
                <span className="level04-small-label">ACCOUNT ALERT</span>
                <h2>Support Message</h2>
              </div>

              <span className="level04-warning-badge">
                <AlertTriangle size={14} />
                BE CAREFUL
              </span>
            </div>

            <div className="level04-message">
              <div className="level04-message-avatar">
                <KeyRound size={22} />
              </div>

              <div className="level04-message-copy">
                <span>UNKNOWN ACCOUNT HELPER</span>
                <p>
                  Hello! I can help secure your account. Send me your password
                  so I can check it for you.
                </p>
              </div>
            </div>

            <div className="level04-password-demo">
              <div className="level04-password-label">
                <LockKeyhole size={17} />
                <span>YOUR ACCOUNT PASSWORD</span>
              </div>

              <div
                className="level04-password-field"
                aria-label="Password hidden"
              >
                <span>••••••••••••</span>
                <LockKeyhole size={18} />
              </div>

              <p>
                Your password is private. Real support staff should not ask you
                to tell them your password.
              </p>
            </div>

            <div className="level04-question">
              <span>YOUR MISSION</span>
              <h3>How do you protect your account?</h3>
              <p>Choose the safest password habit.</p>
            </div>

            <div className="level04-answers">
              {answers.map((answer) => {
                const isSelected = selectedAnswer === answer.id;
                const isRightAnswer = answer.id === correctAnswer;

                let answerClass = "";

                if (selectedAnswer !== null && isSelected) {
                  answerClass = isRightAnswer
                    ? "level04-answer-correct"
                    : "level04-answer-wrong";
                } else if (selectedAnswer !== null && isRightAnswer) {
                  answerClass = "level04-answer-reveal";
                }

                return (
                  <button
                    key={answer.id}
                    type="button"
                    className={`level04-answer ${answerClass}`}
                    onClick={() => handleAnswer(answer.id)}
                    disabled={selectedAnswer !== null}
                  >
                    <span className="level04-answer-letter">{answer.id}</span>

                    <span className="level04-answer-copy">
                      <strong>{answer.title}</strong>
                      <small>{answer.description}</small>
                    </span>

                    {selectedAnswer !== null &&
                      (isSelected && isRightAnswer ? (
                        <CheckCircle size={22} />
                      ) : isSelected ? (
                        <XCircle size={22} />
                      ) : isRightAnswer ? (
                        <CheckCircle size={22} />
                      ) : null)}

                    {selectedAnswer === null && (
                      <ArrowRight
                        className="level04-answer-arrow"
                        size={19}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {selectedAnswer !== null && (
              <div
                className={`level04-feedback ${
                  isCorrect
                    ? "level04-feedback-success"
                    : "level04-feedback-error"
                }`}
                role="status"
              >
                <div className="level04-feedback-heading">
                  {isCorrect ? (
                    <CheckCircle size={23} />
                  ) : (
                    <AlertTriangle size={23} />
                  )}

                  <strong>
                    {isCorrect ? "MISSION COMPLETE!" : "PASSWORD TRAP!"}
                  </strong>
                </div>

                <p>
                  {isCorrect
                    ? "Correct! Never share your password. Use a strong, unique password for every account, turn on two-factor authentication when available, and use a password manager if you can."
                    : "Sharing a password or reusing it across accounts can put your accounts at risk. Keep your passwords private and choose a strong, unique password. Try again!"}
                </p>

                {isCorrect ? (
                  <button
                    type="button"
                    className="level04-action-button"
                    onClick={() => navigate("/level-05")}
                  >
                    FINAL MISSION
                    <ArrowRight size={18} />
                  </button>
                ) : (
                  <button
                    type="button"
                    className="level04-action-button"
                    onClick={resetGame}
                  >
                    <RotateCcw size={17} />
                    TRY AGAIN
                  </button>
                )}
              </div>
            )}

            <section className="level04-score-panel">
              <div className="level04-score-top">
                <div>
                  <span className="level04-score-label">
                    <ShieldCheck size={15} />
                    YOUR TOTAL SCORE
                  </span>

                  <div className="level04-score-value">
                    {score}
                    <span> / 100</span>
                  </div>
                </div>

                <div className="level04-score-percentage">{score}%</div>
              </div>

              <div
                className="level04-score-track"
                role="progressbar"
                aria-label="Overall cyber safety score"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={score}
              >
                <div
                  className="level04-score-fill"
                  style={{ width: `${score}%` }}
                ></div>
              </div>

              <p className="level04-score-caption">
                Earn 20 marks for each completed mission.
              </p>

              <div className="level04-mission-progress">
                <div className="level04-mission-progress-heading">
                  <span>MISSION PROGRESS</span>
                  <strong>{completedCount} / 5 COMPLETED</strong>
                </div>

                <div className="level04-mission-steps">
                  {[1, 2, 3, 4, 5].map((level) => {
                    const isCompleted = completedLevels.includes(level);

                    return (
                      <div
                        key={level}
                        className={`level04-mission-step ${
                          isCompleted ? "level04-mission-step-complete" : ""
                        }`}
                      >
                        <span className="level04-mission-marker">
                          {isCompleted ? "✓" : level}
                        </span>

                        <small>LEVEL {String(level).padStart(2, "0")}</small>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          </div>

          <aside className="level04-byte-panel">
            <div className="level04-byte-orbit"></div>

            <div className="level04-byte-image">
              <img
                src={
                  selectedAnswer === null
                    ? byteWarning
                    : isCorrect
                    ? byteCheering
                    : byteThinking
                }
                alt="BYTE, your cyber safety buddy"
              />
            </div>

            <div className="level04-byte-message">
              <span>
                {selectedAnswer === null
                  ? "BYTE SAYS"
                  : isCorrect
                  ? "GREAT DEFENSE!"
                  : "STAY ALERT!"}
              </span>

              <p>
                {selectedAnswer === null
                  ? "Your password is like a key to your digital home. Keep it to yourself!"
                  : isCorrect
                  ? "You protected your account. Strong passwords make it harder for others to get in."
                  : "Don't hand over your digital keys. Think carefully and try again!"}
              </p>
            </div>

            <div className="level04-byte-tip">
              <ShieldCheck size={19} />
              <div>
                <strong>SAFETY TIP</strong>
                <p>
                  Use a different strong password for each account, and never
                  share it through messages.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <footer className="level04-footer">
        <span>BYTE'S CYBER WORLD</span>
        <span>KEEP YOUR PASSWORDS PRIVATE.</span>
      </footer>
    </main>
  );
}

export default Level04;
