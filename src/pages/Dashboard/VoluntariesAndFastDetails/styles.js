import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  width: calc(100% - 32px);
  margin: 22px 22px 22px 0;

  display: flex;
`;

export const VoluntariesContainer = styled.div`
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

export const FastDetailsContainer = styled.div`
  flex: 1;
  box-shadow: 0 3px 16px rgba(0, 0, 0, 0.16);
  margin-left: 22px;
  padding: 22px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    color: #4d4f5c;
    border-bottom: 1px solid #eee;
    padding: 16px 0;
    margin: 16px 0;
  }
`;

export const FastDetailsIcon = styled.div`
  background: ${(props) => lighten(0.2, props.color)};
  width: 34px;
  height: 34px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FastDetailsContent = styled.div`
  width: 100%;
  li {
    display: flex;
    align-items: center;

    strong {
      flex: 1;
      text-align: center;
      font-weight: 400;
    }
  }

  li + li {
    padding: 16px 0;
    margin: 16px 0;
    border-top: 1px solid #eee;
  }
`;

export const VoluntaryType = styled.div`
  span {
    background: ${(props) => props.color};
    border-radius: 20px;
    padding: 6px 12px;
    line-height: 1.5;
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
