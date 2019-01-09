import styled from "styled-components";

const Button = styled.a`
  border-radius: 25px;
  text-align: center;
  /* height: 30px; */
  padding: 14px 60px;
  font-weight: bold;
  font-size: 16px;
  line-height: 15px;
  /* letter-spacing: 1.54px; */
  /* text-transform: uppercase; */
  color: #fff !important;
  background-color: #7ed3b2;
  cursor: pointer;
  text-decoration: none !important;
  box-shadow: 10px 16px 40px 0 #b9e6d3;
  transition: .2s all ease-in-out !important;

  &:hover, &:focus, &:active {
    box-shadow: 5px 12px 20px 0 #b9e6d3;
  }
`;

export default Button;
