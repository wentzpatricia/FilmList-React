import styled from 'styled-components';
export const MovieDetailContainer = styled.div`
  padding-top: 20px;
  transition-duration: 5s;
  transition-delay: 2s;
`;

export const ContainerRight = styled.div`
  float: right;
  img {
    width: 250px;
    margin-top: 60px;
    border-radius: 5px;
  }
`;
export const ContainerLeft = styled.div`
  padding-top: 20px;
  float: left;
  width: 60%;
  span {
    font-weight: bold;
    color: #eead2d;
    text-transform: uppercase;
    font-size: 18px;
  }
  h2 {
    color: #000;
    font-size: 26px;
    font-weight: bold;
    padding-bottom: 15px;
    margin: 0 10px;
    text-align: center;
  }
  h2 > span {
    text-align: center;
    color: #e6b400;
    font-size: 32px;
    border-bottom: 2px solid #e6b400;
  }
  h2 > span > svg {
    padding-top: 5px;
  }
  p,
  h3 {
    margin-top: 20px;
    text-align: justify;
    color: #000;
    font-size: 20px;
    font-weight: normal;
  }
`;
