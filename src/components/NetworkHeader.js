/*eslint-disable*/
import React from "react";

// reactstrap components
// import { } from 'reactstrap';

// core components

function NetworkHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div id="video-header" className="hero page-header clear-filter" >
        <div className="page-header-video"
            ref={pageHeader}>
          <video 
              playsInline="playsinline" 
              autoPlay="autoplay" 
              muted="muted" 
              loop="loop"
              poster={require("assets/img/video_cover.png")} >
            <source src={require("assets/img/output.mp4")} type="video/mp4" />
            <source src={require("assets/img/output.webm")} type="video/webm" />
            <source src={require("assets/img/output.ogv")} type="video/ogg" />
          </video>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-2"></div>
            <div className="col-lg-6 col-md-8 overlay_panel">
                  <h1 className="title">Introducing the peer to peer credit network.</h1>
                  <h2 className="cashless_title">
                    <img src={require("assets/img/cashless_logo_white.png")} /> Cashless</h2>
                  <h3>Financially free, together.</h3>
            </div>
            <div className="col-lg-3 col-md-2"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NetworkHeader;
