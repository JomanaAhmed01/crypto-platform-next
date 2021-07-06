import React from "react"
import styled from "styled-components"
import Loader from "react-loader-spinner"

function LoadingState() {
  return (
    <>
      <Wrapper>
        <LoaderWrapper>
          <Loader
            type="ThreeDots"
            color="linear-gradient(to bottom,#18283b,#1a1f24 100%);"
            height={80}
            width={80}
          />
        </LoaderWrapper>
      </Wrapper>
    </>
  )
}

/*---> Styles <---*/
export const Wrapper = styled.table``

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
  position: relative;
  left: 470px;
`

export default LoadingState