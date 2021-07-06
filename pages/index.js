import { useState } from "react"
import Navbar1 from "../components/Navbar/Navbar1"
import Overlay from "../components/HeroBanner/Overlay"
import SendMessageModal from "../components/SendMessageModal/SendMessageModal"
import TradingModalHolder from '../components/TradingModal/TradingModalHolder'
import HeroBanner1 from '../components/HeroBanner/HeroBanner1'
import TableSection from "../components/Table/TableSection"
import Footer1 from "../components/Footer/Footer1"

export default function Home() {
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
    <>
      <Navbar1
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
      <HeroBanner1 showSendMessageModal={showSendMessageModal} />
      <TableSection handleClickTrading={handleClickTrading} />
      <Footer1 />
    </>
  )
}
