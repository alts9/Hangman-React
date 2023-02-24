import React, { useEffect } from "react";
function Graphic({ lives, reset }) {
  function showElement(lives) {
    switch (lives) {
      case 7:
        document.getElementById("rope").style.opacity = 1;
        break;
      case 6:
        document.getElementById("head").style.opacity = 1;
        break;
      case 5:
        document.getElementById("top-torso").style.opacity = 1;
        break;
      case 4:
        document.getElementById("right-hand").style.opacity = 1;
        break;
      case 3:
        document.getElementById("left-hand").style.opacity = 1;
        break;
      case 2:
        document.getElementById("bottom-torso").style.opacity = 1;
        break;
      case 1:
        document.getElementById("right-leg").style.opacity = 1;
        break;
      case 0:
        document.getElementById("left-leg").style.opacity = 1;
        break;
      default:
    }
  }

  function hideElement() {
    document.getElementById("rope").style.opacity = 0;
    document.getElementById("head").style.opacity = 0;
    document.getElementById("top-torso").style.opacity = 0;
    document.getElementById("bottom-torso").style.opacity = 0;
    document.getElementById("right-hand").style.opacity = 0;
    document.getElementById("left-hand").style.opacity = 0;
    document.getElementById("right-leg").style.opacity = 0;
    document.getElementById("left-leg").style.opacity = 0;
  }

  useEffect(() => hideElement(false), [reset]);
  useEffect(() => showElement(lives), [lives]);

  return (
    <>
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 150 150"
      >
        <path
          id="pole"
          d="M17.5,135.3c-.2-5-.1-4.3-.3-7.9s-.1.1,0-1.4v-1.6a11.9,11.9,0,0,0,0-1.9v1.1c0-2.3-.1.7-.1,1.6.1,11-.1-3.3-.1-7.5-.1,2.6,0-.1,0-1.3a10.4,10.4,0,0,1,0-2.5c.1,1.7.1-4.9,0-1.6-.1-.3,0-2.8,0-3.7.1,4.5.1.8.2-1.7,0-4.4-.1-5-.2-7.9.2.1.1.7.2,1.7s-.1-4.4,0-5.3-.3-.2-.1-1.3-.1-5.8-.1-1c.1,2.7,0,4.3.2,5.4s-.2-1.9-.2-3.2,0-12.2-.1-9.2c-.2-.2.2-1.9.1-3-.2.8-.1-1.8-.1-2.6s.1,1.1.1-.6c.1-3.2-.2.3-.1-5.3.1,7.8.2-5.2.2-7.1.1-5.8.2-11.1.3-17-.1-1.2,0-9.7-.1-4.7-.1,13.8-.2-7.7-.1-12.2.1-2.1,0-4.3,0-6.3.2,2.3.2-5,.1-4.4,0-1.9.2,2.4.3-2.3-.1-1.3,0-11.1-.2-8.3,0-2.6.4,1.3.4,0s0,.6.1,0c.2,1.1.2,1.9.2,0,.2.9.1-1.2.2,0,.1-.4-.1-.7-.1,0s.2,1.8.3,0h0c0-.2.1.4,0,0s.2,1.4.3,0,1.1-.8.5,0,0-2.6,0,0,.1-3,.3,0c.2.3,0-.2.2,0s-.1-1.2.1,0c0-.6-.2,0-.1,0s.2-1.5.2,0,.3,7,.3,8-.2.4-.1.9-.3,8.4,0,14.6c-.2,1.7.3,1.9.1,3.1-.2-.7-.1,3.8-.1,4.6,0,3,.2,6,0,7.4a19.3,19.3,0,0,0,.1,2.4c.1,2.4,0,2.2.1,3.1-.2,2.4,0,10.2-.1,9.3-.1.8.1,1.2,0,1.8s-.1-.2,0,.3,0,2.8.1,1.7-.1-1.1,0-.3-.1,2.9-.1,4.3,0,1.6.1,2.1c0,2.8.1,6.4,0,8.2-.1-.1,0,2.7.1,1.8,0,3.2-.2,3.2-.1,5.7s0,6.9-.1,10,0,3.8,0,6.1-.1,2.3-.1,3.6c0-.6.2-1.2.1-.1s.1,4.5,0,6.4,0-1.7,0-.8c-.1,3.6.1,2.4.1,5.5-.3.4-.1,10.3-.2,13.2Z"
        />
        <path
          id="top-bar"
          d="M6.2,12.8c-2.9.1-.3,0,0-.1-2.8,0,2.3-.1,0-.1,2.9,0-2.4-.1,0-.1-.9,0-.1.1,0,0s-1.5,0,0-.1c-1.3,0,.4,0,0-.1h0c-4.5-.1-.9-.2,0-.2s-1.3,0,0-.1-.3.1,0,0c-2.7,0,.3-.1,0,.1s-1.7,0,0,0h0c-2.6,0,2.7-.2,0-.2,1.1,0-.6-.2,0-.2s-1.4-.1,0-.1h0c-.4-.1-.1-.1,0,0,2.4,0,1.9-.2,0,0s-.5-.1,0-.1h0c1.7-.1,1.7,0,0-.1H20.7c6.4,0,10.4-.1,16.5,0s1.1,0-1.9,0c1.8.1,6.1,0,2.9.1,12-.2,25.3,0,36.2-.2h6.8c-3.7,0,2.5,0-.6.1s-1.7,0-5.7.1h41.7c-16.8,0,11.1.1,8.6.1h5.4c-4.7.1,7.6.3,7.6.3h0c-.7.1,0,.1,0,.1v.5s-2.2,0,0,.1h0c-1.6.1-4.9.2,0,.1-2.8.2,0,.2,0,.2h0c-1.7,0-2.5.1,0,.1-.9.1-6.9,0,0,.1-2,0-.1,0,0,.1-2.2.1-1.5,0,0,.1-2.9.2-7.5.1,0,.2h0s-8,0-5.4.1H101.5c7.1,0,10.3,0,1.1.1h3.7c-2.8,0-19.9,0-19.6-.1H55.2c.5,0,.1,0,.4-.1-11.9.2-10.7.1-28.7,0H20.1c6.5,0-8.9,0-1.7-.1h1.7c-2.9-.1-4.4,0-1.5-.1H13.8c2.5,0,.8-.1,2.2-.1H6.2c.1.1-2.6.1,0,.1h0c-2.6-.1-2.3-.1,0-.1.6,0,2.8-.1,0-.1.8,0-.3.1,0,0-1.3,0,1.4-.1,0-.1h0c-1.8,0,1.2-.1,0-.1h0c-.9-.1,1.4-.1,0-.1Z"
        />
        <path d="M19.9,37.1c-.5.5,0,0-.1-.2h0c.5-.6-.6.3-.1-.1s0,.1,0,0-.3.3-.1-.1,0-.1-.1-.1h0c-.9.8-.3,0-.2-.2h0c-.6.4-.1-.2,0,0s-.3.3,0,0,.1-.1,0,0,.4-.6-.1-.1-.4-.1-.2-.2-.4.2-.1-.1,0,0-.1-.1h0c.5-.4.3-.4.1.1s-.2,0-.1-.1h0c.3-.3.3-.3-.1-.1,1.1-1.1,4.7-4.8,2.6-2.6s.5-.4.8-.7,1.8-1.7,1.4-1.5-1.1,1.2-1.6,1.4-.5.6-.6.6,1.8-1.9,3-3,.2-.2-.3.4,1.1-1.2.6-.5c2-2.4,4.6-4.6,6.5-6.8l1.3-1.3c-.7.7.4-.4-.1.2l-1,1.1,1.3-1.2,6-6.3c.1-.1,1.3-1.1.4-.2-3.2,3.1,2-2,1.6-1.5l-.5.5a10.6,10.6,0,0,0,1.5-1.5c-.8.9,1.6-1.2,1.6-1.2h.1c-.2,0-.2,0-.1-.1s.1.1.1.1.1.1.1.1v.2l.3.2s-.4.4.1.1h0c-.3.3-.8,1,.1.1-.4.6.2.2.2.2h0s-.6.7.1.1h0c-.1.2-1.2,1.3.1.1-.4.3,0,.1.1.1s-.3.3.1.1-1.3,1.5.1.2h.1s-1.4,1.5-.9,1.1l-1.8,1.8c.6-.5-.5.5-.7.8s1.4-1.5,2.2-2.2c-1.9,2.1-4.4,4.4-5.3,5.5l.2-.2c-.7.7,2.4-2.3.7-.6L35.6,23l-3.9,4c0,.1-1.2,1.2-1.6,1.6l-.3.3c.1-.1,0-.1,0-.1-2.1,2.2-1.9,1.9-5.3,5.2l-1.3,1.2c1.2-1.1-1.6,1.7-.3.3l.3-.3h0c-.6.5-.9.8-.4.2-1.1.9-1.6,1.6-2.3,2.2a8.7,8.7,0,0,1,1.3-1.5c.5-.4.1-.2.4-.4l-1.9,1.7c.1.1-.4.6.1.1s-.4.3-.1-.1h0c0-.1.4-.6-.1-.1s0,.2,0,0,.1-.4-.1-.1h0c-.4.3.1-.3-.1-.1h0c-.2.1.2-.3-.1-.1S19.9,37.1,19.9,37.1Z" />
        <path
          id="pole-support"
          d="M11.8,135.2h0c2.7-.1,1.5-.1,0-.2h0c6.3.1-6-.1,0-.2h0c-1-.1,1.2-.1,0-.1h0c7.6-.1,3.5,0,0-.1,3.1,0-3-.1,0-.1h0c-1.2-.1,1.6.1,0-.1.4-.1,7.9,0,0-.1l36-.2h5.9c.5,0-6.2,0-.8-.1.9,0,3.5.2,8.3.1H59.5c.2-.1,3.3,0,2.3-.1h1.3c-1.8.1.9.1,1.7.1h1.9c2.9.1-.7.2.5.1s-8.4,0-1.7.1c4.2,0,2.8-.1,7.3-.2-2.7.2,1.1.1,2.1,0h9.7c-4.3,0-4.9,0-.5-.1h3.4c3.7-.1,3.2.2,5.2-.1h27.6c3.5-.1-8.3-.1-4.9-.1h18.4c-5.5-.1,3.6.2,4.2,0s1.4.3-.2.2H137c.5.1-1.1.1-1.8.2,4.2-.1,2.4.7,2.3.9s1.1.6.2.9l-2,.5h-1.3c-1.3,0-.1.1-.5.1H101.5c-18.2.1-75.4,0-89.7-.4.8-.1,6.8,0,0-.1h0c2.2-.1,8.9-.1,0-.2,4.1,0,2.3-.1,0-.1h0c-3.4-.1,4.4,0,0-.1h0c4.2-.1-3.2-.1,0-.1h0c1.8-.1.8-.1,0-.1h0c.9-.1-2.3-.2,0-.2-.5-.1-8.3-.1,0-.1h0c7,.1-5.6-.1,0-.1h0C10.2,135.1,25.1,135.2,11.8,135.2Z"
        />
        <g id="right-leg">
          <path d="M86.8,119.6a1.2,1.2,0,0,0,1.8,1.3c2.5-1.8,1.6-2.7,3.3-5.2s2-2.3,3.7-4.8c.7-1,1.2-2,1.8-2.9l3.4-5.1c1.6-2.6,2.5-2.3,3.2-5.2a1.2,1.2,0,0,0-1.9-1.3c-2.4,1.9-1.7,2.6-3.3,5.1l-3.4,5.2c-.6.9-1.1,1.9-1.8,2.8-1.7,2.5-1.4,2.8-3.4,5.1S87.6,116.7,86.8,119.6Z" />
        </g>
        <g id="left-leg">
          <path d="M103.1,97.7c-.3-1.1.8-1.7,1.7-1.1,2.4,1.8,1.9,2.3,3.6,4.8s1.6,2.7,3.3,5.2a28.3,28.3,0,0,1,2,2.8l3.2,5.2c1.6,2.5,2.6,2.1,3.3,5.1a1,1,0,0,1-1.6,1c-2.4-1.9-1.6-2.6-3.2-5.1l-3.2-5.2c-.6-1-1.4-1.9-2-2.8a35.2,35.2,0,0,0-3.6-5C104.6,100.3,103.9,100.6,103.1,97.7Z" />
        </g>
        <g id="right-hand">
          <path d="M102.3,61.8c.8-.7,2.2.4,1.7,1.4-3,5.3-4,4.6-7.9,9.3l-2.2,2.6c-4,4.6-3.1,5.5-7.9,9.3-.8.7-2.2-.5-1.6-1.4,3.2-5.2,4-4.5,8-9.1l2.3-2.6C97.8,66.1,97.8,65.9,102.3,61.8Z" />
        </g>
        <g id="left-hand">
          <path d="M121.7,84.3c.8.7,2.1-.5,1.6-1.4-3-5.3-3.6-4.9-7.5-9.7-.7-.8-1.3-1.8-2.1-2.6-4-4.6-3.5-5.2-8.2-9-.8-.7-2.1.4-1.6,1.3,3.2,5.2,4,4.6,8,9.2a27.5,27.5,0,0,1,2.2,2.6C117.2,80,117.1,80.2,121.7,84.3Z" />
        </g>
        <path
          id="bottom-torso"
          d="M105.1,80.6a19.4,19.4,0,0,1,.2,2.4c.1,4.5-.7,4.5-.2,9s1.4,4.6.2,9a1.4,1.4,0,0,1-2.7.1c-1.4-4.3.4-4.6.3-9.1s.1-4.5,0-9a16.4,16.4,0,0,0-.2-2.2Z"
        />
        <path
          id="top-torso"
          d="M102.7,80.8a14.3,14.3,0,0,1-.3-2.9l.2-9c.1-4.5-1.1-4.7.2-9a1.4,1.4,0,0,1,2.6,0c1.2,4.4.1,4.5,0,9s-.4,4.5-.5,9a24.5,24.5,0,0,0,.2,2.7C105.1,81.2,103,81.3,102.7,80.8Z"
        />
        <g id="head">
          <path d="M116.8,50a12.1,12.1,0,0,1-10.1,10.8,11.4,11.4,0,0,1-7.7-.7,20.1,20.1,0,0,1-6.5-5.7A12.5,12.5,0,0,1,91,46a13.6,13.6,0,0,1,4-6.9,13.2,13.2,0,0,1,6.9-4,14.9,14.9,0,0,1,8,1.1,9.9,9.9,0,0,1,6.4,5.3,15.2,15.2,0,0,1,.8,8.5C117.1,50.1,116.8,50,116.8,50Z" />
        </g>
        <g id="rope">
          <path d="M105.9,46.1c-.2,1.3-2.2,1.2-2.5-.1-1.4-6.4-.3-6.5-.5-13.1-.1-1,.2-2.1.2-3.1s-.1-.7-.1-1a30.3,30.3,0,0,1,.2-3.1c.2-6.6-1.2-6.7.2-13.2a1.2,1.2,0,0,1,2.4,0c1.2,6.5-.2,6.6-.3,13.2a30.3,30.3,0,0,0-.2,3.1c0,.3.1.6.1,1s.2,2.1.3,3.1C107,39.4,107.2,39.6,105.9,46.1Z" />
        </g>
      </svg>
    </>
  );
}

export default Graphic;