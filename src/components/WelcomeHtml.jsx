import React, { useEffect } from "react";

const WelcomeHtml = ({ onStart }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        onStart();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onStart]);

  return (
    <div className="bg-transparent">
      <div className="mb-2">
        <h1 className="text-xl font-retro text-terminalGreen bg-transparent">
          Are you ready?
        </h1>
      </div>
      <div className="text-xl font-retro flex justify-center">
        <div className="group">
          <button
            onClick={onStart}
            className="group-hover:animate-none animate-blink bg-terminalGreenDark hover:bg-terminalGreen text-green-950 hover:text-green-50 font-bold py-2 px-4 rounded shadow-lg text-lg m-4"
          >
            Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeHtml;
