
import { useState } from "react";
import "../styles/SafetyHub.css";

import byteThinking from "../assets/thinking.png";
import byteWorried from "../assets/worried.png";
import byteWarning from "../assets/warning.png";
import byteCurious from "../assets/curious.png";
import byteProud from "../assets/proud.png";
import byteCheering from "../assets/cheering.png";
import byteAngry from "../assets/angry.png";
import byteConfuse from "../assets/confuse.png";
import byteExcited from "../assets/excited.png";
import byteScared from "../assets/scared.png";
import byteHappy from "../assets/happy.png";
import byteWink from "../assets/wink.png";


const traps = [
  {
    icon: byteExcited,
    emoji: "🎁",
    title: "Fake Rewards",
    description:
      "Scammers may tell you that you have won a prize, gift, money, or special reward.",
    example:
      '"Congratulations! You won an iPhone! Click here to claim your prize."',
    action:
      "Do not click the link or provide your information. Check whether the offer is really from a trusted source.",
  },
  {
    icon: byteWorried,
    emoji: "🔗",
    title: "Suspicious Links",
    description:
      "A suspicious link can take you to a dangerous website or trick you into giving away information.",
    example:
      '"You have received a special message. Click this link to see it."',
    action:
      "Do not click immediately. Check the sender and the website address first.",
  },
  {
    icon: byteScared,
    emoji: "💬",
    title: "Unsafe Chats",
    description:
      "Someone online may pretend to be friendly while trying to get your personal information or make you uncomfortable.",
    example:
      '"Hey! Where do you live? What school do you go to? Send me a picture."',
    action:
      "Do not share private information. Stop the conversation, block the person, and tell a trusted adult.",
  },
  {
    icon: byteWarning,
    emoji: "🔑",
    title: "Password Theft",
    description:
      "Someone may try to trick you into revealing your password or login information.",
    example:
      '"Your account will be deleted! Send us your password to verify your account."',
    action:
      "Never share your password. Use a strong, unique password and enable two-factor authentication when available.",
  },
  {
    icon: byteConfuse,
    emoji: "🌐",
    title: "Fake Websites",
    description:
      "A fake website may look like a real website but is designed to steal passwords or personal information.",
    example: '"Login here to receive your free reward."',
    action:
      "Check the website address carefully. Leave the website if anything looks suspicious.",
  },
];

const safetySteps = [
  {
    number: "01",
    title: "STOP",
    icon: byteWarning,
    text: "Don't click or respond immediately.",
  },
  {
    number: "02",
    title: "DON'T SHARE",
    icon: byteWorried,
    text: "Keep personal information private.",
  },
  {
    number: "03",
    title: "BLOCK / REPORT",
    icon: byteAngry,
    text: "Use the platform's safety tools where appropriate.",
  },
  {
    number: "04",
    title: "TELL A TRUSTED ADULT",
    icon: byteHappy,
    text: "Ask a parent, teacher, or another trusted adult for help.",
  },
];

function TrapDetails({ trap, index, onClose }) {
  return (
    <div className="trap-details">
      <button
        className="close-trap"
        onClick={onClose}
        aria-label="Close trap details"
      >
        ×
      </button>

      <div className="details-byte">
        <img src={trap.icon} alt={trap.title} />
      </div>

      <div className="details-content">
        <span className="details-label">TRAP 0{index + 1}</span>

        <h3>{trap.title}</h3>

        <div className="detail-block">
          <span>WHAT IS IT?</span>
          <p>{trap.description}</p>
        </div>

        <div className="detail-block example-block">
          <span>EXAMPLE</span>
          <p>{trap.example}</p>
        </div>

        <div className="detail-block action-block">
          <span>WHAT SHOULD I DO?</span>
          <p>{trap.action}</p>
        </div>
      </div>
    </div>
  );
}

