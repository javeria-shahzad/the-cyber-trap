// import byte from "../assets/byte.png";
// import "../styles/meetByte.css";

// function MeetByte({ onBackHome }) {
//   return (
//     <main className="meet-byte-page">
//       <div className="meet-byte-grid"></div>
//       <div className="meet-byte-glow"></div>

//       <section className="meet-byte-content">
//         <div className="meet-byte-image">
//           <div className="byte-circle"></div>
//           <img src={byte} alt="BYTE - Cyber Buddy" />
//         </div>

//         <div className="meet-byte-text">
//           <span className="byte-label">YOUR CYBER BUDDY</span>

//           <h1>
//             HEY! I'M <span>BYTE</span> 👋
//           </h1>

//           <h2>Your cyber buddy.</h2>

//           <div className="byte-speech">
//             <span className="speech-dot"></span>
//             <p>
//               “I'll help you spot the traps hiding in your digital world.”
//             </p>
//           </div>

//           <div className="byte-cards">

//             <div className="byte-card">
//               <div className="byte-card-icon">🔐</div>
//               <div>
//                 <h3>Protect</h3>
//                 <p>Your personal information</p>
//               </div>
//             </div>

//             <div className="byte-card">
//               <div className="byte-card-icon">👀</div>
//               <div>
//                 <h3>Spot</h3>
//                 <p>Suspicious things</p>
//               </div>
//             </div>

//             <div className="byte-card">
//               <div className="byte-card-icon">🧠</div>
//               <div>
//                 <h3>Think</h3>
//                 <p>Before you click</p>
//               </div>
//             </div>

//           </div>

//           <button
//   className="back-home-button"
//   onClick={onBackHome}
// >
//   ← BACK TO HOME
// </button>
//         </div>
//       </section>
//     </main>
//   );
// }

// export default MeetByte;


import { useNavigate } from "react-router-dom"; import byte from "../assets/byte.png"; import "../styles/meetByte.css"; function MeetByte() { const navigate = useNavigate(); return ( <main className="meet-byte-page"> <div className="meet-byte-grid"></div> <div className="meet-byte-glow"></div> <section className="meet-byte-content"> <div className="meet-byte-image"> <div className="byte-circle"></div> <img src={byte} alt="BYTE - Cyber Buddy" /> </div> <div className="meet-byte-text"> <span className="byte-label"> YOUR CYBER BUDDY </span> <h1> HEY! I'M <span>BYTE</span> 👋 </h1> <h2> Your cyber buddy. </h2> <div className="byte-speech"> <span className="speech-dot"></span> <p> “I'll help you spot the traps hiding in your digital world.” </p> </div> <div className="byte-cards"> <div className="byte-card"> <div className="byte-card-icon"> 🔐 </div> <div> <h3>Protect</h3> <p>Your personal information</p> </div> </div> <div className="byte-card"> <div className="byte-card-icon"> 👀 </div> <div> <h3>Spot</h3> <p>Suspicious things</p> </div> </div> <div className="byte-card"> <div className="byte-card-icon"> 🧠 </div> <div> <h3>Think</h3> <p>Before you click</p> </div> </div> </div> <button className="back-home-button" onClick={() => navigate("/")} > ← BACK TO HOME </button> </div> </section> </main> ); } export default MeetByte;