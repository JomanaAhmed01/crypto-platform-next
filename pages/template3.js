import { useState } from "react"
import Navbar3 from "../components/Navbar/Navbar3"
import Overlay from "../components/HeroBanner/Overlay"
import SendMessageModal3 from "../components/SendMessageModal/SendMessageModal3"
import TradingModalHolder from '../components/TradingModal/TradingModalHolder'
import HeroBanner3 from "../components/HeroBanner/HeroBanner3"
import TableSection from "../components/Table/TableSection"
import Footer3 from "../components/Footer/Footer3"

export default function template3() {
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
      <Navbar3 handleClickModal={handleClickModal} />
      {showSendMessageModal ? (
        <Overlay>
          <SendMessageModal3 handleCloseModal={handleCloseModal} />
        </Overlay>
      ) : null}
      {showTradingModal ? (
        <Overlay>
          <TradingModalHolder handleCloseTrading={handleCloseTrading} />
        </Overlay>
      ) : null}
      <HeroBanner3 showSendMessageModal={showSendMessageModal} />
      <TableSection handleClickTrading={handleClickTrading} />
      <Footer3 />
    </>
  )
}