import styled from 'styled-components';

export const StyledLoader = styled.div`
  border: 5px solid #fff;
  border-top: 5px solid #e3bd22;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin: 20px auto;
  animation: spin 1.2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
