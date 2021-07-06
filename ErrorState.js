import React from "react"
import styled from "styled-components"
import { Error } from "@styled-icons/boxicons-regular/Error"

function ErrorState() {
  return (
    <>
      <Wrapper>
        <ErrorWrapper>
          <ErrorIcon />
        </ErrorWrapper>
      </Wrapper>
    </>
  )
}

/*---> Styles <---*/
export const Wrapper = styled.table`
  margin-left: auto;
  margin-right: auto;
`

export const ErrorWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
`

export const ErrorIcon = styled(Error)`
  width: 100px;
  height: 100px;
  color: #ff3333;
`

export default ErrorState