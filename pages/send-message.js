import React from "react"
import styled from "styled-components"
import Button from "@material-ui/core/Button"
import { CloseOutline } from "@styled-icons/evaicons-outline/CloseOutline"
import Link from "next/link"

function sendmessage() {
  return (
    <PageWrapper>
      <Wrapper>
        <Link href="/template2">
          <IconWrapper>
            <CloseIcon />
          </IconWrapper>
        </Link>
        <ContactWrapper>
          <Image src="/img/kota.jpg" />

          <TextWrapper>
            <Title>Sending Message To</Title>
            <SubTitle>Ahmed Tohamy</SubTitle>
          </TextWrapper>
        </ContactWrapper>
        <InputWrapper>
          <Label>Email</Label>
          <Input></Input>
        </InputWrapper>
        <InputWrapper>
          <Label>Subject</Label>
          <Input></Input>
        </InputWrapper>
        <InputWrapper>
          <Label>Message</Label>
          <TextArea rows="3" cols="50"></TextArea>
        </InputWrapper>
        <Link href="/template2">
          <ButtonWrapper>
            <SendButton variant="contained">Send</SendButton>{" "}
          </ButtonWrapper>
        </Link>
      </Wrapper>
    </PageWrapper>
  )
}

/*---> Styles <---*/
export const PageWrapper = styled.div`
  background-color: #ffffff;
  width: 100%;

  @media screen and (max-width: 1325px) {
  }
`

export const Wrapper = styled.div`
  width: 400px;
  min-height: 100vh;
  border-radius: 4px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  padding-bottom: 30px;
  padding-top: 30px;
  background-color: #ffffff;

  @media screen and (max-width: 768px) {
    width: 95%;
  }
`

export const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 20px;

  @media screen and (max-width: 1325px) {
  }
`

export const IconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  @media screen and (max-width: 1325px) {
  }
`

export const CloseIcon = styled(CloseOutline)`
  width: 25px;
  height: 25px;
  opacity: 60%;
  cursor: pointer;

  @media screen and (max-width: 1325px) {
  }
`

export const TextWrapper = styled.div`
  padding: 6px 12px;

  @media screen and (max-width: 1325px) {
  }
`

export const Image = styled.img`
  width: 65px;
  height: 65px;
  border-radius: 50%;

  @media screen and (max-width: 1325px) {
  }
`

export const Title = styled.p`
  color: #454545;
  font-family: "Graphik";
  font-weight: 500;
  font-size: 13.5px;

  @media screen and (max-width: 1325px) {
  }
`

export const SubTitle = styled.p`
  font-family: "Graphik";
  font-weight: 500;
  font-size: 20px;
  padding-top: 5px;

  @media screen and (max-width: 1325px) {
  }
`

export const InputWrapper = styled.div`
  padding: 6px 0px;

  @media screen and (max-width: 1325px) {
  }
`

export const Label = styled.label`
  display: block;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: -0.25px;
  margin-bottom: 5px;
  margin-top: 5px;

  @media screen and (max-width: 1325px) {
  }
`

export const Input = styled.input`
  width: 100%;
  height: 50px;
  font-size: 16px;
  font-weight: 500;
  background-color: white;
  color: black;
  font-family: "Graphik";
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding-left: 10px;
  user-select: initial !important;

  @media screen and (max-width: 1325px) {
  }
`

export const TextArea = styled.textarea`
  width: 100%;
  max-width: 100%;
  min-width: 100%;
  height: 150px;
  max-height: 150px;
  min-height: 150px;
  padding: 10px;
  font-size: 16px;
  font-weight: 500;
  font-family: "Graphik";
  background-color: white;
  color: black;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding-left: 10px;
  user-select: initial !important;

  @media screen and (max-width: 1325px) {
  }
`

export const ButtonWrapper = styled.div`
  margin-bottom: 15px;
  margin-top: 25px;
`

export const SendButton = styled(Button)`
  background-image: linear-gradient(to bottom, #18283b, #1a1f24 100%);
  color: #ffffff !important;
  text-transform: capitalize !important;
  width: 100% !important;
  height: 50px !important;
  font-size: 16px !important;
  font-weight: 400 !important;
  font-family: "Graphik" !important;
  border-radius: 4px !important;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1) !important;
  transition: all 0.2s !important;
`

export default sendmessage