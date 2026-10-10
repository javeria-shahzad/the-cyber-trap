
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Gift,
  ShieldCheck,
  Zap,
  RotateCcw,
  CircleHelp,
  Coins,
  LockKeyhole,
  CheckCircle,
  XCircle,
} from "lucide-react";

import byteThinking from "../assets/thinking.png";
import byteWorried from "../assets/worried.png";
import byteCheering from "../assets/cheering.png";

import {
  getCyberScore,
  getCompletedLevels,
  completeLevel,
} from "../utils/score";

import "../styles/Level01.css";

const answers = [
  {
    id: "A",
    text: "CLICK IT",
    description: "Claim the free coins immediately.",
    correct: false,
    feedback:
      "Hold on, player! Unexpected rewards can lead to suspicious links. Never click before checking where the offer came from.",
    character: byteWorried,
  },
  {
    id: "B",
    text: "STOP & CHECK",
    description: "Check whether the reward is real.",
    correct: true,
    feedback:
      "GOOD CATCH! You spotted a possible trap. Unexpected rewards can be used to make you click suspicious links or reveal personal information.",
    character: byteCheering,
  },
  {
    id: "C",
    text: "SHARE IT",
    description: "Send the offer to your friends.",
    correct: false,
    feedback:
      "Not so fast! Sharing an unverified offer could put your friends at risk too. Check whether a reward is genuine before forwarding it.",
    character: byteThinking,
  },
];

