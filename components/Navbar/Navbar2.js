import React from "react"
import styled from "styled-components"
import Button from "@material-ui/core/Button"
import { Envelope } from "@styled-icons/boxicons-regular/Envelope"

function Navbar2({ handleClickModal }) {
  return (
    <Wrapper>
      <Logo src="img/slack-logo.jpg"></Logo>
      <EnvelopeIcon onClick={handleClickModal} />
      <ButtonWrapper>
        <SignUpButton variant="contained" onClick={handleClickModal}>
          Contact
        </SignUpButton>{" "}
      </ButtonWrapper>
    </Wrapper>
  )
}

/*---> Styles <---*/
export const EnvelopeIcon = styled(Envelope)`
  width: 30px;
  height: 30px;
  display: none;

  @media screen and (max-width: 768px) {
    display: initial;
  }
`

export const Wrapper = styled.div`
  border: 1px solid black;
  width: 250px;
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
  box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.05);

  @media screen and (max-width: 1325px) {
    width: 95%;
  }
`

export const Logo = styled.img`
  width: 40px;
`

export const ButtonWrapper = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const SignUpButton = styled(Button)`
  background-image: linear-gradient(to bottom, #18283b, #1a1f24 100%);
  color: #ffffff !important;
  text-transform: capitalize !important;
  width: 130px !important;
  height: 48px !important;
  font-size: 16px !important;
  font-weight: 400 !important;
  font-family: "Graphik" !important;
  border-radius: 50px !important;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1) !important;
  transition: all 0.2s !important;
`

export default Navbar2