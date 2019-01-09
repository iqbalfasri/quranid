import React from "react";
import styled from "styled-components";

const Hero = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 500px;
  background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
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
