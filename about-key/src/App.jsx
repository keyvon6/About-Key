import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Banner from './Components/Banner'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Banner
        leftText="Key's Media"
        centerText="KMG"
        rightText="Key's Media Group"
        gradientColors={["#3a8dff", "#00c3ff"]}
        onCenterClick={() => window.open("https://keysmediagroup.com", "_blank")}
      />

      <main
        style={{
          marginTop: 100, // leave space below fixed banner
          padding: 24,
          maxWidth: 900,
          marginLeft: "auto",
          marginRight: "auto",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          color: "#d0dbff",
          userSelect: "text",
          lineHeight: 1.6,
          backgroundColor: "rgba(10, 10, 30, 0.85)",
          borderRadius: 16,
          boxShadow: "0 12px 48px rgba(0, 115, 255, 0.6)",
          backdropFilter: "blur(12px)",
        }}
      >
        <h1
          style={{
            fontWeight: 700,
            fontSize: 38,
            marginBottom: 24,
            color: "#61aaff",
            textAlign: "center",
            textShadow: "0 2px 8px rgba(0, 115, 255, 0.7)",
            userSelect: "text",
          }}
        >
          Welcome
        </h1>

        <p
          style={{
            fontSize: 22,
            marginBottom: 18,
            color: "rgba(255, 255, 255, 0.85)",
            userSelect: "text",
          }}
        >
    Hey, I’m Dwayne W.—the IT guy who talks to servers more than people.
    <br />
    <br />

    By day, I keep systems running smoother than a well-tuned inline-four. 
    By night, I am a dog and turtle dad, competitive fps gamer, and a casual mma fan; all while managing a homelab and shared media server—gotta keep those pirates at bay, if you know what I mean—and I build games you can find on the App Store—because why just fix tech when you can make it fun?
<br />
<br />
    Oh, and I like money. So before my turtle revolts againsts me, let’s chat!
        </p>

        <p
          style={{
            fontSize: 20,
            fontStyle: "italic",
            color: "#82cfff",
            userSelect: "text",
            textAlign: "center",
          }}
        >
          Ready to have some fun? <code style={{ fontWeight: "bold" }}><button onClick={() => setCount(count + 1)}>^_{count != 0 ? count : "^"}</button> </code>
        </p>

        <div
          style={{
            display: "flex",
            gap: 20,
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: 24,
          }}
        >
          <a
            href="https://keysmedia.me"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "12px 28px",
              borderRadius: 12,
              background:
                "linear-gradient(135deg, #3a8dff, #00c3ff)",
              color: "#fff",
              fontWeight: "600",
              fontSize: 18,
              textDecoration: "none",
              boxShadow: "0 6px 16px rgba(0, 195, 255, 0.6)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              userSelect: "none",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow =
                "0 10px 24px rgba(0, 195, 255, 0.9)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow =
                "0 6px 16px rgba(0, 195, 255, 0.6)";
            }}
          >
            Explore Keys Media
          </a>

          <a
            href="https://keysmediagroup.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "12px 28px",
              borderRadius: 12,
              background:
                "linear-gradient(135deg, #00c3ff, #3a8dff)",
              color: "#fff",
              fontWeight: "600",
              fontSize: 18,
              textDecoration: "none",
              boxShadow: "0 6px 16px rgba(58, 141, 255, 0.6)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              userSelect: "none",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow =
                "0 10px 24px rgba(58, 141, 255, 0.9)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow =
                "0 6px 16px rgba(58, 141, 255, 0.6)";
            }}
          >
            Collaborate with me!
          </a>
        </div>
      </main>
    </>
  );
};

export default App

