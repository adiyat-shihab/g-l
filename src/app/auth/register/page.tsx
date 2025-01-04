"use client";
import * as  React from "react";
import styled from "styled-components";
import {Suspense} from "react";


const Form = () => {

  return (
      <Suspense fallback={<div>Loading...</div>}><StyledWrapper className={'h-screen'}>
        <style></style>
        <div className="wrapper">
          <form className="form">
            <span className="title">Login</span>
            <div className="input-container">
              <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                      id="gradient-stroke"
                      x1={0}
                      y1={0}
                      x2={24}
                      y2={24}
                      gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0%" stopColor="black" />
                    <stop offset="100%" stopColor="white" />
                  </linearGradient>
                </defs>
                <g stroke="url(#gradient-stroke)" fill="none" strokeWidth={1}>
                  <path d="M21.6365 5H3L12.2275 12.3636L21.6365 5Z" />
                  <path d="M16.5 11.5L22.5 6.5V17L16.5 11.5Z" />
                  <path d="M8 11.5L2 6.5V17L8 11.5Z" />
                  <path d="M9.5 12.5L2.81805 18.5002H21.6362L15 12.5L12 15L9.5 12.5Z" />
                </g>
              </svg>
              <input className="input" type="text" placeholder="Email" />
            </div>
            <div className="input-container">
              <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <g stroke="url(#gradient-stroke)" fill="none" strokeWidth={1}>
                  <path d="M3.5 15.5503L9.20029 9.85L12.3503 13L11.6 13.7503H10.25L9.8 15.1003L8 16.0003L7.55 18.2503L5.5 19.6003H3.5V15.5503Z" />
                  <path d="M16 3.5H11L8.5 6L16 13.5L21 8.5L16 3.5Z" />
                  <path d="M16 10.5L18 8.5L15 5.5H13L12 6.5L16 10.5Z" />
                </g>
              </svg>
              <input className="input" type="password" placeholder="Password" />
            </div>
            <div className="login-button">
              <input className="input" type="submit" defaultValue="Login" />
            </div>
            <div className="texture" />
          </form>
        </div>
      </StyledWrapper></Suspense>
  );
};

