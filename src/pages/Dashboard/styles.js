import styled from 'styled-components';

export const Container = styled.div`
  width: calc(100% - 350px);
  margin: 100px 0 0 350px;
`;

export const OverViewContainer = styled.div`
  width: 100%;
  padding-right: 32px;
  margin: 22px 0;

  h1 {
    margin-bottom: 32px;
    font-weight: 400;
    color: #464646;
  }
`;

export const BoxWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  div {
    width: 100%;
    min-width: 320px;
    max-width: 400px;
    height: 120px;
    background: #fff;
    box-shadow: 0 3px 16px rgba(0, 0, 0, 0.16);

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    &:nth-child(even) {
      margin: 0 22px;
    }

    p {
      color: #464646;
    }

    strong {
      margin-top: 12px;
      font-size: 32px;
    }
  }
`;

export const StatisticsContainer = styled.div`
  width: calc(100% - 32px);
  margin: 22px 22px 22px 0;
  box-shadow: 0 3px 16px rgba(0, 0, 0, 0.16);
  padding-right: 32px;

  img {
    max-width: 100%;
  }
`;

export const HospitalAndRegionContainer = styled.div`
  width: calc(100% - 32px);
  margin: 22px 22px 22px 0;

  display: flex;
`;

export const HospitalContainer = styled.div`
  box-shadow: 0 3px 16px rgba(0, 0, 0, 0.16);
  flex: 2;
  padding: 22px;

  background: #fff;
  display: grid;
  grid-template-columns: repeat(4, minmax(50px, 1fr));

  strong {
    font-size: 16px;
    font-weight: bold;
    color: #444;
    text-transform: uppercase;
  }
`;

export const ItensDesc = styled.div`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(4, minmax(50px, 1fr));

  border-bottom: 1px solid #eee;
  padding-bottom: 20px;
  margin-top: 20px;

  span {
    font-size: 16px;
    color: #666;
  }
`;

export const RegionContainer = styled.div`
  flex: 1;
  box-shadow: 0 3px 16px rgba(0, 0, 0, 0.16);
  margin-left: 22px;
  padding: 22px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    max-width: 100%;
    margin: 32px 0;
  }
`;

export const TopContent = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    font-size: 16px;
    color: #666;
    max-width: 200px;
  }

  a {
    margin-left: 42px;
    color: #3b86ff;
  }
`;

export const BottomContent = styled.div`
  margin: 12px 0;

  li {
    margin-bottom: 8px;

    strong {
      display: flex;
      align-items: center;
    }

    span {
      display: inline-block;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      border: 3px solid #cbbc13;
      margin-right: 8px;
      margin-top: 2px;
    }

    display: flex;
    justify-content: space-between;
    align-items: center;

    color: #666;
  }
`;

export const VoluntaryType = styled.p``;
