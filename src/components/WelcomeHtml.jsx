import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { start, zoom } from "@/redux/slice";

const WelcomeHtml = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        // dispatch(start());
        // dispatch(zoom());
        // onStart();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

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
            onClick={() => {
              // dispatch(start());
              // dispatch(zoom());
              // onStart();
            }}
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
