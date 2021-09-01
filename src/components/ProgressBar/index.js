import React from "react";
import * as S from "./styles";

const ProgressBar = ({ stat }) => {
  return (
    <S.ProgressBar className="row">
      <p>{stat.stat.name}</p>
      <div className="progress-bar-container">
        <p>{stat.base_stat}</p>
        <div className="progress-bar">
          <div
            className="progress-bar-limit"
            style={{
              width: `${(stat.base_stat * 100) / 255}%`,
            }}
          >
            <div className="progress-bar-fill"></div>
          </div>
        </div>
      </div>
    </S.ProgressBar>
  );
};

export default ProgressBar;
