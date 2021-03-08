import { motion } from 'framer-motion';
import styled from 'styled-components';

export const StyledHome = styled(motion.div)`
  .list {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
  }

  .item {
    flex-grow: 1;
    list-style: none;
    margin: 0 20px 20px;
    padding: 10px 20px;
    border: 1px solid #ccc;
    border-radius: 20px;
    width: 175px;
    cursor: pointer;

    .name {
      font-size: 18px;
      text-align: center;
      text-transform: capitalize;
    }

    img {
      display: block;
      margin: 0 auto;
    }
  }

  .btn__wrapper {
    display: flex;
    justify-content: center;
    margin: 30px 0 50px;

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
