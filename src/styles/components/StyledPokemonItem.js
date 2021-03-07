import styled from 'styled-components';

export const StyledPokemonItem = styled.div`
  position: relative;

  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .wrapper__left {
    margin-right: 50px;
    border: 1px solid #ccc;
    padding: 20px 50px 10px 50px;
    border-radius: 20px;
  }

  .title {
    font-size: 22px;
    text-align: center;
    margin: 0;
  }

  ul {
    margin: 10px 0 15px 0;
    padding: 0;
  }

  li {
    font-size: 18px;
    text-align: center;
    text-transform: capitalize;
    list-style: none;
    margin-bottom: 5px;
  }

  .height,
  .weight {
    font-size: 18px;
  }

  .wrapper__right {
    margin-left: 50px;
  }

  .name {
    font-size: 30px;
    text-align: center;
    text-transform: capitalize;
  }

  .image {
    margin: 0 auto;
    display: block;
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
