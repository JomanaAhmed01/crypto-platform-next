import React from "react"
import styled from "styled-components"

function HeroBanner1({ showSendMessageModal }) {
  return (
    <Wrapper showSendMessageModal={showSendMessageModal}>
      <Title>Welcome to Crypto exchange</Title>
      <SubTitle>Buy, sell and trade cryptocurrency in minutes.</SubTitle>
      <SecondSubTitle>Start Trading</SecondSubTitle>
    </Wrapper>
  )
}

/*---> Styles <---*/
export const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 1024px) {
    width: 90%;
  }
`

export const Title = styled.p`
  font-family: "Boing";
  font-size: 60px;
  color: linear-gradient(to bottom, #18283b, #1a1f24 100%);
  text-align: center;
  color: #011b33;

  @media screen and (max-width: 768px) {
    font-size: 50px;
  }

  @media screen and (max-width: 480px) {
    font-size: 30px;
  }
`

export const SubTitle = styled.p`
  font-family: "Graphik";
  font-weight: 400;
  color: linear-gradient(to bottom, #18283b, #1a1f24 100%);
  text-align: center;
  width: 450px;
  font-size: 23px;
  color: #011b33;

  @media screen and (max-width: 768px) {
    font-size: 17px;
    width: 80%;
  }
`

export const SecondSubTitle = styled.p`
  font-family: "Graphik";
  font-weight: 500;
  margin-bottom: 50px;
  color: linear-gradient(to bottom, #18283b, #1a1f24 100%);
  text-align: center;
  width: 450px;
  font-size: 26px;
  color: #011b33;

  @media screen and (max-width: 768px) {
    font-size: 17px;
    width: 80%;
  }
`

export default HeroBanner1