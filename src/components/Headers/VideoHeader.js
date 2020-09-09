/*eslint-disable*/
import React from "react";

// reactstrap components
// import { } from 'reactstrap';

// core components

function VideoHeader() {
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
      <div className="hero page-header clear-filter" >
        <div className="page-header-video"
            ref={pageHeader}>
          <video 
              playsInline="playsinline" 
              autoPlay="autoplay" 
              muted="muted" 
              loop="loop"
              poster={require("assets/img/empty_spanish_cover.png")} >
            <source src={require("assets/img/output.mp4")} type="video/mp4" />
            <source src={require("assets/img/output.webm")} type="video/webm" />
            <source src={require("assets/img/output.ogv")} type="video/ogg" />
          </video>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
                  <h1 className="title">Reinventing money for a kinder, more empowered post COVID world.</h1>
                  <h2 className="cashless_title">
                    <img src={require("assets/img/cashless_logo_white.png")} /> Cashless</h2>
                  <h3>Coming soon.</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoHeader;
