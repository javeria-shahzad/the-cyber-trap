
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Link as LinkIcon,
  AlertTriangle,
  CheckCircle,
  XCircle,
  RotateCcw,
  MessageCircle,
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

import "../styles/Level02.css";

const answers = [
  {
    id: "A",
    title: "CLICK THE LINK",
    description: "It might be a great offer!",
  },
  {
    id: "B",
    title: "CHECK IT FIRST",
    description: "Verify the sender and link before doing anything.",
  },
  {
    id: "C",
    title: "FORWARD IT",
    description: "Share the offer with your friends.",
  },
];

function Level02() {
  const navigate = useNavigate();

  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(() => getCyberScore());
  const [completedLevels, setCompletedLevels] = useState(
    () => getCompletedLevels()
  );

  const correctAnswer = "B";
  const isCorrect = selectedAnswer === correctAnswer;

  const handleAnswer = (answer) => {
    if (selectedAnswer !== null) {
      return;
    }

    setSelectedAnswer(answer);

    if (answer === correctAnswer) {
      const updatedLevels = completeLevel(2);

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
    <main className="level02-page">
      <div className="level02-background">
        <div className="level02-grid"></div>
        <div className="level02-orb level02-orb-one"></div>
        <div className="level02-orb level02-orb-two"></div>
      </div>

      <header className="level02-header">
        <button
          className="level02-back-button"
          onClick={() => navigate("/lets-play")}
          type="button"
        >
          <ArrowLeft size={17} />
          ALL MISSIONS
        </button>

        <div className="level02-progress-label">
          <ShieldCheck size={17} />
          CYBER SAFETY TRAINING
        </div>

        <span className="level02-level-tag">LEVEL 02 / 05</span>
      </header>

      <section className="level02-content">
        <div className="level02-intro">
          <span className="level02-eyebrow">
            <span className="level02-live-dot"></span>
            MISSION 02 — LINK DETECTIVE
          </span>

          <h1>
            THE SUSPICIOUS
            <br />
            <span>LINK</span>
          </h1>

          <p>
            Not every link is safe. Can you spot the warning signs before
            someone tricks you into clicking?
          </p>
        </div>

        <div className="level02-game-layout">
          <div className="level02-scenario">
            <div className="level02-scenario-top">
              <div className="level02-scenario-icon">
                <MessageCircle size={21} />
              </div>

              <div>
                <span className="level02-small-label">
                  INCOMING MESSAGE
                </span>
                <h2>Unknown Sender</h2>
              </div>

              <span className="level02-warning-badge">
                <AlertTriangle size={14} />
                UNVERIFIED
              </span>
            </div>

            <div className="level02-message">
              <p>🎉 Congratulations! You have won a FREE smartphone!</p>
              <p>Claim your prize now before it expires!</p>

              <div className="level02-fake-link">
                <LinkIcon size={18} />
                <span>http://claim-your-prize.example</span>
              </div>

              <div className="level02-link-warning">
                <LockKeyhole size={16} />
                <span>Sender unknown. Offer not verified.</span>
              </div>
            </div>

            <div className="level02-question">
              <span>YOUR MISSION</span>
              <h3>What should you do next?</h3>
              <p>Choose the safest action, player.</p>
            </div>

            <div className="level02-answers">
              {answers.map((answer) => {
                const isSelected = selectedAnswer === answer.id;
                const isRightAnswer = answer.id === correctAnswer;

                let answerClass = "";

                if (selectedAnswer !== null && isSelected) {
                  answerClass = isRightAnswer
                    ? "level02-answer-correct"
                    : "level02-answer-wrong";
                } else if (
                  selectedAnswer !== null &&
                  isRightAnswer
                ) {
                  answerClass = "level02-answer-reveal";
                }

                return (
                  <button
                    key={answer.id}
                    type="button"
                    className={`level02-answer ${answerClass}`}
                    onClick={() => handleAnswer(answer.id)}
                    disabled={selectedAnswer !== null}
                  >
                    <span className="level02-answer-letter">
                      {answer.id}
                    </span>

                    <span className="level02-answer-copy">
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
                        className="level02-answer-arrow"
                        size={19}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* SCORE PANEL — BELOW ANSWER CARDS */}
            <div className="level02-score-panel">
              <div className="level02-score-top">
                <div>
                  <span className="level02-score-label">
                    <ShieldCheck size={15} />
                    YOUR TOTAL SCORE
                  </span>

                  <div className="level02-score-value">
                    {score}
                    <span> / 100</span>
                  </div>
                </div>

                <div className="level02-score-percentage">
                  {score}%
                </div>
              </div>

              <div
                className="level02-score-track"
                role="progressbar"
                aria-label="Overall cyber safety score"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={score}
              >
                <div
                  className="level02-score-fill"
                  style={{ width: `${score}%` }}
                ></div>
              </div>

              <p className="level02-score-caption">
                Earn 20 marks for each completed mission.
              </p>

              {/* MISSION PROGRESS */}
              <div className="level02-mission-progress">
                <div className="level02-mission-progress-heading">
                  <span>MISSION PROGRESS</span>
                  <strong>
                    {completedLevels.length} / 5 COMPLETED
                  </strong>
                </div>

                <div className="level02-mission-steps">
                  {[1, 2, 3, 4, 5].map((level) => {
                    const isCompleted = completedLevels.includes(level);

                    return (
                      <div
                        key={level}
                        className={`level02-mission-step ${
                          isCompleted
                            ? "level02-mission-step-complete"
                            : ""
                        }`}
                      >
                        <span className="level02-mission-marker">
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
                className={`level02-feedback ${
                  isCorrect
                    ? "level02-feedback-success"
                    : "level02-feedback-error"
                }`}
                role="status"
              >
                <div className="level02-feedback-heading">
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
                    ? "Correct! Check who sent the message and inspect the link carefully. Unexpected prizes and urgent messages can be signs of phishing."
                    : "That choice could put you at risk. Unknown links may lead to fake websites designed to steal your information. Try again and choose the safest action."}
                </p>

                {isCorrect ? (
                  <div className="level02-completion-actions">
                    <span className="level02-earned-marks">
                      <CheckCircle size={16} />
                      +20 MARKS EARNED
                    </span>

                    <button
                      type="button"
                      className="level02-action-button"
                      onClick={() => navigate("/level-03")}
                    >
                      NEXT MISSION
                      <ArrowRight size={18} />
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    className="level02-action-button"
                    onClick={resetGame}
                  >
                    <RotateCcw size={17} />
                    TRY AGAIN
                  </button>
                )}
              </div>
            )}
          </div>

          <aside className="level02-byte-panel">
            <div className="level02-byte-orbit"></div>

            <div className="level02-byte-image">
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

            <div className="level02-byte-message">
              <span>
                {selectedAnswer === null
                  ? "BYTE SAYS"
                  : isCorrect
                  ? "GREAT JOB!"
                  : "WATCH OUT!"}
              </span>

              <p>
                {selectedAnswer === null
                  ? "Pause before you click! Let's investigate this suspicious message."
                  : isCorrect
                  ? "You spotted the danger. A smart player always checks first!"
                  : "Don't rush. Look for warning signs and try once more!"}
              </p>
            </div>

            <div className="level02-byte-tip">
              <ShieldCheck size={19} />
              <div>
                <strong>SAFETY TIP</strong>
                <p>
                  Never enter passwords or personal details on an
                  untrusted website.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <footer className="level02-footer">
        <span>BYTE'S CYBER WORLD</span>
        <span>THINK FIRST. CLICK SMART.</span>
      </footer>
    </main>
  );
}

export default Level02;