import React, { useEffect } from "react";
import styled from "styled-components";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

function Section({ ImageSrc, title, description, LeftBtnText, RightBtnText }) {
  return (
    <Wrap ImageSrc={ImageSrc}>
      <Fade bottom>
        <UpperText>
          <h1>{title}</h1>
          <p>{description}</p>
        </UpperText>
      </Fade>
      <Zoom>
        <Buttons>
          <BtnsGroup>
            <LeftButton>{LeftBtnText}</LeftButton>
            {RightBtnText && <RightButton>{RightBtnText}</RightButton>}
          </BtnsGroup>
          <DownArrow src="/images/down-arrow.svg"></DownArrow>
        </Buttons>
      </Zoom>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: 100vw;
  background-image: ${(props) => `url("/images/${props.ImageSrc}")`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
const UpperText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;
const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const BtnsGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;

  @media (max-width: 760px) {
    align-items: center;
    flex-direction: column;
  }
`;
const LeftButton = styled.div`
  width: 256px;
  height: 40px;
  background: rgba(23, 26, 32, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  color: white;
  opacity: 0.85;
  text-transform: uppercase;
  cursor: pointer;
`;
const RightButton = styled(LeftButton)`
  background: white;
  color: black;
  margin: 0 10px;
  @media (max-width: 760px) {
    margin: 10px 0;
  }
`;
const DownArrow = styled.img`
  height: 40px;
  margin: 20px;
  animation: animateDown infinite 1.5s;
`;
export default Section;
