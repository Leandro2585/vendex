import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 50px;
  img {
    border: 1px solid #dcdcdc;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 20px;
    max-height: 210px;
    width: 100%;
  }
  .badge {
    margin-bottom: 0;
  }
  small {
    margin-top: 0;
    line-height: 15px;
    display: block;
  }
  button {
    position: absolute;
    width: 35px;
    height: 35px;
    font-size: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -50px;
    right: 20px;    
  }
`;
