import styled, { css } from 'styled-components';

interface SidebarProps {
  isVisible: boolean
}

export const Container = styled.div<SidebarProps>`
  width: 30%;
  background: white;
  z-index: 20;
  right: 0%;
  animation: open 0.2s ease;
  span {
    position: absolute;
    color: var(--primary);
    padding: 8px;
    top: 15px;
    left: 15px;
    border-radius: 5px;
  }
  h5 {
    margin-left: 20%;
    margin-bottom: 0;
    height: 35px;
  }
  ${(props) => props.isVisible === true ?
    css`
      position: absolute;
    `:
    css`
      display: none;
      animation-play-state: inherit;
    `
  }

  @keyframes open {
  from { right: -30%; }
  to { right: 0; }
  }

  .footer {
    height: 120px;
    background-color: #f6f5f5;
  }

  .products {
    height: calc(100% - 155px);
    overflow: auto;
    align-content: flex-start;
  }
`;
export const Background = styled.div`
  position:absolute;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.1);
  z-index: 2;
  animation: opac 0.2s;
  @keyframes opac {
  from { opacity: 0; }
  to { opacity: 1; }
  }
`;
