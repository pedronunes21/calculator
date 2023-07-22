import { useProgress } from "@react-three/drei";
import { usePlay } from "../contexts/Play";

export const Overlay = () => {
  const { progress } = useProgress();
  const { play, setPlay, hasScroll, end } = usePlay();

  return (
    <div
      className={`overlay ${play && "overlay--disable"} ${
        end ? "overlay--blur" : ""
      } ${hasScroll ? "overlay--scrolled" : ""}`}
    >
      <div
        className={`loader ${progress === 100 ? "loader--disappear" : ""}`}
      />
      {progress === 100 && (
        <div
          className={`intro ${play ? "intro--disappear" : ""} ${
            end ? "intro--end" : ""
          }`}
        >
          <h1 className="logo">
            ATMOS
            <div className="spinner">
              <div className="spinner__image"></div>
            </div>
          </h1>
          <p className="intro--scrolled">Scroll to begin the journey!</p>
          <button className="explore" onClick={() => setPlay(true)}>
            Explore
          </button>
        </div>
      )}
      <div
        className={`outro ${play ? "outro--prepare" : ""} ${
          end ? "outro--appear" : ""
        }`}
      >
        <p className="outro__text">
          Created by{" "}
          <a href="https://www.linkedin.com/in/pedronunes21/" target="_blank">
            Pedro Nunes
          </a>
        </p>
        <p className="outro__subtext">
          Based on{" "}
          <a href="https://atmos.leeroy.ca/" target="_blank">
            Atmos
          </a>
        </p>
      </div>
    </div>
  );
};
