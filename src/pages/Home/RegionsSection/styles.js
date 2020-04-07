import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  padding: 60px 0;

  @media screen and (max-width: 1249px) {
    padding: 60px 32px;
  }

  @media screen and (max-width: 765px) {
    padding: 30px 32px;
  }

  background: #f4f4f4;
`;

export const RegionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TextSection = styled.div`
  flex: 1 1 50%;

  h1 {
    font-weight: 400;
    font-size: 42px;
    color: #707070;
    margin: 22px 0;

    strong {
      font-weight: bold;
    }
  }

  p {
    color: #707070;
    font-size: 18px;
    max-width: 500px;
    line-height: 1.5;
  }

  @media screen and (max-width: 765px) {
    h1 {
      font-size: 32px;
    }

    p {
      font-size: 16px;
    }
  }
`;

export const ImageWrapper = styled.div`
  flex: 1 1 50%;

  img {
    max-width: 100%;
  }
`;
