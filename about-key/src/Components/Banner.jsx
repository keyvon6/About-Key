import React from "react";
//import Banner from "./Components/Banner";

// /src/Components/Banner.jsx

import { useState } from "react";

const Banner = ({
  leftText = "Info",
  centerText = "Main Title",
  rightText = "Settings",
  style = {},
  leftIcon = true,
  rightIcon = true,
  gradientColors = ["#3a8dff", "#00c3ff"], // customizable gradient
  onCenterClick = () => alert("Center clicked!"),
}) => {
  // Animation: floating up/down using CSS keyframes
  const containerStyle = {
    position: "fixed",
    top: 12,
    left: "5vw",
    right: "5vw",
    maxWidth: "90vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 28,
    padding: "18px 40px",
    background: "rgba(10, 10, 30, 0.75)",
    borderRadius: 16,
    boxShadow: "0 12px 40px rgba(0, 115, 255, 0.5)",
    backdropFilter: "blur(16px) saturate(200%)",
    color: "#e1e7ff",
    fontFamily: "'Segoe UI Variable', Tahoma, Geneva, Verdana, sans-serif",
    fontWeight: 600,
    zIndex: 9999,
    animation: "floatUpDown 6s ease-in-out infinite",
    userSelect: "none",
    ...style,
  };

  const sideStyle = {
    flex: "0 0 250px",
    display: "flex",
    alignItems: "center",
    gap: 10,
    fontSize: 18,
    opacity: 0.85,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    color: "#cbd6ff",
    textShadow: "0 1px 4px rgba(0, 0, 60, 0.3)",
    transition: "opacity 0.3s ease",
    cursor: "default",
  };

  const iconStyle = {
    width: 22,
    height: 22,
    fill: "#61aaff",
    flexShrink: 0,
    transition: "fill 0.3s ease",
  };

  const centerWrap = {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const centerBadge = {
    padding: "14px 44px",
    borderRadius: 60,
    background: "rgba(255, 255, 255, 0.15)",
    boxShadow: "0 8px 32px rgba(0, 115, 255, 0.5)",
    fontSize: 44,
    fontWeight: 700,
    backgroundImage: `linear-gradient(90deg, ${gradientColors[0]}, ${gradientColors[1]})`,
    backgroundClip: "text",
    color: "transparent",
    textShadow: "0 0 10px rgba(30, 150, 255, 0.8)",
    backdropFilter: "blur(14px)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
    userSelect: "none",
    boxSizing: "border-box",
    position: "relative",
    overflow: "hidden",
  };

  // Hover scale effect + glow intensify
  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = "scale(1.08)";
    e.currentTarget.style.boxShadow = "0 0 25px 5px rgba(0, 180, 255, 0.8)";
  };
  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.boxShadow = "0 8px 32px rgba(0, 115, 255, 0.5)";
  };

  // Click ripple effect on centerBadge
  const [ripples, setRipples] = useState([]);

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const size = rect.width > rect.height ? rect.width : rect.height;
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    const newRipple = { x, y, size, key: Date.now() };

    setRipples((old) => [...old, newRipple]);

    // Remove ripple after animation (600ms)
    setTimeout(() => {
      setRipples((old) => old.filter((r) => r.key !== newRipple.key));
    }, 600);

    onCenterClick();
  };

  // Icons: Info and Gear (customizable)
  const LeftIcon = () => (
    <svg
      style={iconStyle}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="12" cy="12" r="10" stroke="none" />
      <line
        x1="12"
        y1="8"
        x2="12"
        y2="12"
        stroke="#61aaff"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="12" cy="16" r="1" fill="#61aaff" />
    </svg>
  );

  const RightIcon = () => (
    <svg
      style={iconStyle}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="none"
        stroke="#61aaff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 1v3M16.24 3.76l-2.12 2.12M21 12h-3M16.24 20.24l-2.12-2.12M12 21v-3M7.76 20.24l2.12-2.12M3 12h3M7.76 3.76l2.12 2.12"
      />
      <circle cx="12" cy="12" r="3" stroke="#61aaff" strokeWidth="2" fill="none" />
    </svg>
  );

  return (
    <>
      <style>
        {`
          @keyframes floatUpDown {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-6px); }
          }
          .ripple {
            position: absolute;
            border-radius: 50%;
            background-color: rgba(0, 180, 255, 0.4);
            animation: rippleEffect 600ms ease-out;
            pointer-events: none;
            transform: scale(0);
          }
          @keyframes rippleEffect {
            to {
              transform: scale(4);
              opacity: 0;
            }
          }
        `}
      </style>

      <div style={containerStyle}>
        <div style={{ ...sideStyle, justifyContent: "flex-start" }}>
          {leftIcon && <LeftIcon />}
          <span>{leftText}</span>
        </div>

        <div style={centerWrap}>
          <div
            style={centerBadge}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
          >
            {centerText}
            {/* Render ripples */}
            {ripples.map(({ x, y, size, key }) => (
              <span
                key={key}
                className="ripple"
                style={{
                  left: x,
                  top: y,
                  width: size,
                  height: size,
                }}
              />
            ))}
          </div>
        </div>

        <div style={{ ...sideStyle, justifyContent: "flex-end" }}>
          <span>{rightText}</span>
          {rightIcon && <RightIcon />}
        </div>
      </div>
    </>
  );
};

export default Banner;


/*
Example usage:


function App(){
    return (
        <div style={{ padding: 24 }}>
            <Banner leftText="v1.2.3" centerText="About Key" rightText="Docs" />
        </div>
    );
}
*/