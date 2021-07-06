import React from "react"
import styled from "styled-components"
import { GraphUp } from "@styled-icons/bootstrap/GraphUp"

function EmptyState() {
  return (
    <>
      <Wrapper>
        <GraphArrowWrapper>
          <GraphArrow />
        </GraphArrowWrapper>
      </Wrapper>
    </>
  )
}

/*---> Styles <---*/
export const Wrapper = styled.div`
  
`

export const GraphArrowWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
`

export const GraphArrow = styled(GraphUp)`
  width: 150px;
  height: 150px;
  color: #d8d8d8;
`

export default EmptyState