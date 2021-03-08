import styled from 'styled-components';

export const StyledPokemonAbility = styled.div`
  position: relative;

  .title {
    font-size: 24px;
    text-align: center;
    text-transform: capitalize;

    @media (max-width: 750px) {
      padding: 50px 0 0;
    }
  }

  .info {
    font-size: 18px;
    line-height: 1.5;
    max-width: 750px;
    margin: 10px auto;
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
