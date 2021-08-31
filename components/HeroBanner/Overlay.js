import React from "react"
import styled from "styled-components"

function Overlay({ children }) {
  return (
    <>
      <Wrapper>{children}</Wrapper>
    </>
  )
}

/*---> Styles <---*/
export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.65);
  z-index: 100;

  @media screen and (max-width: 1024px) {
  }
`

export default Overlay
