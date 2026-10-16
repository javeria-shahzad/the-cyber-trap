
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  AlertTriangle,
  CheckCircle,
  XCircle,
  RotateCcw,
  MessageCircle,
  UserRound,
  LockKeyhole,
} from "lucide-react";

import byteThinking from "../assets/thinking.png";
import byteWorried from "../assets/worried.png";
import byteCheering from "../assets/cheering.png";

import {
  getCyberScore,
  getCompletedLevels,
  completeLevel,
} from "../utils/score";

import "../styles/Level03.css";

const answers = [
  {
    id: "A",
    title: "SHARE MY DETAILS",
    description: "Tell the stranger my name and school.",
  },
  {
    id: "B",
    title: "STOP AND TELL A TRUSTED ADULT",
    description: "Keep my information private and ask for help.",
  },
  {
    id: "C",
    title: "SEND A PHOTO",
    description: "Send a picture because they asked nicely.",
  },
];

function Level03() {
  const navigate = useNavigate();

  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(() => getCyberScore());
  const [completedLevels, setCompletedLevels] = useState(
    () => getCompletedLevels()
  );

  const correctAnswer = "B";
  const isCorrect = selectedAnswer === correctAnswer;

  const handleAnswer = (answer) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(answer);

    if (answer === correctAnswer) {
      const updatedLevels = completeLevel(3);

      setCompletedLevels(updatedLevels);
      setScore(getCyberScore());
    }
  };

  const resetGame = () => {
    setSelectedAnswer(null);
    setScore(getCyberScore());
    setCompletedLevels(getCompletedLevels());
  };

  return (
    <main className="level03-page">
      <div className="level03-background">
        <div className="level03-grid" />
        <div className="level03-orb level03-orb-one" />
        <div className="level03-orb level03-orb-two" />
      </div>

      <header className="level03-header">
        <button
          className="level03-back-button"
          onClick={() => navigate("/lets-play")}
          type="button"
        >
          <ArrowLeft size={17} />
          ALL MISSIONS
        </button>

        <div className="level03-progress-label">
          <ShieldCheck size={17} />
          CYBER SAFETY TRAINING
        </div>

        <span className="level03-level-tag">LEVEL 03 / 05</span>
      </header>

      <section className="level03-content">
        <div className="level03-intro">
          <span className="level03-eyebrow">
            <span className="level03-live-dot" />
            MISSION 03 — THE STRANGER
          </span>

          <h1>
            THE
            <br />
            <span>STRANGER</span>
          </h1>

          <p>
            Not everyone online is who they say they are. Can you protect
            your personal information when a stranger contacts you?
          </p>
        </div>

        <div className="level03-game-layout">
          <div className="level03-scenario">
            <div className="level03-scenario-top">
              <div className="level03-scenario-icon">
                <MessageCircle size={21} />
              </div>

              <div className="level03-sender-details">
                <span className="level03-small-label">
                  PRIVATE MESSAGE
                </span>
                <h2>Unknown Person</h2>
              </div>

              <span className="level03-warning-badge">
                <AlertTriangle size={14} />
                STRANGER
              </span>
            </div>

            <div className="level03-message">
              <div className="level03-chat-avatar">
                <UserRound size={20} />
              </div>

              <div className="level03-chat-bubble">
                <span className="level03-chat-label">
                  MESSAGE FROM A STRANGER
                </span>

                <p>
                  Hi! You seem really nice. What's your real name and
                  which school do you go to?
                </p>

                <p>
                  Can you send me your photo too? Don't worry, it's our
                  secret!
                </p>
              </div>

              <div className="level03-link-warning">
                <LockKeyhole size={16} />
                <span>
                  Never share personal details or photos with strangers
                  online.
                </span>
              </div>
            </div>

            <div className="level03-question">
              <span>YOUR MISSION</span>
              <h3>What should you do next?</h3>
              <p>Choose the safest action, player.</p>
            </div>

            <div className="level03-answers">
              {answers.map((answer) => {
                const isSelected = selectedAnswer === answer.id;
                const isRightAnswer = answer.id === correctAnswer;

                let answerClass = "";

                if (selectedAnswer !== null && isSelected) {
                  answerClass = isRightAnswer
                    ? "level03-answer-correct"
                    : "level03-answer-wrong";
                } else if (
                  selectedAnswer !== null &&
                  isRightAnswer
                ) {
                  answerClass = "level03-answer-reveal";
                }

                return (
                  <button
                    key={answer.id}
                    type="button"
                    className={`level03-answer ${answerClass}`}
                    onClick={() => handleAnswer(answer.id)}
                    disabled={selectedAnswer !== null}
                  >
                    <span className="level03-answer-letter">
                      {answer.id}
                    </span>

                    <span className="level03-answer-copy">
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
                        className="level03-answer-arrow"
                        size={19}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* TOTAL SCORE AND CIRCULAR MISSION PROGRESS */}
            <div className="level03-score-panel">
              <div className="level03-score-top">
                <div>
                  <span className="level03-score-label">
                    <ShieldCheck size={15} />
                    YOUR TOTAL SCORE
                  </span>

                  <div className="level03-score-value">
                    {score}
                    <span> / 100</span>
                  </div>
                </div>

                <div className="level03-score-percentage">
                  {score}%
                </div>
              </div>

              <div
                className="level03-score-track"
                role="progressbar"
                aria-label="Overall cyber safety score"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={score}
              >
                <div
                  className="level03-score-fill"
                  style={{ width: `${score}%` }}
                />
              </div>

              <p className="level03-score-caption">
                Earn 20 marks for each completed mission.
              </p>

              <div className="level03-mission-progress">
                <div className="level03-mission-progress-heading">
                  <span>MISSION PROGRESS</span>
                  <strong>
                    {completedLevels.length} / 5 COMPLETED
                  </strong>
                </div>

                <div className="level03-mission-steps">
                  {[1, 2, 3, 4, 5].map((level) => {
                    const isCompleted = completedLevels.includes(level);

                    return (
                      <div
                        key={level}
                        className={`level03-mission-step ${
                          isCompleted
                            ? "level03-mission-step-complete"
                            : ""
                        }`}
                      >
                        <span className="level03-mission-marker">
                          {isCompleted ? "✓" : level}
                        </span>

                        <small>
                          LEVEL {String(level).padStart(2, "0")}
                        </small>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {selectedAnswer !== null && (
              <div
                className={`level03-feedback ${
                  isCorrect
                    ? "level03-feedback-success"
                    : "level03-feedback-error"
                }`}
                role="status"
              >
                <div className="level03-feedback-heading">
                  {isCorrect ? (
                    <CheckCircle size={23} />
                  ) : (
                    <AlertTriangle size={23} />
                  )}

                  <strong>
                    {isCorrect
                      ? "MISSION COMPLETE!"
                      : "NOT SO FAST, PLAYER!"}
                  </strong>
                </div>

                <p>
                  {isCorrect
                    ? "Correct! Keep your personal information private. If a stranger asks for your name, school, photos, or secrecy, stop responding and tell a trusted adult."
                    : "Sharing your personal details or photos with strangers can put you at risk. Do not reply with private information. Try again and choose the safest action."}
                </p>

                {isCorrect ? (
                  <div className="level03-completion-actions">
                    <span className="level03-earned-marks">
                      <CheckCircle size={16} />
                      +20 MARKS EARNED
                    </span>

                    <button
                      type="button"
                      className="level03-action-button"
                      onClick={() => navigate("/level-04")}
                    >
                      NEXT MISSION
                      <ArrowRight size={18} />
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    className="level03-action-button"
                    onClick={resetGame}
                  >
                    <RotateCcw size={17} />
                    TRY AGAIN
                  </button>
                )}
              </div>
            )}
          </div>

          <aside className="level03-byte-panel">
            <div className="level03-byte-orbit" />

            <div className="level03-byte-image">
              <img
                src={
                  selectedAnswer === null
                    ? byteThinking
                    : isCorrect
                    ? byteCheering
                    : byteWorried
                }
                alt="BYTE, your cyber safety buddy"
              />
            </div>

            <div className="level03-byte-message">
              <span>
                {selectedAnswer === null
                  ? "BYTE SAYS"
                  : isCorrect
                  ? "GREAT JOB!"
                  : "WATCH OUT!"}
              </span>

              <p>
                {selectedAnswer === null
                  ? "Someone you meet online may not be who they claim to be. Keep your personal information private."
                  : isCorrect
                  ? "You made a safe choice! A trusted adult can help if someone online makes you uncomfortable."
                  : "Stay alert! Never share your personal details or photos with someone you don't know."}
              </p>
            </div>

            <div className="level03-byte-tip">
              <ShieldCheck size={19} />

              <div>
                <strong>SAFETY TIP</strong>
                <p>
                  Never share your full name, school, address, password,
                  or private photos with strangers online.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <footer className="level03-footer">
        <span>BYTE'S CYBER WORLD</span>
        <span>THINK FIRST. CLICK SMART.</span>
      </footer>
    </main>
  );
}

export default Level03;
