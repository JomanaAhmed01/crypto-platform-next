import React from "react"
import styled from "styled-components"

function Footer2() {
  return (
    <Wrapper>
      <Title>Website Name</Title>
      <SubTitle>&#169;2021</SubTitle>
    </Wrapper>
  )
}

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 40px;
  background-color: white;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`

export const Title = styled.p`
  font-weight: bold;
  font-weight: 400;
`

export const SubTitle = styled.p`
  font-weight: 400;
`

export default Footer2