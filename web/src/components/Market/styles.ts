import styled, { css } from 'styled-components';

interface ListItemProps {
  isActive: boolean;
}

export const ListItem = styled.li<ListItemProps>`
  ${props => props.isActive && css`
      cursor:pointer;
      border-bottom: 3px solid var(--primary);
      transition: 0.2s;
      background-color: #f6f5f5;
  `}
  &:hover {
    cursor:pointer;
    border-bottom: 3px solid var(--primary);
    transition: 0.2s;
    background-color: #f6f5f5;
  }
  list-style: none;
  padding: 7px;
  margin-right: 20px;
  border-radius: 5px;
  border-bottom: 3px solid transparent;
  transition: 0.2s;
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
