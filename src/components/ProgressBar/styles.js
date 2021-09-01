import styled from "styled-components";

export const ProgressBar = styled.div`
  .progress-bar-container {
    align-items: center;
    display: grid;
    grid-gap: 4px;
    grid-template-columns: 50px 1fr;

    .progress-bar {
      height: 10px;
      width: 100%;
      background: #f5f5f5;
      box-shadow: inset 0px 3px 13px -4px rgb(0 0 0 / 50%);
      border: 1px solid #dedede;
      border-radius: 5px;
    }

    .progress-bar-fill {
      width: 100%;
      height: 10px;
      background: linear-gradient(
        to right,
        rgba(31, 59, 8, 0.7) 0%,
        #63bd86 100%
      );
      animation-name: progressing;
      animation-duration: 4s;
      border-radius: 10px;
    }
  }

  @keyframes progressing {
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  }
`;
