import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-height: 400px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  background: #000;

  position: relative;
`;

export const RegisterBackground = styled.div`
  background: #f4f4f4;
  width: 50%;
  height: 100%;
`;

export const SusInformationBackground = styled.div`
  background: #fff;
  width: 50%;
  height: 100%;
`;

export const SectionContentWrapper = styled.div`
  position: absolute;
  height: 100%;
  max-width: 1170px;

  @media screen and (max-width: 1249px) {
    padding: 0 32px;
  }

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 50%;
  max-width: 50%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RegisterContent = styled.div`
  @media screen and (min-width: 1250px) {
    padding: 0 84px 0 0;
  }

  h1 {
    font-weight: 400;
    font-size: 42px;
    margin: 22px 0;
    color: #464646;

    strong {
      font-weight: bold;
    }
  }

  p {
    font-size: 21px;
    opacity: 0.6;
  }

  a {
    display: block;
    width: 100%;
    max-width: 180px;
    border-radius: 50px;
    border: 0;
    height: 50px;
    padding: 12px 22px;

    font-weight: bold;
    font-size: 22px;

    text-align: center;
    margin-top: 32px;
    color: #464646;

    background-color: #fed308;
    transition: background-color 0.3s;

    &:hover {
      background-color: ${darken(0.03, '#fed308')};
    }
  }
`;

export const SusInformationContent = styled.div`
  width: 100%;
  align-self: flex-start;
  margin-top: 42px;

  @media screen and (min-width: 1250px) {
    padding: 0 42px 0 42px;
  }

  padding-left: 42px;

  h2 {
    margin-bottom: 22px;
    font-weight: 400;
    font-size: 32px;
  }

  overflow: auto;
  max-height: 357px;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #ffffff;
    border-radius: 20px;
  }

  &::-webkit-scrollbar-thumb {
    background: #dbdbdb;
    border-radius: 20px;
  }

  ul {
    li {
      strong {
        display: block;
        margin-bottom: 12px;
      }

      p {
        margin-bottom: 22px;
        max-width: 400px;
      }

      margin-bottom: 22px;
      margin-right: 22px;
      border-bottom: 1px solid #ccc;
    }
  }
`;
