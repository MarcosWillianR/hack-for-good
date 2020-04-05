import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  background: #f4f4f4;
  padding: 0 12px;

  form {
    width: 100%;
    max-width: 500px;
    height: 100%;
    max-height: 500px;

    background: #fff;
    box-shadow: 0 3px 16px rgba(0, 0, 0, 0.16);
    border-radius: 20px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 60px;

    strong {
      text-align: center;
      margin-bottom: 42px;

      font-size: 48px;
      font-weight: 300;
    }

    input {
      width: 100%;
      border-radius: 50px;
      height: 50px;
      padding: 12px 22px;
      box-shadow: 0 3px 16px rgba(0, 0, 0, 0.16);
      border: 0;

      margin-bottom: 22px;

      &::placeholder {
        font-weight: bold;
      }
    }

    a {
      align-self: flex-end;
      color: #464646;
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
  }
`;

export const RegisterText = styled.p`
  align-self: center;
  margin-top: 32px;

  color: #464646;

  a {
    font-weight: bold;
    margin-left: 5px;
  }
`;
