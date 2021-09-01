import styled from "styled-components";

export const Toolbar = styled.div`
  margin: 50px auto;
  box-shadow: 10px 10px 60px #e9e8e7;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 280px;
  border-radius: 10px;

  .toolbar {
    &-number {
      font-size: 16px;
      color: inherit;
      text-decoration: none;

      text-align: center;
      padding: 6px 10px;

      &[aria-current] {
        background-color: #3399fe;
        color: white;
        border-radius: 6px;
      }

      &:hover {
        background-color: #eaeaea;
        color: #333;
        border-radius: 6px;
      }
    }

    &-next,
    &-prev {
      color: inherit;
      text-decoration: none;
    }

    &-prev {
      margin-right: 10px;
    }
  }
`;
