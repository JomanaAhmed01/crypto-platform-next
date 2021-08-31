import { useState } from "react"
import Navbar from "../components/Navbar/Navbar"
import Overlay from "../components/HeroBanner/Overlay"
import SendMessageModal from "../components/SendMessageModal/SendMessageModal"
import TradingModalHolder from '../components/TradingModal/TradingModalHolder'
import HeroBanner from '../components/HeroBanner/HeroBanner'
import TableSection from "../components/Table/TableSection"
import Footer from "../components/Footer/Footer"

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
      <Navbar
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
      <HeroBanner showSendMessageModal={showSendMessageModal} />
      <TableSection handleClickTrading={handleClickTrading} />
      <Footer />
    </>
  )
}
