import React from "react";

const WelcomeHtml = ({ onStart }) => {
  return (
    <div className={"bg-transparent"}>
      <div className={"mb-2"}>
        <h1 className="text-xl font-retro text-terminalGreen bg-transparent ">
          Are you ready?
        </h1>
      </div>
      <div className="text-xl font-retro flex justify-center">
        <button
          onClick={onStart}
          className="bg-terminalGreenDark hover:bg-terminalGreen text-green-950 hover:text-green-50 font-bold py-2 px-4 rounded shadow-lg text-lg m-4"
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default WelcomeHtml;
