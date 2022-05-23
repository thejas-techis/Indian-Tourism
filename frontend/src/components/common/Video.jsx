import React from "react";
import wavywhite from "../../assets/img/wavywhite.svg";
import videolink from "../../assets/img/videolink.png";
import play from "../../assets/img/play.svg";
import videobackground from "../../assets/img/videobackground1.png";
import video from "../../assets/video/video.mp4"

function Video() {
  return (
    <>
      <section class="video">
        <img src={videobackground} alt="" id="bgvideo" />
        <div class="caption">
          <p>DISCOVER</p>
          <div class="wavy">
            <p>Watch Our Video Tour</p>
            <img src={wavywhite} alt="" />
          </div>
          <video  controls>
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </section>
    </>
  );
}

export default Video;
