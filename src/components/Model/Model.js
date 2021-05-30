import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/css/modal-video.min.css";
import modelBg from '../../Image/img/modal.jpg';
import './ModelStyle.css';
const Modal = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="container">
      <div
        style={{ backgroundImage: `url(${modelBg})` }}
        className="video-modal-wrap "
      >
        <React.Fragment>
          <ModalVideo
            channel="youtube"
            autoplay
            isOpen={isOpen}
            videoId="0SPwwpruGIA"
            onClose={() => setOpen(false)}
          />

          <button className="btn-primary" onClick={() => setOpen(true)}>
            YouTube
          </button>
        </React.Fragment>
      </div>
    </div>
  );
};

export default Modal;
