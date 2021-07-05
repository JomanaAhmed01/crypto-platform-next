import React from "react"
import styled from "styled-components"
import Button from "@material-ui/core/Button"

function Footer3() {
  return (
    <Wrapper>
      <Title>Website Name &#169;2021</Title>
    </Wrapper>
  )
}

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 40px;
  background-color: white;

  @media screen and (max-width: 1024px) {
    font-weight: 400;
  }
`

export const Title = styled.p`
  font-weight: bold;
  font-weight: 400;
`

export const SubTitle = styled.p`
  font-weight: bold;
  font-weight: 400;
`

export const SignUpButton = styled(Button)`
  background-image: linear-gradient(to bottom, #18283b, #1a1f24 100%);
  color: #ffffff !important;
  letter-spacing: 0.5px !important;
  text-transform: capitalize !important;
  font-size: 16px !important;
  width: 100px !important;
  height: 38px !important;
  border-radius: 10px !important;
`

export default Footer3