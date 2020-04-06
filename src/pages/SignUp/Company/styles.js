import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  background: #f4f4f4;

  padding: 60px 30px;

  @media screen and (max-width: 765px) {
    padding: 0;
  }

  form {
    width: 100%;
    max-width: 1170px;
    margin: 0 auto;
    box-shadow: 0 3px 16px rgba(0, 0, 0, 0.16);
    border-radius: 20px;
    background: #fff;
    padding: 20px 60px 60px;

    input {
      max-width: 100%;
    }

    .input__100 {
      min-width: 100%;
    }

    .input__50 {
      min-width: 50%;

      @media screen and (max-width: 765px) {
        min-width: 100%;
      }
    }

    & .input__50:nth-of-type(even) {
      min-width: calc(50% - 50px);
      margin-left: 50px;

      @media screen and (max-width: 765px) {
        min-width: 100%;
        margin-left: 0;
      }
    }
  }
`;

export const Title = styled.h1`
  color: #464646;
  font-weight: 300;
  font-size: 42px;
  margin: 40px 0;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;

  input {
    width: 100%;
    max-width: 260px !important;
    height: 45px;

    border-radius: 150px;
    box-shadow: 0 3px 16px rgba(0, 0, 0, 0.16);
    border: 0;
    margin: 12px 0;
    padding: 4px 22px;
  }

  p {
    margin-left: 22px;
    color: #464646;
    a {
      font-weight: bold;
      color: inherit;
      margin-left: 4px;
    }
  }
`;

export const ErrorMessage = styled.span`
  color: #ff2626;
  display: block;
  font-size: 14px !important;

  margin: 0 0 12px 12px;
`;

export const ButtonsWrapper = styled.div`
  margin: 60px;

  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 765px) {
    flex-direction: column-reverse;
    button {
      margin-left: 0 !important;
      margin-bottom: 22px;
    }
  }

  button {
    margin-left: 22px;
    width: 180px;
    border-radius: 50px;
    border: 0;
    height: 50px;
    padding: 12px 22px;

    font-weight: bold;
    font-size: 22px;

    text-align: center;
    color: #464646;

    background-color: #fed308;
    transition: background-color 0.3s;

    &:hover {
      background-color: ${darken(0.03, '#fed308')};
    }
  }

  a {
    font-weight: bold;
    font-size: 22px;
    color: #464646;

    transition: color 0.3s;

    &:hover {
      color: #fed308;
    }
  }
`;
