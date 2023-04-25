import React from "react";

function JoinUs() {
  const handleTwitterClick = () => {
    window.location.href = "https://twitter.com/";
  };

  const handleDiscordClick = () => {
    window.location.href = "https://discord.com/";
  };

  return (
    <div className="box-iner">
      <h2 className="white font-weight-600 margin-bottom-15">Join Us</h2>
      <div className="join-twitter">
        <button className="blue-button" onClick={handleTwitterClick}>
          Twitter
        </button>
        <button className="blue-button" onClick={handleDiscordClick}>
          Discord
        </button>
      </div>
    </div>
  );
}

export default JoinUs;
