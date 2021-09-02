import styled from "styled-components";

export const PokemonCard = styled.div`
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 10px 10px 60px #e9e8e7;
    border-radius: 15px;
    position: relative;
    text-decoration: none;
  }

  span {
    color: #939393;
    font-size: 130px;
    font-weight: 500;
  }

  img {
    width: 120px;
    height: 120px;
    position: absolute;
    top: 20%;
    transform: translateY(-20%);
  }

  p {
    text-transform: capitalize;
    font-size: 20px;
    letter-spacing: 2px;
    font-weight: 500;
    margin-top: 0;
    color: #333;
  }
`;

export const PokemonList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 355px));
  grid-gap: 30px;
  justify-content: center;
`;

export const SearchBox = styled.div`
  margin: 50px auto;
  text-align: center;
  input {
    height: 50px;
    border: none;
    border-bottom: solid 1px #333;
    font-size: 20px;
    &::-webkit-input-placeholder {
      color: #757575;
    }
  }
`;
