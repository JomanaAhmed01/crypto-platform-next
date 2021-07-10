import React from "react"
import styled from "styled-components"

function HeroBanner2({ showSendMessageModal }) {
  return (
    <>
      <Wrapper showSendMessageModal={showSendMessageModal}>
        <TextWrapper>
          <Title>Welcome to Ahmed's exchange</Title>
          <SubTitle>Buy, sell and trade cryptocurrency in minutes.</SubTitle>
          <SecondSubTitle>Start Trading</SecondSubTitle>
        </TextWrapper>
        <ImageWrapper>
          <Image src="/img/template2-image.png" />
        </ImageWrapper>
      </Wrapper>
    </>
  )
}

/*---> Styles <---*/
export const Wrapper = styled.div`
  margin-top: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const TextWrapper = styled.div`
  margin-top: -100px;
`

export const Title = styled.p`
  font-family: "Boing";
  font-size: 50px;
  color: linear-gradient(to bottom, #18283b, #1a1f24 100%);
  color: #011b33;
  text-align: left;
  margin-left: 150px;

  @media screen and (max-width: 1024px) {
    width: 60%;
    margin-left: 70px;
  }

  @media screen and (max-width: 480px) {
    width: 90%;
  }
`

export const SubTitle = styled.p`
  font-family: "Graphik";
  font-weight: 400;
  color: linear-gradient(to bottom, #18283b, #1a1f24 100%);
  text-align: center;
  width: 450px;
  font-size: 19px;
  color: #011b33;
  text-align: left;
  margin-top: 20px;
  margin-left: 150px;

  @media screen and (max-width: 1024px) {
    margin-left: 70px;
  }

  @media screen and (max-width: 768px) {
    font-size: 17px;
    width: 80%;
    margin-left: 70px;
  }
`

export const SecondSubTitle = styled.p`
  font-family: "Graphik";
  font-weight: 500;
  color: linear-gradient(to bottom, #18283b, #1a1f24 100%);
  text-align: center;
  width: 450px;
  font-size: 15px;
  color: #011b33;
  width: 40%;
  text-align: left;
  margin-left: 150px;

  @media screen and (max-width: 1024px) {
    margin-left: 70px;
  }

  @media screen and (max-width: 768px) {
    font-size: 17px;
    width: 80%;
    margin-left: 70px;
  }
`

export const ImageWrapper = styled.div`
  margin-top: -100px;
  margin-left: 60px;

  @media screen and (max-width: 1600px) {
    margin-left: 10px;
    margin-right: 130px;
  }
`

export const Image = styled.img`
  max-width: 650px;

  @media screen and (max-width: 1600px) {
    width: 100%;
  }

  @media screen and (max-width: 1024px) {
    display: none;
  }
`

export default HeroBanner2