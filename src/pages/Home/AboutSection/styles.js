import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-weight: bold;
    font-size: 42px;
    color: #4d4d4d;
  }

  ul {
    margin: 32px 0;
    width: 100%;
    display: flex;
    justify-content: space-between;

    li {
      padding: 0 22px;
      text-align: center;
      img {
        width: 100px;
        height: 100px;
        border-radius: 50px;
        background: #ccc;
        margin-bottom: 22px;
      }

      h2 {
        text-align: center;
        font-size: 18px;
        margin: 10px 0;
        color: #4d4d4d;
      }

      p {
        max-width: 320px;
        font-size: 14px;
        line-height: 1.5;
        text-align: center;
      }
    }
  }

  a {
    display: block;
    margin-top: 22px;

    width: 100%;
    max-width: 180px;
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
`;
