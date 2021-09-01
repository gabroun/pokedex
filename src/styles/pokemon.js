import styled from "styled-components";

export const PokemonItem = styled.div`
  margin: 0 auto;
  text-align: center;
  .pokemon {
    &-info {
      border-top-right-radius: 20px;
      border-top-left-radius: 20px;
      box-shadow: 0 0 14px 0px rgb(0 0 0 / 10%) !important;
      max-width: 500px;
      margin: 0 auto;
      position: relative;
      top: -70px;
      height: 350px;
      padding: 50px 20px;
    }

    &-name {
      font-size: 30px;
      text-transform: capitalize;
      font-weight: 600;
      letter-spacing: 2px;
    }

    &-img {
      width: 300px;
    }
  }

  .back {
    font-size: 25px;
    text-decoration: none;
    color: black;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-left: 10px;
    span {
      font-size: 50px;
    }
  }

  .tabs {
    &-header-container {
      display: flex;
      border-bottom: solid 1px rgba(0, 0, 0, 0.1);
      margin: 0;
      list-style: none;
      padding: 0;
    }
  }

  .tab-header {
    padding: 20px;
    color: #6f7680;
    &.active {
      color: #333;
      border-bottom: solid 1px #9099ca;
      font-weight: 600;
    }
  }

  .tab-content {
    display: none;
    &.active {
      display: block;
      padding: 20px;
    }
  }

  .row {
    display: grid;
    grid-template-columns: 1fr 2fr;
    text-align: left;
    margin-bottom: 20px;
    grid-gap: 4px;

    p {
      margin: 0;
      text-transform: capitalize;
      span {
        margin-right: 10px;
      }
    }
  }

  .type {
    color: #fff;
    padding: 10px 20px;
    border-radius: 20px;
  }

  .grass {
    background-color: #60bd58;
  }

  .normal {
    background-color: #a8a776;
  }

  .poison {
    background-color: #9e3f9f;
  }

  .fire {
    background-color: #ef7d2d;
  }

  .water {
    background-color: #668fef;
  }

  .electric {
    background-color: #f8ce2e;
  }

  .ice {
    background-color: #98d6d7;
  }

  .ground {
    background-color: #e0be67;
  }

  .flying {
    background-color: #a78fef;
  }

  .fighting {
    background-color: #bf2f27;
  }

  .psychic {
    background-color: #f85786;
  }

  .dark {
    background-color: #6d5747;
  }

  .dragon {
    background-color: #7037f8;
  }

  .rock {
    background-color: #b69f37;
  }

  .steel {
    background-color: #b7b8cf;
  }

  .bug {
    background-color: #a8b620;
  }

  .ghost {
    background-color: #6f5697;
  }

  .fairy {
    background-color: #fcacc7;
  }
`;
