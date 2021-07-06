import React from "react"
import styled from "styled-components"

function LoadingButton() {
  return (
    <>
      <Wrapper>
        <LoadingButtonWrapper>
          <ButtonLoading variant="contained">Load</ButtonLoading>{" "}
        </LoadingButtonWrapper>
      </Wrapper>
    </>
  )
}

/*---> Styles <---*/
export const Wrapper = styled.table`
  margin-left: auto;
  margin-right: auto;
`

export const LoadingButtonWrapper = styled.div`
  text-align: center;
  padding: 20px;
`

export const ButtonLoading = styled.button`
  background-image: linear-gradient(to bottom, #18283b, #1a1f24 100%);
  color: #ffffff;
  width: 100px;
  height: 40px;
  font-size: 15px;
  font-weight: 400;
  font-family: "Graphik";
  border-radius: 4px;
  outline: none;
  border: none;
  cursor: pointer;
`

export default LoadingButton
