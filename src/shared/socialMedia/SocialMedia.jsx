import React from "react";

const SocialMedia = () => {
  return (
    <div className="social_buttons">
      <a
        href="https://github.com/Arinze-Kevin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-github"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/arinzekevin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-linkedin"></i>
      </a>
      <a
        href="https://twitter.com/iam_ArinzeKevin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-twitter"></i>
      </a>
      <a
        href="mailto:egboguarinze@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fas fa-at"></i>
      </a>
    </div>
    
  );
};

export default SocialMedia;