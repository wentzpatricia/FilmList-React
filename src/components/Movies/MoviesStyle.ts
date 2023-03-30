import styled from 'styled-components';
export const MoviesContainer = styled.div`
  padding: 20px;
`;

export const FormStyle = styled.div`
  form {
    display: flex;
    justify-content: center;
    margin-top: 10px;
    width: 100%;
  }

  input {
    padding-left: 10px;
    font-size: 16px;
    height: 35px;
    width: 500px;
    border-radius: 20px;
    border: none;
    color: #0d0d0d;
  }
  button {
    margin-left: 10px;
    font-size: 20px;
    border-radius: 20px;
    width: 50px;
    background-color: #e6b400;
    color: #f2f2f2;
    border: none;
  }
  button > svg {
    margin-top: 5px;
  }
`;

export const MoviesListContainer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  ul {
    padding: 15px;
  }

  ul li button {
    transition: 0.3s ease-in-out;
    border: none;
    background-color: #191919;
  }
  ul li button:hover {
    transition: 0.3s ease-in-out;
    transform: scale(1.1);
  }

  ul > li > button > img {
    border-radius: 15px;
  }
`;
