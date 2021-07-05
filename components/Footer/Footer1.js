import React from "react"
import styled from "styled-components"

function Footer1() {
  return (
    <Wrapper>
      <Title>Website Name &#169;2021</Title>
    </Wrapper>
  )
}

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 40px;
  background-color: white;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`

export const Title = styled.p`
  font-weight: 400;
`

export default Footer1