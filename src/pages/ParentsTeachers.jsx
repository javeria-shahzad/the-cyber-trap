
import { useState } from "react";
import "../styles/ParentsTeachers.css";

import byteThinking from "../assets/thinking.png";
import byteWorried from "../assets/worried.png";
import byteWarning from "../assets/warning.png";
// import byteCurious from "../assets/curious.png";
import byteProud from "../assets/proud.png";
import byteCheering from "../assets/cheering.png";
// import byteAngry from "../assets/angry";
import byteConfuse from "../assets/confused.png";
// import byteExcited from "../assets/excited";
// import byteScared from "../assets/scared";
// import byteHappy from "../assets/happy";
// import byteWink from "../assets/wink";


const sections = [
  {
    number: "01",
    title: "WHAT CHILDREN SHOULD KNOW",
    icon: "🛡️",
    byte: byteWorried,
    points: [
      "Never share passwords, home addresses, phone numbers, or other private information.",
      "Think before clicking links, downloading files, or accepting requests from strangers.",
      "A person online may not always be who they claim to be.",
      "If something online feels wrong or uncomfortable, tell a trusted adult."
    ]
  },
  {
    number: "02",
    title: "WHAT ADULTS SHOULD WATCH FOR",
    icon: "⚠",
    byte: byteWarning,
    points: [
      "Sudden secrecy about online activities or conversations.",
      "Messages or friend requests from unknown people.",
      "Requests for photos, personal information, passwords, or money.",
      "Unusual fear, stress, or discomfort after using a device."
    ]
  },
  {
    number: "03",
    title: "HOW TO START A CONVERSATION",
    icon: "💬",
    byte: byteConfuse,
    points: [
      "Ask open questions instead of immediately blaming or judging.",
      "Let children explain what happened in their own words.",
      "Remind them that they can always come to you when something feels wrong.",
      "Talk regularly about online experiences, not only when there is a problem."
    ]
  },
  {
    number: "04",
    title: "ONLINE SAFETY CHECKLIST",
    icon: "✓",
    byte: byteProud,
    points: [
      "Use strong and unique passwords.",
      "Turn on two-factor authentication when available.",
      "Review privacy settings regularly.",
      "Keep devices, browsers, and apps updated.",
      "Know how to block and report suspicious accounts.",
      "Never meet an online stranger without a trusted adult knowing."
    ]
  }
];

function ParentsTeachers() {
  const [activeSection, setActiveSection] = useState(null);

  return (
    <main className="parents-page">
      <div className="parents-grid-bg"></div>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="parents-hero">
        <div className="parents-hero-byte">
          <img src={byteThinking} alt="BYTE thinking" />
        </div>

        <div className="parents-eyebrow">
          <span></span>
          SAFETY GUIDE
          <span></span>
        </div>

        <h1>
          FOR PARENTS
          <br />
          <span>& TEACHERS</span>
        </h1>

        <p>
          Help young people recognize online risks,
          make safer choices, and know where to turn
          when something feels wrong.
        </p>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="parents-content">
        <div className="parents-intro">
          <div className="section-number">01</div>
          <div>
            <span className="section-label">ADULT GUIDE</span>

            <h2>
              HELP THEM
              <br />
              <span>SPOT THE TRAP.</span>
            </h2>
          </div>

          <p>
            Online safety starts with awareness. Use these simple
            guides to help children understand common risks and
            feel comfortable talking about their online experiences.
          </p>
        </div>

        {/* =====================================================
            CARDS
        ===================================================== */}

        <div className="parents-cards">
          {sections.map((section, index) => (
            <article
              className={`parent-card ${
                activeSection === index ? "active" : ""
              }`}
              key={section.number}
              onClick={() =>
                setActiveSection(
                  activeSection === index ? null : index
                )
              }
            >
              <div className="parent-card-top">
                <span className="parent-number">
                  {section.number}
                </span>

                <span className="parent-icon">
                  {section.icon}
                </span>
              </div>

              <div className="parent-card-byte">
                <img
                  src={section.byte}
                  alt={`BYTE for ${section.title}`}
                />
              </div>

              <h3>{section.title}</h3>

              <button className="parent-card-button">
                {activeSection === index
                  ? "CLOSE"
                  : "LEARN MORE"}

                <span>
                  {activeSection === index ? "−" : "→"}
                </span>
              </button>

              <div className="parent-card-content">
                <ul>
                  {section.points.map((point, pointIndex) => (
                    <li key={pointIndex}>
                      <span>+</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>


{/* <hr /> */}
      {/* =====================================================
          BYTE MESSAGE
      ===================================================== */}

      <section className="parents-byte">
        <div className="byte-final-character">
          <img
            src={byteCheering}
            alt="BYTE cheering"
          />
        </div>

        <div className="byte-message">
          <span>CYBER BUDDY SAYS</span>

          <h2>
            A SAFER INTERNET
            <br />
            <strong>STARTS WITH A CONVERSATION.</strong>
          </h2>

          <p>
            Make it easy for children to ask questions,
            report problems, and speak up when something
            does not feel right.
          </p>
        </div>
      </section>
    </main>
  );
}

export default ParentsTeachers;

