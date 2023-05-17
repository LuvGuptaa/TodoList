import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { faMoon } from "@fortawesome/free-regular-svg-icons";


export const SwitchMode = ({ theme, toggleTheme}) => {
  return (
    <div className="switch">
      <button
        className="btn-switch"
        onClick={() => toggleTheme()}
      >
        {theme === "light" ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
      </button>
    </div>
  );
};
