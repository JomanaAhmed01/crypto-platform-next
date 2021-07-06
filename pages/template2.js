import { useState } from "react"
import styled from "styled-components"
import Navbar2 from "../components/Navbar/Navbar2"
import Overlay from "../components/HeroBanner/Overlay"
import SendMessageModal from "../components/SendMessageModal/SendMessageModal"
import TradingModalHolder from "../components/TradingModal/TradingModalHolder"
import HeroBanner2 from '../components/HeroBanner/HeroBanner2'
import TableSection from "../components/Table/TableSection"
import Footer2 from "../components/Footer/Footer2"

export default function template2() {
  const [showSendMessageModal, setShowSendMessageModal] = useState(false)
  const [showTradingModal, setShowTradingModal] = useState(false)

  function handleClickModal() {
    setShowSendMessageModal(true)
  }

  function handleCloseModal() {
    setShowSendMessageModal(false)
  }

  function handleClickTrading() {
    setShowTradingModal(true)
  }

  function handleCloseTrading() {
    setShowTradingModal(false)
  }

  return (
    <PageWrapper>
      <Navbar2
        handleClickModal={handleClickModal}
        showSendMessageModal={showSendMessageModal}
      />
      {showSendMessageModal ? (
        <Overlay>
          <SendMessageModal handleCloseModal={handleCloseModal} />
        </Overlay>
      ) : null}
      {showTradingModal ? (
        <Overlay>
          <TradingModalHolder handleCloseTrading={handleCloseTrading} />
        </Overlay>
      ) : null}
      <HeroBanner2 />
      <TableSection handleClickTrading={handleClickTrading} />
      <Footer2 />
    </PageWrapper>
  )
}

export const PageWrapper = styled.div`
  background-color: #ffffff;
`