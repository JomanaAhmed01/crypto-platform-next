import React from "react"
import styled from "styled-components"
import Button from "@material-ui/core/Button"
import { Envelope } from "@styled-icons/boxicons-regular/Envelope"

function Navbar3({ handleClickModal, showSendMessageModal }) {
  return (
    <Wrapper hideNavbar={showSendMessageModal}>
      <Logo src="img/slack-logo.jpg"></Logo>
      <EnvelopeIcon onClick={handleClickModal} />
      <ButtonWrapper>
        <SignUpButton variant="contained" onClick={handleClickModal}>
          Contact
        </SignUpButton>{" "}
        <Avatar src="img/profile-photo.jpg"></Avatar>
      </ButtonWrapper>
    </Wrapper>
  )
}

/*---> Styles <---*/
export const Wrapper = styled.div`
  border: 1px solid black;
  width: 350px;
  padding: 15px 25px;
  border-radius: 50px;
  position: sticky;
  top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.05);

  @media screen and (max-width: 1325px) {
    width: 250px;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const Text = styled.p`
  margin-right: 5px;
  font-size: 13px;

  @media screen and (max-width: 575px) {
  }
`

export const Logo = styled.img`
  width: 40px;
`

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-left: 10px;
`

export const SignUpButton = styled(Button)`
  background-image: linear-gradient(to bottom, #18283b, #1a1f24 100%);
  color: #ffffff !important;
  text-transform: capitalize !important;
  width: 190px !important;
  height: 48px !important;
  font-size: 16px !important;
  font-weight: 400 !important;
  font-family: "Graphik" !important;
  border-radius: 50px !important;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1) !important;
  transition: all 0.2s !important;
`

export const EnvelopeIcon = styled(Envelope)`
  width: 30px;
  height: 30px;
  display: none;

  @media screen and (max-width: 768px) {
    display: initial;
  }
`

export default Navbar3