function SafetyHub() {
  const [selectedTrap, setSelectedTrap] = useState(null);

  return (
    <main className="safety-hub">
      <section className="safety-hero">
        <div className="safety-hero-grid"></div>

        <div className="safety-hero-content">
          <div className="hero-byte">
            <img src={byteCurious} alt="Byte curious" />
          </div>

          <div className="safety-badge">
            <span></span>
            CYBER SAFETY HUB
            <span></span>
          </div>

          <h1>
            KNOW
            <span> YOUR TRAPS</span>
          </h1>

          <p>
            The internet can be full of hidden traps. Learn how to recognize
            them before they catch you.
          </p>
        </div>
      </section>

      <section className="traps-section">
        <div className="section-heading">
          <div>
            <span className="section-label">KNOW YOUR TRAPS</span>

            <h2>
              SPOT THE <span>DANGER</span>
            </h2>

            <p>
              Click on a trap to learn what it looks like and how to stay safe.
            </p>
          </div>
        </div>

        <div className="traps-grid">
          {traps.map((trap, index) => (
            <div className="trap-item" key={trap.title}>
              <button
                type="button"
                className={`trap-card ${
                  selectedTrap === index ? "active" : ""
                }`}
                onClick={() =>
                  setSelectedTrap((current) =>
                    current === index ? null : index
                  )
                }
                aria-expanded={selectedTrap === index}
              >
                <div className="trap-card-number">0{index + 1}</div>

                <img src={trap.icon} alt={trap.title} className="trap-byte" />

                <h3>
                  {trap.title}
                  <span className="trap-title-emoji">{trap.emoji}</span>
                </h3>

                <p>{trap.description}</p>

                <div className="trap-card-bottom">
                  <span>
                    {selectedTrap === index ? "CLOSE" : "LEARN MORE"}
                  </span>

                  <span className="trap-arrow">
                    {selectedTrap === index ? "↑" : "→"}
                  </span>
                </div>
              </button>

              {selectedTrap === index && (
                <div className="mobile-trap-details">
                  <TrapDetails
                    trap={trap}
                    index={index}
                    onClose={() => setSelectedTrap(null)}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {selectedTrap !== null && (
          <div className="desktop-trap-details">
            <TrapDetails
              trap={traps[selectedTrap]}
              index={selectedTrap}
              onClose={() => setSelectedTrap(null)}
            />
          </div>
        )}
      </section>

      <section className="what-to-do-section">
        <div className="what-to-do-glow"></div>

        <div className="section-heading">
          <div className="section-number">02</div>

          <div>
            <span className="section-label">WHAT SHOULD I DO?</span>

            <h2>
              I THINK I'M IN A TRAP.
              <span> NOW WHAT?</span>
            </h2>

            <p>
              If something online feels wrong, don't panic. Follow these four
              simple steps.
            </p>
          </div>
        </div>

        <div className="safety-steps">
          {safetySteps.map((step, index) => (
            <div className="safety-step" key={step.number}>
              <div className="step-top">
                <span className="step-number">{step.number}</span>

                <div className="step-icon">
                  <img src={step.icon} alt={step.title} />
                </div>
              </div>

              <h3>{step.title}</h3>

              <p>{step.text}</p>

              {index < safetySteps.length - 1 && (
                <div className="step-connector">→</div>
              )}
            </div>
          ))}
        </div>

        <div className="trusted-message">
          <div className="trusted-byte">
            <img src={byteCheering} alt="Byte cheering" />
          </div>

          <div>
            <h3>YOU DON'T HAVE TO HANDLE IT ALONE.</h3>

            <p>
              If you are unsure about something you see online, talk to someone
              you trust.
            </p>

            <p>Asking for help is always okay.</p>
          </div>
        </div>
      </section>

      <section className="safety-final">
        <div className="final-grid"></div>

        <div className="final-content">
          <span>STAY ALERT. STAY SAFE.</span>

          <h2>
            THINK BEFORE
            <strong> YOU CLICK.</strong>
          </h2>

          <p>Knowing the signs is your first line of defense.</p>

          <div className="final-byte">
            <img
              src={byteProud}
              alt="Byte proud"
              className="final-byte-character"
            />

            <div className="final-byte-message">
              <strong>BYTE SAYS:</strong>
              <span>Think first. Click later.</span>
            </div>
          </div>

          {/* <div className="final-extra-bytes">
            <img src={byteThinking} alt="Byte thinking" />
            <img src={byteWink} alt="Byte winking" />
          </div> */}
        </div>
      </section>
    </main>
  );
}

export default SafetyHub;

