
import "../styles/About.css";

import byteCheering from "../assets/cheering.png";
import byteThinking from "../assets/thinking.png";
import byteConfuse from "../assets/confused.png";
// import byteCurious from "../assets/curious.png";
import byteProud from "../assets/proud.png";

const About = () => {
  return (
    <main className="about-page">

      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero-glow"></div>

        <div className="about-hero-content">
          <img
            src={byteCheering}
            alt="BYTE cheering"
            className="about-cheering-byte"
          />

          <div className="about-label">
            <span></span>
            ABOUT THE PROJECT
            <span></span>
          </div>

          <h1>
            ABOUT 
            <strong>THE CYBER TRAP</strong>
          </h1>

          <p>
           The Cyber Trap is a communication design project that uses interactive storytelling
            and gaming-inspired visuals to introduce children to common online safety risks.
          </p>

          {/* <div className="about-scroll">
            <span>SCROLL TO EXPLORE</span>
            <div className="about-scroll-line"></div>
          </div> */}
        </div>
      </section>


      {/* WHAT IS THE CYBER TRAP */}
      <section className="about-intro">
        <div className="about-intro-grid">

          <div className="about-intro-character">
            <div className="about-character-ring"></div>

            <img
              src={byteThinking}
              alt="BYTE thinking"
            />

            <span className="about-character-tag">
              BYTE // THINK
            </span>
          </div>

          <div className="about-intro-content">

            <div className="about-section-label">
              <span>01- </span>
              WHAT IS THE CYBER TRAP?
            </div>

            <h2>
              LEARN TO
              <span>SPOT THE TRAP.</span>
            </h2>

            <p className="about-lead">
              The Cyber Trap is a communication design project that
              uses interactive storytelling and gaming-inspired
              visuals to introduce children to common online safety risks.
            </p>

            <p>
              Instead of presenting online safety as a list of complicated
              rules, The Cyber Trap turns learning into something children
              can explore, understand, and remember.
            </p>

            <div className="about-highlight">
              <span className="about-highlight-icon">!</span>

              <div>
                <strong>ONLINE SAFETY SHOULD BE UNDERSTANDABLE.</strong>

                <p>
                  Children need simple ways to recognize suspicious
                  situations before they become real problems.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* WHY WE CREATED IT */}
      <section className="about-purpose">

        <div className="about-purpose-header">

          <div className="about-section-label center">
            <span>02- </span>
            WHY WE CREATED IT
          </div>

          <h2>
            THE INTERNET IS
            <span>FULL OF TRAPS.</span>
          </h2>

          <p>
            The digital world gives children endless opportunities to
            learn, communicate, and have fun. But it also introduces
            situations that may be difficult for them to recognize.
          </p>

        </div>


        <div className="about-purpose-grid">

          <article className="about-purpose-card">
            <span className="about-card-number">01</span>

            <div className="about-card-icon">?</div>

            <h3>CONFUSION</h3>

            <p>
              Online messages and situations can look harmless even when
              something is not quite right.
            </p>
          </article>


          <article className="about-purpose-card">
            <span className="about-card-number">02</span>

            <div className="about-card-icon">!</div>

            <h3>RISK</h3>

            <p>
              Scams, fake rewards, suspicious links, and unsafe interactions
              can appear in everyday digital spaces.
            </p>
          </article>


          <article className="about-purpose-card">
            <span className="about-card-number">03</span>

            <div className="about-card-icon">✓</div>

            <h3>AWARENESS</h3>

            <p>
              Understanding warning signs gives children the confidence
              to stop, think, and make safer choices.
            </p>
          </article>

        </div>
      </section>


      {/* WHAT YOU WILL DISCOVER */}
      <section className="about-discover">

        <div className="about-discover-character">
          <img
            src={byteConfuse}
            alt="BYTE curious"
          />
        </div>


        <div className="about-discover-content">

          <div className="about-section-label">
            <span>03- </span>
            WHAT YOU'LL DISCOVER
          </div>

          <h2>
            KNOW YOUR
            <span>CYBER TRAPS.</span>
          </h2>

          <p>
            Explore common online situations and learn how to recognize
            the warning signs before you fall into the trap.
          </p>


          <div className="about-traps-grid">

            <div className="about-trap">
              <span>01</span>

              <div>
                <h3>FAKE REWARDS</h3>

                <p>
                  Messages promising prizes, gifts, money, or special rewards.
                </p>
              </div>
            </div>


            <div className="about-trap">
              <span>02</span>

              <div>
                <h3>SUSPICIOUS LINKS</h3>

                <p>
                  Links that may lead you somewhere unsafe or misleading.
                </p>
              </div>
            </div>


            <div className="about-trap">
              <span>03</span>

              <div>
                <h3>PHISHING</h3>

                <p>
                  Fake messages designed to trick you into sharing information.
                </p>
              </div>
            </div>


            <div className="about-trap">
              <span>04</span>

              <div>
                <h3>OVERSHARING</h3>

                <p>
                  Sharing personal information without thinking about who can see it.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* MEET BYTE */}
      <section className="about-byte">

        <div className="about-byte-bg-text">
          BYTE
        </div>

        <div className="about-byte-content">

          <div className="about-byte-image">

            <div className="about-byte-orbit orbit-one"></div>
            <div className="about-byte-orbit orbit-two"></div>

            <img
              src={byteProud}
              alt="BYTE proud"
            />

          </div>


          <div className="about-byte-info">

            <div className="about-section-label">
              <span>04- </span>
              MEET BYTE
            </div>

            <h2>
              YOUR GUIDE
              <span>THROUGH THE TRAPS.</span>
            </h2>

            <p>
              BYTE is the friendly guide behind The Cyber Trap.
              Through different expressions and interactions, BYTE helps
              children explore online safety without making the experience
              feel overwhelming.
            </p>


            <div className="about-byte-points">

              <div>
                <span>+</span>
                <p>Curious when discovering something new.</p>
              </div>

              <div>
                <span>+</span>
                <p>Thinking before making an online decision.</p>
              </div>

              <div>
                <span>+</span>
                <p>Proud when making a safe choice.</p>
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* HOW IT WORKS */}
      <section className="about-process">

        <div className="about-process-header">

          <div className="about-section-label center">
            <span>05- </span>
            HOW IT WORKS
          </div>

          <h2>
            FROM CURIOUS
            <span> TO CYBER SMART.</span>
          </h2>

        </div>


        <div className="about-process-line"></div>


        <div className="about-process-grid">

          <div className="about-process-step">
            <span className="about-process-number">01</span>

            <div className="about-process-icon">⌕</div>

            <h3>EXPLORE</h3>

            <p>
              Enter the world of The Cyber Trap and discover different
              online situations.
            </p>
          </div>


          <div className="about-process-step">
            <span className="about-process-number">02</span>

            <div className="about-process-icon">◈</div>

            <h3>LEARN</h3>

            <p>
              Understand what makes a situation suspicious and why it matters.
            </p>
          </div>


          <div className="about-process-step">
            <span className="about-process-number">03</span>

            <div className="about-process-icon">!</div>

            <h3>SPOT</h3>

            <p>
              Recognize the warning signs hidden inside everyday digital traps.
            </p>
          </div>


          <div className="about-process-step">
            <span className="about-process-number">04</span>

            <div className="about-process-icon">✓</div>

            <h3>STAY SAFE</h3>

            <p>
              Use what you learned to make smarter and safer choices online.
            </p>
          </div>

        </div>
      </section>


     <section className="about-final">
  <div className="about-final-grid"></div>

  <div className="about-final-content">
    <img
      src={byteCheering}
      alt="BYTE cheering"
      className="about-final-byte"
    />

    <div className="about-label">
      <span></span>
      YOUR NEXT MOVE
      <span></span>
    </div>

    <h2>
      READY TO
      <span>ESCAPE THE TRAPS?</span>
    </h2>

    
          <p>
            Explore the traps, make smart choices, and learn
            how to navigate the digital world safely.
          </p>

    <a href="/safety-hub" className="about-final-button">
      EXPLORE THE TRAPS
      <span>→</span>
    </a>
  </div>
</section>
    </main>
  );
};

export default About;

