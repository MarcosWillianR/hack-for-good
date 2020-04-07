import styled from 'styled-components';
import { darken } from 'polished';
import { Form } from '@unform/web';

export const ContactSection = styled.div`
  width: 100%;
  padding: 60px 0;
  background: #fed308;
  text-align: center;

  @media screen and (max-width: 1249px) {
    padding: 60px 32px;
  }

  h1 {
    color: #fff;
    font-size: 42px;
    margin-bottom: 42px;
  }

  button[type='submit'] {
    margin-top: 52px;
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

    background-color: #fff;
    transition: background-color 0.3s;

    &:hover {
      background-color: ${darken(0.03, '#fff')};
    }
  }

  @media screen and (max-width: 765px) {
    h1,
    button[type='submit'] {
      margin-top: 22px;
    }

    padding: 30px 0;

    h1 {
      font-size: 32px;
    }
  }
`;

export const FormComponent = styled(Form)`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  display: flex;

  @media screen and (max-width: 765px) {
    flex-direction: column;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  align-self: flex-end;
  position: relative;
  margin: 0 22px;

  @media screen and (max-width: 765px) {
    margin: 0;
  }
`;

export const Footer = styled.div`
  width: 100%;
  background: #707070;
`;

export const FooterWrapper = styled.div`
  padding: 32px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 1249px) {
    padding: 32px;
  }

  h2 {
    font-size: 32px;
    font-weight: 400;
    color: #fed308;
  }

  @media screen and (max-width: 765px) {
    flex-direction: column;
    h2 {
      margin-bottom: 22px;
      font-size: 22px;
    }
  }
`;

export const HelpWrapper = styled.div`
  a {
    margin-left: 82px;
    color: #fff;

    transition: color 0.2s;
    &:hover {
      color: #fed308;
    }
  }

  @media screen and (max-width: 765px) {
    a {
      margin-left: 0;
    }

    a:nth-child(2) {
      margin: 0 12px;
    }
  }
`;
