import React from "react";
import styled from "styled-components";

const Hero = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 300px;
  background-color: #f2f2f2;
  background-size: 28px 28px;
  background-image: radial-gradient(circle, #b9e6d3, #b9e6d3 1px, #7ed3b2 1px, #7ed3b2);
  text-align: center;
  position: relative;
`;

const HeroContent = styled.div`
  min-width: 40vw;
  overflow: hidden;
`;

export const HeroBackButton = styled.a`
  position: absolute;
  background-color: white;
  width: 40px;
  height: 40px;
  border-radius: 30px;
  left: 40vw;
`;

export default props => {
  return (
    <Hero>
      <HeroContent>
        {props.children}
      </HeroContent>
    </Hero>
  );
};
