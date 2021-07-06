import React from "react"
import styled from "styled-components"
import Button from "@material-ui/core/Button"
import { CloseOutline } from "@styled-icons/evaicons-outline/CloseOutline"

function SendMessageModal3({ handleCloseModal }) {
  return (
    <Wrapper>
      <IconWrapper>
        <CloseIcon onClick={handleCloseModal} />
      </IconWrapper>
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
        <TextArea rows="4" cols="50"></TextArea>
      </InputWrapper>

      <ButtonWrapper onClick={handleCloseModal}>
        <SendButton variant="contained">Send</SendButton>{" "}
      </ButtonWrapper>
    </Wrapper>
  )
}

/*---> Styles <---*/
export const Wrapper = styled.div`
  overflow-y: scroll;
  width: 35%;
  height: 100%;
  border-radius: 4px;
  margin-left: auto;
  padding: 20px;
  margin-bottom: 30px;
  background-color: #ffffff;
  box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.05);

  @media screen and (max-width: 768px) {
    width: 95%;
    margin-right: auto;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`

export const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 20px;

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
  font-family: "Graphik";
  background-color: white;
  color: black;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding-left: 10px;
  -webkit-user-select: initial !important;
  -khtml-user-select: initial !important;
  -moz-user-select: initial !important;
  -ms-user-select: initial !important;
  user-select: initial !important;

  @media screen and (max-width: 1325px) {
  }
`

export const TextArea = styled.textarea`
  width: 100%;
  max-width: 100%;
  min-width: 100%;
  height: 180px;
  max-height: 180px;
  min-height: 180px;
  padding: 10px;
  font-size: 16px;
  font-weight: 500;
  font-family: "Graphik";
  background-color: white;
  color: black;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding-left: 10px;
  -webkit-user-select: initial !important;
  -khtml-user-select: initial !important;
  -moz-user-select: initial !important;
  -ms-user-select: initial !important;
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

export default SendMessageModal3