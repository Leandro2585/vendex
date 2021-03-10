import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 10px;
  .badge {
    margin-bottom: 0;
  }
  img {
    border: 2px solid #dcdcdc;
    border-radius: 5px;
    padding: 10px;
  }
  small {
    margin-top: 0;
    line-height: 16px;
    display: block;
  }
  button {
    position: absolute;
    right: 30px;
    width: 30px !important;
    height: 30px !important;
    top: calc(50% - 15px);
    padding: 1px 14px;
    font:25px;
  }
`;
