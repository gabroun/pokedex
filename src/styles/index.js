import styled from "styled-components";

export const MainContent = styled.div`
  max-width: 750px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  align-items: center;
  padding: 10px;
  margin: 0 auto;
  grid-gap: 10px;
  img {
    max-width: 100%;
  }

  h2 {
    font-size: 40px;
    letter-spacing: 2px;
    font-style: italic;
  }

  p {
    font-size: 20px;
    a {
      text-decoration-style: wavy;
      color: #de1e2f;
    }
  }
`;