function Level01() {
  const navigate = useNavigate();

  const [selected, setSelected] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(() => getCyberScore());
  const [completedLevels, setCompletedLevels] = useState(
    () => getCompletedLevels()
  );

  const selectedAnswer = answers.find(
    (answer) => answer.id === selected
  );

  const handleAnswer = (answer) => {
    if (showFeedback) return;

    setSelected(answer.id);
    setShowFeedback(true);

    if (answer.correct) {
      const updatedLevels = completeLevel(1);

      setCompletedLevels(updatedLevels);
      setScore(getCyberScore());
    }
  };

  const resetLevel = () => {
    setSelected(null);
    setShowFeedback(false);
    setScore(getCyberScore());
    setCompletedLevels(getCompletedLevels());
  };

  return (
    <main className="level01-page">
      <div className="level01-background">
        <div className="level01-grid"></div>
        <div className="level01-glow level01-glow-one"></div>
        <div className="level01-glow level01-glow-two"></div>
      </div>

      <header className="level01-topbar">
        <button
          type="button"
          className="level01-back"
          onClick={() => navigate("/play")}
        >
          <ArrowLeft size={17} />
          ALL LEVELS
        </button>

        <div className="level01-brand">
          <ShieldCheck size={19} />
          <span>BYTE'S CYBER WORLD</span>
        </div>

        <div className="level01-stage">
          <span className="level01-stage-dot"></span>
          LEVEL 01 / 05
        </div>
      </header>

      <section className="level01-hero">
        <div className="level01-heading-block">
          <div className="level01-eyebrow">
            <Zap size={14} />
            MISSION 01 — REWARD DETECTIVE
          </div>

          <h1>
            THE FAKE
            <span> REWARD</span>
          </h1>

          <p>
            A mysterious reward just appeared! Can you spot the
            trap before you make your move?
          </p>
        </div>
      </section>

      <section className="level01-game">
        <div className="level01-reward-side">
          <div className="level01-terminal-bar">
            <div className="level01-terminal-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <span>INCOMING REWARD</span>

            <CircleHelp size={16} />
          </div>

          <div className="level01-reward-popup">
            <div className="level01-popup-scan"></div>

            <div className="level01-reward-tag">
              <Gift size={14} />
              UNVERIFIED OFFER
            </div>

            <div className="level01-treasure">
              <div className="level01-treasure-glow"></div>

              <div className="level01-coin level01-coin-one">
                <Coins size={25} />
              </div>

              <div className="level01-coin level01-coin-two">
                <Coins size={20} />
              </div>

              <div className="level01-coin level01-coin-three">
                <Coins size={23} />
              </div>

              <div className="level01-gift-box">
                <Gift size={64} strokeWidth={1.4} />
              </div>
            </div>

            <div className="level01-reward-copy">
              <span className="level01-congrats">
                🎉 CONGRATULATIONS!
              </span>

              <h2>5,000</h2>

              <div className="level01-free-coins">
                <Coins size={19} />
                FREE COINS!
              </div>

              <p>
                You've been selected for an exclusive reward!
              </p>
            </div>

            <button
              type="button"
              className="level01-claim-button"
              onClick={() => handleAnswer(answers[0])}
              disabled={showFeedback}
            >
              <Gift size={19} />
              CLAIM REWARD
              <ArrowRight size={17} />
            </button>

            <div className="level01-popup-warning">
              <LockKeyhole size={13} />
              Is this offer really safe?
            </div>
          </div>

          <div className="level01-reward-caption">
            <span className="level01-caption-pulse"></span>
            A suspicious offer has entered your game.
          </div>
        </div>

        <div className="level01-choice-side">
          <div className="level01-question-header">
            <span className="level01-question-number">01</span>

            <div>
              <span className="level01-question-label">
                YOUR MISSION
              </span>

              <h2>WHAT WOULD YOU DO?</h2>
            </div>
          </div>

          <p className="level01-question-hint">
            Choose your response. Think carefully before you act.
          </p>

          <div className="level01-answers">
            {answers.map((answer) => {
              const isSelected = selected === answer.id;

              return (
                <button
                  key={answer.id}
                  type="button"
                  className={`level01-answer ${
                    isSelected
                      ? answer.correct
                        ? "correct"
                        : "wrong"
                      : showFeedback && answer.correct
                        ? "correct"
                        : ""
                  }`}
                  onClick={() => handleAnswer(answer)}
                  disabled={showFeedback}
                >
                  <span className="level01-answer-letter">
                    {answer.id}
                  </span>

                  <span className="level01-answer-copy">
                    <strong>{answer.text}</strong>
                    <small>{answer.description}</small>
                  </span>

                  <span className="level01-answer-indicator">
                    {showFeedback && isSelected ? (
                      answer.correct ? (
                        <CheckCircle size={21} />
                      ) : (
                        <XCircle size={21} />
                      )
                    ) : showFeedback && answer.correct ? (
                      <CheckCircle size={21} />
                    ) : (
                      <ArrowRight size={18} />
                    )}
                  </span>
                </button>
              );
            })}
          </div>

          {/* TOTAL SCORE AND MISSION PROGRESS — BELOW ANSWERS */}
          <div className="level01-score-panel">
            <div className="level01-score-top">
              <div>
                <span className="level01-score-label">
                  <ShieldCheck size={15} />
                  YOUR TOTAL SCORE
                </span>

                <div className="level01-score-value">
                  {score}
                  <span> / 100</span>
                </div>
              </div>

              <div className="level01-score-percentage">
                {score}%
              </div>
            </div>

            <div
              className="level01-score-track"
              role="progressbar"
              aria-label="Overall cyber safety score"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={score}
            >
              <div
                className="level01-score-fill"
                style={{ width: `${score}%` }}
              ></div>
            </div>

            <p className="level01-score-caption">
              Earn 20 marks for each completed mission.
            </p>

            <div className="level01-mission-progress">
              <div className="level01-mission-progress-heading">
                <span>MISSION PROGRESS</span>

                <strong>
                  {completedLevels.length} / 5 COMPLETED
                </strong>
              </div>

              <div className="level01-mission-steps">
                {[1, 2, 3, 4, 5].map((level) => {
                  const isCompleted = completedLevels.includes(level);

                  return (
                    <div
                      key={level}
                      className={`level01-mission-step ${
                        isCompleted
                          ? "level01-mission-step-complete"
                          : ""
                      }`}
                    >
                      <span className="level01-mission-marker">
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

          {showFeedback && selectedAnswer && (
            <div
              className={`level01-inline-feedback ${
                selectedAnswer.correct
                  ? "level01-inline-success"
                  : "level01-inline-error"
              }`}
              role="status"
            >
              <img
                src={selectedAnswer.character}
                alt="BYTE"
                className="level01-feedback-byte"
              />

              <div className="level01-inline-content">
                <h3>
                  {selectedAnswer.correct
                    ? "CORRECT ANSWER!"
                    : "WRONG ANSWER!"}
                </h3>

                <p>{selectedAnswer.feedback}</p>

                {selectedAnswer.correct && (
                  <p className="level01-inline-marks">
                    +20 MARKS
                  </p>
                )}

                <button
                  type="button"
                  className={
                    selectedAnswer.correct
                      ? "level01-inline-action"
                      : "level01-inline-retry"
                  }
                  onClick={
                    selectedAnswer.correct
                      ? () => navigate("/level-02")
                      : resetLevel
                  }
                >
                  {selectedAnswer.correct ? (
                    <>
                      NEXT MISSION <ArrowRight size={16} />
                    </>
                  ) : (
                    <>
                      <RotateCcw size={15} /> TRY AGAIN
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          <div className="level01-think-tip">
            <Zap size={16} />
            <span>
              TIP: If an offer sounds too good to be true, stop and check.
            </span>
          </div>
        </div>
      </section>

      <footer className="level01-footer">
        <span>BYTE SECURITY TRAINING</span>

        <span className="level01-footer-center">
          <span></span>
          PLAYER SAFETY FIRST
        </span>

        <span>MISSION 01</span>
      </footer>
    </main>
  );
}

export default Level01;
