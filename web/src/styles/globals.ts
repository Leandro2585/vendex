import { createGlobalStyle } from 'styled-components';
export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');

:root {
  --primary: #2CB774 !important;
  --badge-primary: 44, 183, 116;
  --badge-secondary: 10, 62, 100;
  --secondary: #0A3E64;
  --bg: #E1E6E1;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html, body {
  overflow-x: hidden;
  background: var(--bg);
  font: 400 16px 'Open Sans', sans-serif;
}
#__next {
  height: 100vh;
}
.bg-primary {
  background: var(--primary) !important;
}
.box {
  background: #fff;
  box-shadow: 0 0 11px 6px rgba(0,0,0,0.08);
  border-radius: 5px;
  display: inline-block;
  padding: 50px;
}
input[type="text"],
input[type="email"],
input[type="tel"],
input[type="date"] {
  font-size: 16px;
}

input[type="text"],
input[type="email"],
input[type="tel"],
input[type="date"],
input[type="text"]:disabled,
input[type="email"]:disabled,
input[type="tel"]:disabled,
input[type="date"]:disabled {
  background: #DDD;
  border: 0.5px solid #dcdcdc;
  outline: none;
  color: #626264;
}
.btn {
  font-size: 16px;
}
.btn-primary {
  background-color: var(--primary) !important;
}
.btn-secondary {
  background-color: var(--secondary) !important;
}
.btn-secondary,
.btn-secondary:focus,
.btn-secondary:active,
.btn-secondary:disabled,
.btn-secondary:hover {
  background-color: var(--secondary) !important;
  border-color: var(--secondary) !important;
}
.btn-primary,
.btn-primary:focus,
.btn-primary:active,
.btn-primary:disabled,
.btn-primary:hover {
  background-color: var(--primary) !important;
  border-color: var(--primary) !important;
}
.section-title {
  border-bottom: 2px solid var(--primary);
  padding-bottom: 7px;
  margin: 20px 0;
  display: inline-block;
}
.box-sidebar {
  max-height: 500px;
  overflow-y: auto;
}
.market-infos {
  span {
    vertical-align: middle;
    color:#626264;
    &.mdi-star {
      color: #FACD5D;
    }
  }
  text {
    font-size: 12px;
    margin-right: 10px;
    vertical-align: middle;
    color: #626264;
  }
}
.market-image {
  border-radius: 5px;
  margin-bottom: 20px;
}
.badge {
  font-weight: lighter;
  &.badge-primary {
    background: rgba(var(--badge-primary), 0.2);
    color: rgb(var(--badge-primary));
  }
  &.badge-secondary {
    background: rgba(var(--badge-secondary), 0.2);
    color: rgb(var(--badge-secondary));
  }
}
.market-list-container {
  height: 300px;
  position: absolute;
  top: 91px;
  z-index: 10;
  left: 0;
  right: 0;
  margin-bottom: 0;
  background: linear-gradient(
    180deg,
    #ffffff 55.47%,
    rgba(255, 255, 255, 0) 100%
  );
}
.market-list {
  padding: 15px;
  white-space: nowrap;
  overflow-x: auto;
  width: 100%;
  margin-top: 15px;
}
`;
