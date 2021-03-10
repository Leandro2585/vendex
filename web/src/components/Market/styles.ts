import styled from 'styled-components';

export const ListItem = styled.li`
  list-style: none;
  padding: 7px;
  margin-right: 20px;
  border-radius: 5px;
  border-bottom: 3px;
  img {
    width: 80px;
    border-radius: 5px;
    vertical-align: baseline;
  }
  b {
    margin-bottom: 0;
  }
  .market-infos {
    span {
      vertical-align: middle;
      color: #626264;
      &.mdi-star {
        color: #f1cd5d;
      }
    }
    text {
      font-size: 14px;
      margin-right: 10px;
      vertical-align: middle;
      color: #626264;
    }
  }
`;
