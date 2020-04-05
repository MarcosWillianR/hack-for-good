import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  background: #f4f4f4;

  form {
    width: 100%;
    max-width: 600px;
    display: flex;
    justify-content: center;
    flex-direction: column;

    background: #fff;
    padding: 62px 41px;

    border-radius: 20px;
    box-shadow: 0 3px 16px rgba(0, 0, 0, 0.16);

    h1 {
      font-weight: 400;
      opacity: 0.7;
      margin-bottom: 22px;
      text-align: center;
    }

    button {
      width: 100%;
      max-width: 180px;
      border-radius: 50px;
      border: 0;
      height: 50px;
      padding: 12px 22px;

      font-weight: bold;
      font-size: 22px;

      align-self: center;
      margin-top: 32px;

      background-color: #fed308;
      transition: background-color 0.3s;

      &:hover {
        background-color: ${darken(0.03, '#fed308')};
      }
    }

    span {
      color: #ff2626;
      margin: 22px 0 0 12px;
    }
  }
`;
