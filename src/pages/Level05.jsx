
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Globe,
  AlertTriangle,
  CheckCircle,
  XCircle,
  RotateCcw,
  LockKeyhole,
  Trophy,
  Link,
  MessageCircle,
  KeyRound,
  Brain,
} from "lucide-react";

import byteThinking from "../assets/thinking.png";
import byteWarning from "../assets/warning.png";
import byteCheering from "../assets/cheering.png";
// import { completeLevel, getCompletedLevels } from "../utils/score";
import {
  completeLevel,
  getCompletedLevels,
  resetCyberProgress,
} from "../utils/score";
import "../styles/Level05.css";

const answers = [
  {
    id: "A",
    title: "Enter my details",
    description: "The website looks real, so I should log in.",
    correct: false,
    feedback:
      "A fake website can copy the design of a real one. Never enter your password just because a page looks familiar.",
  },
  {
    id: "B",
    title: "Check the website address",
    description: "Look for misspellings and an unusual domain.",
    correct: true,
    feedback:
      "Correct! Check the URL carefully, avoid suspicious links, and open the official website directly when in doubt.",
  },
  {
    id: "C",
    title: "Trust the logo",
    description: "A familiar logo proves the website is genuine.",
    correct: false,
    feedback:
      "Logos and page designs can be copied. The logo alone cannot prove that a website is safe.",
  },
];

