import styled from 'styled-components';

export const StyledPokemonItem = styled.div`
  position: relative;

  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 750px) {
      flex-direction: column-reverse;
    }
  }

  .wrapper__left {
    margin-right: 50px;
    border: 1px solid #ccc;
    padding: 20px 50px 10px 50px;
    border-radius: 20px;
    width: 225px;

    @media (max-width: 750px) {
      margin: 50px 0;
    }
  }

  .height,
  .weight {
    font-size: 18px;
    margin: 10px 0;
  }

  .title {
    font-size: 22px;
    text-align: center;
    margin: 5px 0;

    &:first-of-type {
      margin-top: 15px;
    }
  }

  ul {
    margin: 10px 0 15px 0;
    padding: 0;
  }

  li {
    font-size: 18px;
    text-transform: capitalize;
    list-style: none;
    margin-bottom: 5px;
  }

  .ability {
    transition: 0.3s;
    cursor: pointer;

    &:hover {
      color: #e3bd22;
    }
  }

  .wrapper__right {
    margin-left: 50px;

    @media (max-width: 750px) {
      margin: 25px 0 0;
    }
  }

  .name {
    font-size: 30px;
    text-align: center;
    text-transform: capitalize;
  }

  .image {
    max-width: 100%;
    display: block;
    margin: 0 auto;
  }

  .back {
    font-size: 25px;
    top: 0;
    left: 0;
    position: absolute;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
      fill: #e3bd22;
    }
  }
`;
