import React, { useState } from "react"
import styled from "styled-components"
import Button from "@material-ui/core/Button"
import { Close } from "@styled-icons/evaicons-solid/Close"
import { Envelope } from "@styled-icons/fa-regular/"
import { Search } from "@styled-icons/evil/Search"

function Navbar4({ handleClickModal, showSendMessageModal }) {
  const [showSearchInput, setShowSearchInput] = useState(false)

  function handleClick() {
    if (showSearchInput === true) {
      setShowSearchInput(false)
    } else if (showSearchInput === false) {
      setShowSearchInput(true)
    }
  }

  return (
    <>
      <Wrapper
        hideNavbar={showSendMessageModal}
        showSearchInput={showSearchInput}
      >
        <LogoWrapper>
          <Logo src="img/slack-logo.jpg"></Logo>
        </LogoWrapper>
        <EnvelopeIcon onClick={handleClickModal} />
        <ButtonWrapper>
          <SignUpButton variant="contained" onClick={handleClickModal}>
            Contact
          </SignUpButton>{" "}
        </ButtonWrapper>
        {showSearchInput ? (
          <SearchInputWrapper>
            <SearchInput placeholder="Search here..." />
          </SearchInputWrapper>
        ) : null}
        <SearchIconWrapper onClick={handleClick}>
          <SearchIcon />
        </SearchIconWrapper>
      </Wrapper>
    </>
  )
}

/*---> Styles <---*/
export const Wrapper = styled.div`
  border: 1px solid black;
  width: ${(props) => (props.showSearchInput === true ? "420px" : "320px")};
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
`

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 20%;
  }
`

export const Logo = styled.img`
  width: 40px;
`

export const ButtonWrapper = styled.div`
  margin-left: 10px;
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
export const EnvelopeIcon = styled(Envelope)`
  display: none;
  width: 30px;
  height: 30px;

  @media screen and (max-width: 768px) {
    display: initial;
  }
`

export const CloseIcon = styled(Close)`
  width: 30px;
  height: 30px;

  @media screen and (max-width: 768px) {
  }
`

export const SearchInputWrapper = styled.div`
  margin-left: 10px;
  @media screen and (max-width: 768px) {
  }
`

export const SearchInput = styled.input`
  width: 100%;
  height: 48px;
  font-size: 14px;
  background-color: white;
  color: black;
  font-family: "Graphik";
  padding-left: 10px;
  user-select: initial !important;
  border: 1px solid #ffffff;
  border-radius: 30px;

  :focus {
    outline: none;
    border: 1px solid #cccccc;
  }

  :hover {
    background-color: #e6e6e6;
  }

  @media screen and (max-width: 768px) {
  }
`

export const SearchIconWrapper = styled.div`
  @media screen and (max-width: 768px) {
  }
`

export const SearchIcon = styled(Search)`
  width: 40px;
  height: 40px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
  }
`
export default Navbar4
