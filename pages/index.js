import { useState } from "react"
import Navbar1 from "../components/Navbar/Navbar1"
import Footer1 from "../components/Footer/Footer1"
import HeroBanner1 from '../components/HeroBanner/HeroBanner1'
import DesktopTable from '../components/Table/DesktopTable'

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
      <HeroBanner1 showSendMessageModal={showSendMessageModal} />
      <DesktopTable />
      <Footer1 />
    </>
  )
}