function Level05() {
  const navigate = useNavigate();

  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [completedLevels, setCompletedLevels] = useState(() =>
    getCompletedLevels()
  );

  const selectedOption = answers.find(
    (answer) => answer.id === selectedAnswer
  );
  const isCorrect = selectedOption?.correct;

  const score = Math.min(completedLevels.length * 20, 100);

  const handleAnswer = (answerId) => {
    if (showFeedback) return;

    const answer = answers.find((item) => item.id === answerId);

    setSelectedAnswer(answerId);
    setShowFeedback(true);

    if (answer?.correct) {
      completeLevel(5);
      setCompletedLevels(getCompletedLevels());
      setShowResult(true);
    }
  };

  const handleRetry = () => {
    setSelectedAnswer(null);
    setShowFeedback(false);
  };

  
const handlePlayAgain = () => {
  resetCyberProgress();

  setCompletedLevels([]);
  setSelectedAnswer(null);
  setShowFeedback(false);
  setShowResult(false);

  navigate("/level-01");
};

const handleBackToAllMissions = () => {
  const savedLevels = getCompletedLevels();

  if (savedLevels.length === 5) {
    resetCyberProgress();
  }

  navigate("/play");
};


  if (showResult) {
    return (
      <main className="level05-page level05-result-page">
        <section className="level05-result-card">
          <div className="level05-result-sparkle">
            <Trophy size={30} />
          </div>

          <span className="level05-eyebrow">
            ALL MISSIONS COMPLETED
          </span>

          <h1>
            MISSION <span>COMPLETE!</span>
          </h1>

          <h2 className="level05-result-subtitle">
            YOU SPOTTED THE TRAPS!
          </h2>

          <div className="level05-result-byte-wrap">
            <div className="level05-character-glow" />
            <img
              src={byteCheering}
              alt="BYTE cheering"
              className="level05-result-byte"
            />
          </div>

          <section
            className="level05-score-section"
            aria-label="Your cyber score"
          >
            <div className="level05-score-heading">
              <span>YOUR TOTAL SCORE</span>
              <strong>{score} / 100</strong>
            </div>

            <div
              className="level05-score-track"
              role="progressbar"
              aria-label="Your cyber score"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={score}
            >
              <div
                className="level05-score-fill"
                style={{ width: `${score}%` }}
              />
            </div>

            <p>
              You earned 20 marks for each completed mission.
            </p>
          </section>

          <section className="level05-mission-progress">
            <div className="level05-mission-progress-heading">
              <span>MISSION PROGRESS</span>
              <strong>
                {completedLevels.length} / 5 COMPLETED
              </strong>
            </div>

            <div className="level05-mission-steps">
              {[1, 2, 3, 4, 5].map((level) => {
                const isCompleted = completedLevels.includes(level);

                return (
                  <div
                    key={level}
                    className={`level05-mission-step ${
                      isCompleted
                        ? "level05-mission-step-complete"
                        : ""
                    }`}
                  >
                    <span className="level05-mission-marker">
                      {isCompleted ? "✓" : level}
                    </span>
                    <small>
                      LEVEL {String(level).padStart(2, "0")}
                    </small>
                  </div>
                );
              })}
            </div>
          </section>

          <div className="level05-byte-result-message">
            <ShieldCheck size={22} />
            <p>
              <strong>BYTE SAYS:</strong> You're getting better at
              spotting online traps!
            </p>
          </div>

          <section className="level05-learned-section">
            <h3>WHAT DID YOU LEARN?</h3>

            <ul>
              <li>
                <ShieldCheck size={18} />
                <span>Protect your information</span>
              </li>
              <li>
                <Link size={18} />
                <span>Check suspicious links</span>
              </li>
              <li>
                <MessageCircle size={18} />
                <span>Be careful with strangers</span>
              </li>
              <li>
                <KeyRound size={18} />
                <span>Keep passwords private</span>
              </li>
              <li>
                <Brain size={18} />
                <span>Think before clicking</span>
              </li>
            </ul>
          </section>

          <div className="level05-result-actions">
            <button
              className="level05-primary-button level05-play-again-button"
              type="button"
              onClick={handlePlayAgain}
            >
              <RotateCcw size={18} />
              PLAY AGAIN
            </button>

            {/* <button
              className="level05-all-missions-button"
              type="button"
              onClick={() => navigate("/play")}
            >
              <ArrowLeft size={17} />
              BACK TO ALL MISSIONS
            </button> */}

            <button
  className="level05-all-missions-button"
  type="button"
  onClick={handleBackToAllMissions}
>
  <ArrowLeft size={17} />
  BACK TO ALL MISSIONS
</button>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="level05-page">
      <div className="level05-topbar">
        <button
          className="level05-back-button"
          onClick={() => navigate("/lets-play")}
          type="button"
        >
          <ArrowLeft size={18} />
          <span>Back to Levels</span>
        </button>

        <div className="level05-level-label">
          <span className="level05-status-dot" />
          LEVEL 05 / 05
        </div>
      </div>

      <section className="level05-game">
        <div className="level05-heading">
          <span className="level05-eyebrow">MISSION 05</span>

          <h1>
            THE FAKE <span>WEBSITE</span>
          </h1>

          <p>
            Not every website is what it seems. Can you spot the warning
            signs before sharing your information?
          </p>
        </div>

        <div className="level05-progress" aria-label="Level 5 of 5">
          <span className="level05-progress-fill" />
        </div>

        <div className="level05-content">
          <div className="level05-character-panel">
            <div className="level05-character-glow" />

            <div className="level05-character-frame">
              <img
                src={
                  showFeedback && isCorrect
                    ? byteCheering
                    : showFeedback
                      ? byteWarning
                      : byteThinking
                }
                alt="BYTE cyber safety buddy"
                className="level05-byte"
              />
            </div>

            <div className="level05-character-tag">
              <ShieldCheck size={16} />
              <span>BYTE'S SAFETY CHECK</span>
            </div>

            <p className="level05-byte-message">
              {showFeedback
                ? isCorrect
                  ? "Nice catch! Stay alert online."
                  : "Pause and inspect the clues."
                : "This site looks familiar... but is it real?"}
            </p>
          </div>

          <div className="level05-question-panel">
            <div className="level05-scenario">
              <div className="level05-scenario-icon">
                <Globe size={23} />
              </div>

              <div>
                <span className="level05-small-label">SCENARIO</span>
                <h2>A website asks you to log in</h2>
              </div>
            </div>

            <div className="level05-fake-url">
              <LockKeyhole size={17} />
              <span>www.example-login-security.com</span>
              <AlertTriangle
                size={17}
                className="level05-url-warning"
              />
            </div>

            <p className="level05-question">
              The page uses a familiar logo, but the link came from a
              random message. What should you do first?
            </p>

            <div className="level05-answers">
              {answers.map((answer) => {
                const isSelected = selectedAnswer === answer.id;

                const answerClass = [
                  "level05-answer",
                  isSelected ? "level05-answer-selected" : "",
                  showFeedback && isSelected
                    ? answer.correct
                      ? "level05-answer-correct"
                      : "level05-answer-incorrect"
                    : "",
                ]
                  .filter(Boolean)
                  .join(" ");

                return (
                  <button
                    key={answer.id}
                    className={answerClass}
                    type="button"
                    onClick={() => handleAnswer(answer.id)}
                    disabled={showFeedback}
                  >
                    <span className="level05-answer-letter">
                      {answer.id}
                    </span>

                    <span className="level05-answer-copy">
                      <strong>{answer.title}</strong>
                      <small>{answer.description}</small>
                    </span>

                    {showFeedback &&
                      isSelected &&
                      (answer.correct ? (
                        <CheckCircle size={20} />
                      ) : (
                        <XCircle size={20} />
                      ))}
                  </button>
                );
              })}
            </div>

            {showFeedback && selectedOption && (
              <div
                className={`level05-feedback ${
                  isCorrect
                    ? "level05-feedback-success"
                    : "level05-feedback-error"
                }`}
                role="status"
              >
                <div className="level05-feedback-title">
                  {isCorrect ? (
                    <CheckCircle size={19} />
                  ) : (
                    <AlertTriangle size={19} />
                  )}

                  <strong>
                    {isCorrect ? "MISSION COMPLETE!" : "NOT SO FAST!"}
                  </strong>
                </div>

                <p>{selectedOption.feedback}</p>

                {isCorrect ? (
                  <button
                    className="level05-primary-button"
                    type="button"
                    onClick={() => navigate("/play")}
                  >
                    Back to All Levels
                    <ArrowRight size={18} />
                  </button>
                ) : (
                  <button
                    className="level05-primary-button"
                    type="button"
                    onClick={handleRetry}
                  >
                    <RotateCcw size={17} />
                    Try Again
                  </button>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="level05-tip">
          <ShieldCheck size={18} />
          <p>
            <strong>BYTE TIP:</strong> When in doubt, close the link and
            visit the official website by typing its address yourself.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Level05;
