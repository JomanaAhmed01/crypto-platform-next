import React from "react"
import styled from "styled-components"
import MobileTable from "./MobileTable"
import DesktopTable from "./DesktopTable"

function TableSection({ handleClickTrading }) {
  return (
    <Wrapper>
      <DesktopTableWrapper>
        <DesktopTable handleClickTrading={handleClickTrading} />
      </DesktopTableWrapper>
      <MobileTableWrapper>
        <MobileTable handleClickTrading={handleClickTrading} />
      </MobileTableWrapper>
    </Wrapper>
  )
}

/*---> Styles <---*/
export const Wrapper = styled.div`
  background-color: #ffffff;
  padding-top: 40px;
  padding-bottom: 40px;
`

export const DesktopTableWrapper = styled.div`
  @media screen and (max-width: 1024px) {
    display: none;
  }
`

export const MobileTableWrapper = styled.div`
  display: none;

  @media screen and (max-width: 1024px) {
    display: initial;
  }
`

export default TableSection