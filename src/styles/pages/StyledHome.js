import styled from 'styled-components';

export const StyledHome = styled.div`
  .list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0;
    cursor: pointer;
  }

  .item {
    list-style: none;
    margin: 0 20px 20px;
    padding: 10px 20px;
    border: 1px solid #ccc;
    border-radius: 20px;

    .name {
      font-size: 18px;
      text-align: center;
      text-transform: capitalize;
    }
  }

  .btn__wrapper {
    display: flex;
    justify-content: center;

    button {
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: #000;
      margin: 0 20px;
      padding: 10px 20px;
      display: inline-block;
      border: 1px solid #ccc;
      border-radius: 10px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
      transition: 0.3s;
      outline: none;
      cursor: pointer;

      &:hover {
        background-color: #e3bd22;
      }

      &:active {
        background-color: #ffcc01;
      }

      &:disabled {
        background-color: #4a4a4a;
      }

      &:disabled:hover {
        background-color: #3d3d3d;
      }
    }
  }
`;