const StyledWrapper = styled.div`
  .wrapper {
    width: 100%;
    height: 100%;
    display: grid;
    place-content: center;
    background: black;
    z-index: -2;
  }

  .form {
    padding: 2rem 3rem;
    display: grid;
    place-items: center;
    gap: 3rem;
    border: 1px solid transparent;
    -o-border-image: linear-gradient(transparent, #ffe0a6, transparent) 1;
    border-image: linear-gradient(transparent, #ffe0a6, transparent) 1;
    border-width: 0 2px 0px 2px;
    background: radial-gradient(
        100% 61.73% at 100% 50%,
        rgba(255, 224, 166, 0.05) 0%,
        transparent 100%
      ),
      radial-gradient(
        91.09% 56.23% at 0% 50%,
        rgba(255, 224, 166, 0.05) 0%,
        transparent 100%
      );
    position: relative;
  }
  .form::before,
  .form::after {
    content: "";
    position: absolute;
    border: 1px solid transparent;
    border: inherit;
    z-index: -1;
  }
  .form::before {
    inset: -1rem;
    opacity: 15%;
  }
  .form::after {
    inset: -2rem;
    opacity: 5%;
  }
  .form .title {
    color: white;
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    letter-spacing: 1rem;
    text-transform: uppercase;
    background: linear-gradient(rgb(170, 170, 170), rgb(78, 78, 78));
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
  }
  .form .input-container {
    display: flex;
    align-items: center;
    background: radial-gradient(
      47.3% 73.08% at 50% 94.23%,
      rgba(255, 255, 255, 0.1) 5%,
      rgba(0, 0, 0, 0) 100%
    );
    border: 1px solid transparent;
    -o-border-image: radial-gradient(
        circle,
        rgba(255, 255, 255, 0.445) 0%,
        rgba(0, 0, 0, 0) 100%
      )
      1;
    border-image: radial-gradient(
        circle,
        rgba(255, 255, 255, 0.445) 0%,
        rgba(0, 0, 0, 0) 100%
      )
      1;
    border-width: 0 0 1px 0;
  }
  .form .input-container svg {
    stroke: grey;
  }
  .form .input-container svg g {
    transition: all 0.2s ease-in-out;
  }
  .form .input-container .input {
    background: none;
    border: none;
    padding: 0.5rem 1rem;
    color: white;
  }
  .form .input-container .input:focus {
    outline: none;
    color: #ffe0a6;
  }
  .form .input-container:focus-within {
    background: radial-gradient(
      47.3% 73.08% at 50% 94.23%,
      rgba(255, 224, 166, 0.1) 5%,
      rgba(0, 0, 0, 0) 100%
    );
    -o-border-image: radial-gradient(circle, #ffe0a6 0%, transparent 100%) 1;
    border-image: radial-gradient(circle, #ffe0a6 0%, transparent 100%) 1;
  }
  .form .input-container:focus-within svg g {
    stroke: #ffe0a6;
  }
  .form .login-button {
    width: 100%;
    position: relative;
    transition: all 0.2s ease-in-out;
  }
  .form .login-button .input {
    cursor: pointer;
    padding: 1rem;
    width: 100%;
    background: radial-gradient(
        100% 45% at 100% 50%,
        rgba(255, 224, 166, 0.084) 0%,
        rgba(115, 115, 115, 0) 100%
      ),
      radial-gradient(
        100% 45% at 0% 50%,
        rgba(255, 224, 166, 0.084) 0%,
        rgba(115, 115, 115, 0) 100%
      );
    border: 1px solid transparent;
    -o-border-image: linear-gradient(transparent, #ffe0a6, transparent) 1;
    border-image: linear-gradient(transparent, #ffe0a6, transparent) 1;
    border-width: 0 1px 0 1px;
    text-align: center;
    color: #ffe0a6;
    font-size: 1rem;
  }
  .form .login-button::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background-image: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.3764705882) 0.5px,
      transparent 0.5px
    );
    background-size: 0.1px 3px;
    mix-blend-mode: soft-light;
    -webkit-mask-image: radial-gradient(
        40% 45% at 100% 50%,
        white 0%,
        transparent 100%
      ),
      radial-gradient(40% 45% at 0% 50%, white 0%, transparent 100%);
    mask-image: radial-gradient(40% 45% at 100% 50%, white 0%, transparent 100%),
      radial-gradient(40% 45% at 0% 50%, white 0%, transparent 100%);
  }
  .form .login-button:hover {
    animation: flicker 0.5s infinite;
    width: 105%;
  }
  .form .login-button:active {
    width: 95%;
  }
  .form .texture {
    position: absolute;
    background-image: linear-gradient(0deg, #ffffff 1px, transparent 1px);
    background-size: 1px 5px;
    inset: 0;
    mix-blend-mode: soft-light;
    -webkit-mask-image: radial-gradient(
        30% 45% at 100% 50%,
        white 0%,
        transparent 100%
      ),
      radial-gradient(30% 45% at 0% 50%, white 0%, transparent 100%);
    mask-image: radial-gradient(30% 45% at 100% 50%, white 0%, transparent 100%),
      radial-gradient(30% 45% at 0% 50%, white 0%, transparent 100%);
    pointer-events: none;
    animation: movingLines 1s linear infinite;
  }

  @keyframes flicker {
    0% {
      filter: brightness(100%);
    }
    10% {
      filter: brightness(80%);
    }
    20% {
      filter: brightness(120%);
    }
    30% {
      filter: brightness(90%);
    }
    40% {
      filter: brightness(110%);
    }
    50% {
      filter: brightness(100%);
    }
    60% {
      filter: brightness(85%);
    }
    70% {
      filter: brightness(95%);
    }
    80% {
      filter: brightness(105%);
    }
    90% {
      filter: brightness(115%);
    }
    100% {
      filter: brightness(100%);
    }
  }
  @keyframes movingLines {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 0 5px;
    }
  } /*# sourceMappingURL=style.css.map */
`;

export default Form;
