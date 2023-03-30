import styled from 'styled-components';

export const HeaderContainer = styled.div`
  background: #0d0d0d;
  width: 100%;
  display: flex;
  justify-content: center;
  div {
    margin: 40px;
    width: 300px;
    border: dotted 4px #e6b400;
    border-radius: 20px;
    display: flex;
    justify-content: center;
  }
  h1 {
    font-weight: 300;
    color: #8c8069;
    padding: 5px;
  }
  span {
    color: #e6b400;
    font-size: 30px;
    padding-top: 4px;
  }
`;
