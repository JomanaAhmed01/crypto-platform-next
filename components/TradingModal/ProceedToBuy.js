import React from "react"
import styled from "styled-components"
import { ArrowCircleLeftOutline } from "@styled-icons/evaicons-outline/ArrowCircleLeftOutline"
import { IosArrowLeft } from "@styled-icons/fluentui-system-filled/IosArrowLeft"

function ProceedToBuy({ handleCloseTrading, changeToBuy }) {
  return (
    <>
      <Wrapper>
        <DesktopVersion>
          <FirstPartOfTheSell>
            <WhatDoYouWant>
              <ArrowIcon onClick={changeToBuy} />
              <OrderDetails>Order Details</OrderDetails>
            </WhatDoYouWant>
          </FirstPartOfTheSell>

          <SecondPartOfSell>
            <DataWrapper>
              <BuyingAmountReceivingAddressWrapper>
                <ReferenceNumber>Reference Number</ReferenceNumber>
                <ReferenceNumberNumber>9U51622238198</ReferenceNumberNumber>
                <BuyingAmount>Buying Amount</BuyingAmount>
                <BuyingAmountNumberApproximatelyWrapper>
                  <BuyingAmountNumber>NGN 99999.99999999999</BuyingAmountNumber>
                  <Approximately>
                    Approximately{" "}
                    <ApproximatelySpan>
                      0.002780419581858399 BTC
                    </ApproximatelySpan>
                  </Approximately>
                </BuyingAmountNumberApproximatelyWrapper>
                <ReceivingAddress>Receiving Address</ReceivingAddress>
              </BuyingAmountReceivingAddressWrapper>

              <BuyingAmountRecevingAddressData>
                <ReceivingAddressCode>
                  bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh
                </ReceivingAddressCode>
              </BuyingAmountRecevingAddressData>
            </DataWrapper>
          </SecondPartOfSell>

          <ThirdPartOfTheSell>
            <ThirdPartHeaderTextWrapper>
              <ThirdPartHeader>Receiving Account Details</ThirdPartHeader>
              <ThirdPartText>
                Kindly make a Payment of your buying amount to the account
                details provided below. Your Cryptocurrency will be relesed into
                your receiving address only when payment has been successfuly
                verified.
              </ThirdPartText>
            </ThirdPartHeaderTextWrapper>

            <ProvidingDataWrapper>
              <ProvidingFirstRowWrapper>
                <AccountName>Account Name</AccountName>
                <AccountNameProviding>Wale Calfos</AccountNameProviding>
              </ProvidingFirstRowWrapper>
              <ProvidingSecondRowWrapper>
                <BankName>Bank Name</BankName>
                <BankNameProviding>Wema Bank</BankNameProviding>
              </ProvidingSecondRowWrapper>
              <ProvidingThirdRowWrapper>
                <AccountNumber>Account Number</AccountNumber>
                <AccountNumberProvidng>09876543211</AccountNumberProvidng>
              </ProvidingThirdRowWrapper>
            </ProvidingDataWrapper>
            <TimerWrapper>
              <PaymentTimer>Payment Timer</PaymentTimer>
              <Timer>00:10:00</Timer>
            </TimerWrapper>
            <ThirdPartButtonWrapper>
              <ProceedPaymentButton onClick={handleCloseTrading}>
                I've made my payment
              </ProceedPaymentButton>
            </ThirdPartButtonWrapper>
          </ThirdPartOfTheSell>
        </DesktopVersion>

        {/* ********************************* Mobile Version ********************************* */}

        <MobileVersion>
          <MobileWrapper>
            <MobileFirstPartOfTheSell>
              <MobileWhatDoYouWant>
                <MobileArrowIcon onClick={changeToBuy} />
              </MobileWhatDoYouWant>
              <MobileOrderDetails>Order Details</MobileOrderDetails>
            </MobileFirstPartOfTheSell>

            <MobileSecondPartOfSell>
              <MobileDataWrapper>
                <MobileBuyingAmountReceivingAddressWrapper>
                  <MobileReferenceNumber>
                    Reference Number
                  </MobileReferenceNumber>
                  <MobileReferenceNumberNumber>
                    9U51622238198
                  </MobileReferenceNumberNumber>
                  <MobileBuyingAmount>Buying Amount</MobileBuyingAmount>
                  <MobileBuyingAmountNumber>
                    NGN 99999.99999999999
                  </MobileBuyingAmountNumber>
                  <MobileBuyingAmountNumberApproximatelyWrapper>
                    <MobileApproximately>
                      Approximately{" "}
                      <MobileApproximatelySpan>
                        0.002780419581858399 BTC
                      </MobileApproximatelySpan>
                    </MobileApproximately>
                  </MobileBuyingAmountNumberApproximatelyWrapper>
                  <MobileReceivingAddress>
                    Receiving Address
                  </MobileReceivingAddress>
                </MobileBuyingAmountReceivingAddressWrapper>

                <MobileBuyingAmountRecevingAddressData>
                  <MobileReceivingAddressCode>
                    bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh
                  </MobileReceivingAddressCode>
                </MobileBuyingAmountRecevingAddressData>
              </MobileDataWrapper>
            </MobileSecondPartOfSell>

            <MobileThirdPartOfTheSell>
              <MobileThirdPartHeaderTextWrapper>
                <MobileThirdPartHeader>
                  Receiving Account Details
                </MobileThirdPartHeader>
                <MobileThirdPartText>
                  Kindly make a Payment of your buying amount to the account
                  details provided below. Your Cryptocurrency will be relesed
                  into your receiving address only when payment has been
                  successfuly verified.
                </MobileThirdPartText>
              </MobileThirdPartHeaderTextWrapper>

              <MobileProvidingDataWrapper>
                <MobileProvidingFirstRowWrapper>
                  <MobileAccountName>Account Name</MobileAccountName>
                  <MobileAccountNameProviding>
                    Wale Calfos
                  </MobileAccountNameProviding>
                </MobileProvidingFirstRowWrapper>
                <MobileProvidingSecondRowWrapper>
                  <MobileBankName>Bank Name</MobileBankName>
                  <MobileBankNameProviding>Wema Bank</MobileBankNameProviding>
                </MobileProvidingSecondRowWrapper>
                <MobileProvidingThirdRowWrapper>
                  <MobileAccountNumber>Account Number</MobileAccountNumber>
                  <MobileAccountNumberProvidng>
                    09876543211
                  </MobileAccountNumberProvidng>
                </MobileProvidingThirdRowWrapper>
              </MobileProvidingDataWrapper>
              <MobileTimerWrapper>
                <MobilePaymentTimer>Payment Timer</MobilePaymentTimer>
                <MobileTimer>00:10:00</MobileTimer>
              </MobileTimerWrapper>
              <MobileThirdPartButtonWrapper onClick={handleCloseTrading}>
                <MobileProceedPaymentButton>
                  I've made my payment
                </MobileProceedPaymentButton>
              </MobileThirdPartButtonWrapper>
            </MobileThirdPartOfTheSell>
          </MobileWrapper>
        </MobileVersion>
      </Wrapper>
    </>
  )
}

/*---> Styles <---*/
export const Wrapper = styled.div`
  overflow-y: scroll;
  width: 50%;
  height: 100%;
  border-radius: 4px;
  margin-left: auto;
  background-color: #ffffff;

  @media screen and (max-width: 1024px) {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
`

export const DesktopVersion = styled.div`
  @media screen and (max-width: 1024px) {
    display: none;
  }
`

export const FirstPartOfTheSell = styled.div`
  border-bottom: 1px solid #e0e0e0;
  margin-top: 40px;
`

export const SecondPartOfSell = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 40px;
  border-bottom: 1px solid #e0e0e0;

  @media screen and (max-width: 1325px) {
  }
`

export const ThirdPartOfTheSell = styled.div`
  border-bottom: 1px solid #e0e0e0;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
`

export const IconsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`

export const CloseIconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const WhatDoYouWant = styled.div`
  display: flex;
  align-items: center;
  width: 85%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15px;
  padding-left: 13px;
  padding-right: 13px;
`

export const ArrowIcon = styled(ArrowCircleLeftOutline)`
  width: 35px;
  height: 35px;
  opacity: 60%;
  cursor: pointer;

  @media screen and (max-width: 1325px) {
  }
`

export const OrderDetails = styled.p`
  font-weight: 500;
  text-align: center;
  margin-left: 200px;
`

export const DataWrapper = styled.div`
  width: 85%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1325px) {
  }
`

export const BuyingAmountReceivingAddressWrapper = styled.div``

export const ReferenceNumber = styled.p`
  font-weight: 500;
  font-family: "Graphik";
  color: linear-gradient(to bottom, #18283b, #1a1f24 100%);
  margin-bottom: 10px;
`

export const BuyingAmount = styled.p`
  font-weight: 500;
  font-family: "Graphik";
  color: linear-gradient(to bottom, #18283b, #1a1f24 100%);
  margin-bottom: 10px;
`

export const ReceivingAddress = styled.p`
  font-weight: 500;
  font-family: "Graphik";
  color: linear-gradient(to bottom, #18283b, #1a1f24 100%);
  margin-bottom: 10px;
`

export const BuyingAmountRecevingAddressData = styled.div``

export const ReferenceNumberNumber = styled.p`
  font-weight: 600;
  color: #000000;
  font-family: "Graphik";
  display: flex;
  justify-content: flex-start;
  margin-bottom: 30px;
`

export const BuyingAmountNumberApproximatelyWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
`

export const BuyingAmountNumber = styled.p`
  font-weight: 600;
  color: #000000;
  font-family: "Graphik";
  display: flex;
  justify-content: flex-start;
`

export const Approximately = styled.p`
  font-weight: 400;
  font-family: "Graphik";
  font-size: 13px;
  color: #686868;
  display: flex;
  justify-content: flex-start;
  margin-top: 6px;
  margin-bottom: 30px;
`

export const ApproximatelySpan = styled.span`
  font-weight: 600;
  padding-left: 5px;
`

export const ReceivingAddressCode = styled.p`
  font-weight: 600;
`

export const ProvidingDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  margin-left: auto;
  margin-right: auto;
`

export const ProvidingFirstRowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`

export const AccountName = styled.p`
  font-weight: 500;
  color: linear-gradient(to bottom, #18283b, #1a1f24 100%);
`

export const AccountNameProviding = styled.p`
  font-weight: 600;
`

export const ProvidingSecondRowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`

export const BankName = styled.p`
  font-weight: 500;
  color: linear-gradient(to bottom, #18283b, #1a1f24 100%);
`

export const BankNameProviding = styled.p`
  font-weight: 600;
`

export const ProvidingThirdRowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const AccountNumber = styled.p`
  font-weight: 500;
  color: linear-gradient(to bottom, #18283b, #1a1f24 100%);
`

export const AccountNumberProvidng = styled.p`
  font-weight: 600;
`

export const TimerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-image: linear-gradient(to bottom, #18283b, #1a1f24 100%);
  width: 85%;
  height: 70px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  padding-top: 25px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 4px;
`

export const PaymentTimer = styled.div`
  color: #ffffff;
  font-weight: 400;
`

export const Timer = styled.div`
  color: #ffffff;
  font-weight: 400;
`

export const TabsWrapper = styled.div`
  width: 85%;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-around;
  margin-left: auto;
  margin-right: auto;
  padding-right: 60px;
`

export const SellTabWrapper = styled.div`
  border: 1px solid #b3b3ff;
  padding: 30px 95px;
  border-radius: 40px;
  cursor: pointer;
`

export const BuyTabWrapper = styled.div`
  background-color: #b3b3ff;
  padding: 30px 95px;
  border-radius: 40px;
  cursor: pointer;
`

export const SellTab = styled.p`
  cursor: pointer;
  color: #b3b3ff;
  font-weight: 500;
  text-transform: uppercase;
`

export const BuyTab = styled.p`
  cursor: pointer;
  color: #ffffff;
  font-weight: 500;
  text-transform: uppercase;
`

export const HeaderWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e0e0e0;
`

export const Header = styled.p`
  font-family: "Graphik";
  font-weight: 500;
  font-size: 16px;
`

export const AddBankWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  font-family: "Graphik";
`

export const AddBank = styled.p`
  font-size: 18px;
`

export const FirstInputWrapper = styled.div`
  @media screen and (max-width: 1325px) {
  }
`

export const SecondInputWrapper = styled.div`
  margin-top: 50px;

  @media screen and (max-width: 1325px) {
  }
`

export const InputWrapper = styled.div`
  border: 1px solid #b3b3ff;
  padding: 6px 0px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  border-radius: 4px;

  @media screen and (max-width: 1325px) {
  }
`

export const Label = styled.label`
  display: block;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: -0.25px;
  margin-bottom: 10px;
  margin-top: 5px;

  @media screen and (max-width: 1325px) {
  }
`

export const Input = styled.input`
  width: 65%;
  height: 50px;
  font-size: 16px;
  background-color: white;
  color: black;
  font-family: "Graphik";
  padding-left: 10px;
  user-select: initial !important;
  border: 1px solid #ffffff;
  font-size: 13px;

  @media screen and (max-width: 1325px) {
  }
`

export const SecondPartButtonsWrapper = styled.div`
  display: flex;
  width: 33%;
  justify-content: space-around;
  align-items: center;
  margin-right: 10px;

  @media screen and (max-width: 1325px) {
  }
`

export const NgnButton = styled.p`
  cursor: pointer;
  color: #ffffff;
  font-weight: 400;
  width: 80px;
  height: 35px;
  background-color: #b3b3ff;
  border-radius: 4px;
  text-align: center;
  padding-top: 9px;
`

export const BtcButton = styled.p`
  border: 1px solid #b3b3ff;
  cursor: pointer;
  width: 80px;
  height: 35px;
  color: #b3b3ff;
  font-weight: 400;
  border-radius: 4px;
  text-align: center;
  padding-top: 9px;
`

export const ApproSpan = styled.span`
  font-weight: 500;
`

export const PasteButton = styled.p`
  background-color: #b3b3ff;
  color: #ffffff;
  font-weight: 400;
  width: 175px;
  height: 35px;
  text-align: center;
  border-radius: 4px;
  padding-top: 9px;
  cursor: pointer;
`

export const ThirdPartHeaderTextWrapper = styled.div`
  width: 85%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
`

export const ThirdPartHeader = styled.p`
  font-family: "Graphik";
  font-weight: 500;
  font-size: 17px;
  margin-bottom: 10px;
`

export const ThirdPartText = styled.p`
  font-family: "Graphik";
  font-weight: 400;
  font-size: 11px;
`

export const ThirdPartInputsWrapper = styled.div``

export const FirstRowInputsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 85%;
  margin-left: auto;
  margin-right: auto;
`

export const SelectBankInputWrapper = styled.div``

export const AccountNumberInputWrapper = styled.div``

export const SelectBankInput = styled.input`
  width: 270px;
  height: 60px;
  font-size: 16px;
  background-color: white;
  color: black;
  font-family: "Graphik";
  padding-left: 10px;
  user-select: initial !important;
  border: 1px solid #b3b3ff;
  font-size: 13px;
  border-radius: 4px;

  @media screen and (max-width: 1325px) {
  }
`

export const AccountNumberInput = styled.input`
  width: 270px;
  height: 60px;
  font-size: 16px;
  background-color: white;
  color: black;
  font-family: "Graphik";
  padding-left: 10px;
  user-select: initial !important;
  border: 1px solid #b3b3ff;
  font-size: 13px;
  border-radius: 4px;

  @media screen and (max-width: 1325px) {
  }
`

export const SecondRowInputsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 85%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
`

export const AccountNameInputWrapper = styled.div``

export const AccountNameInput = styled.input`
  width: 560px;
  height: 60px;
  font-size: 16px;
  background-color: white;
  color: black;
  font-family: "Graphik";
  padding-left: 10px;
  user-select: initial !important;
  border: 1px solid #b3b3ff;
  font-size: 13px;
  border-radius: 4px;

  @media screen and (max-width: 1325px) {
  }
`

export const ThirdPartButtonWrapper = styled.div`
  width: 85%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  margin-bottom: 50px;
`

export const ProceedPaymentButton = styled.p`
  cursor: pointer;
  color: #ffffff;
  font-weight: 400;
  padding: 25px 25px;
  background-image: linear-gradient(to bottom, #18283b, #1a1f24 100%);
  text-align: center;
  font-size: 14px;
  border-radius: 4px;
`

/////////////////////////////////////// Mobile Version //////////////////////////////////////////

export const MobileVersion = styled.div`
  display: none;

  @media screen and (max-width: 1024px) {
    display: initial;
  }
`

export const MobileWrapper = styled.div`
  overflow-y: scroll;
  border-radius: 4px;
  margin-left: auto;
  margin-right: auto;
  background-color: #ffffff;
`

export const MobileFirstPartOfTheSell = styled.div`
  margin-top: 40px;
`

export const MobileSecondPartOfSell = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 40px;
  border-bottom: 1px solid #e0e0e0;

  @media screen and (max-width: 1325px) {
  }
`

export const MobileThirdPartOfTheSell = styled.div`
  border-bottom: 1px solid #e0e0e0;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
`

export const MobileIconsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`

export const MobileCloseIconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const MobileWhatDoYouWant = styled.div`
  display: flex;
  align-items: center;
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15px;
  padding-left: 13px;
  padding-right: 13px;
`

export const MobileArrowIcon = styled(IosArrowLeft)`
  width: 25px;
  height: 25px;
  opacity: 60%;
  cursor: pointer;

  @media screen and (max-width: 1325px) {
  }
`

export const MobileOrderDetails = styled.p`
  font-weight: 500;
  text-align: center;
`

export const MobileDataWrapper = styled.div`
  width: 85%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1325px) {
  }
`

export const MobileReferenceNumber = styled.p`
  font-weight: 500;
  font-family: "Graphik";
  color: linear-gradient(to bottom, #18283b, #1a1f24 100%);
  margin-bottom: 10px;
`

export const MobileBuyingAmountReceivingAddressWrapper = styled.div``

export const MobileBuyingAmount = styled.p`
  font-weight: 500;
  font-family: "Graphik";
  color: linear-gradient(to bottom, #18283b, #1a1f24 100%);
  margin-bottom: 10px;
`

export const MobileReceivingAddress = styled.p`
  font-weight: 500;
  font-family: "Graphik";
  color: linear-gradient(to bottom, #18283b, #1a1f24 100%);
  margin-bottom: 10px;
`

export const MobileBuyingAmountRecevingAddressData = styled.div``

export const MobileBuyingAmountNumberApproximatelyWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
`

export const MobileReferenceNumberNumber = styled.p`
  font-weight: 600;
  color: #000000;
  font-family: "Graphik";
  display: flex;
  justify-content: flex-start;
  margin-bottom: 30px;
`

export const MobileBuyingAmountNumber = styled.p`
  font-weight: 600;
  color: #000000;
  font-family: "Graphik";
  display: flex;
  justify-content: flex-start;
  font-size: 13px;
`

export const MobileApproximately = styled.p`
  font-weight: 400;
  font-family: "Graphik";
  font-size: 13px;
  color: #686868;
  display: flex;
  justify-content: flex-start;
  margin-top: 6px;
  margin-bottom: 30px;
`

export const MobileApproximatelySpan = styled.span`
  font-weight: 600;
  padding-left: 5px;
`

export const MobileReceivingAddressCode = styled.p`
  font-weight: 600;
  font-size: 12px;
`

export const MobileProvidingDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  margin-left: auto;
  margin-right: auto;
`

export const MobileProvidingFirstRowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`

export const MobileAccountName = styled.p`
  font-weight: 500;
  color: linear-gradient(to bottom, #18283b, #1a1f24 100%);
  font-size: 14px;
`

export const MobileAccountNameProviding = styled.p`
  font-weight: 600;
  font-size: 14px;
`

export const MobileProvidingSecondRowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`

export const MobileBankName = styled.p`
  font-weight: 500;
  color: linear-gradient(to bottom, #18283b, #1a1f24 100%);
  font-size: 14px;
`

export const MobileBankNameProviding = styled.p`
  font-weight: 600;
  font-size: 14px;
`

export const MobileProvidingThirdRowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const MobileAccountNumber = styled.p`
  font-weight: 500;
  color: linear-gradient(to bottom, #18283b, #1a1f24 100%);
  font-size: 14px;
`

export const MobileAccountNumberProvidng = styled.p`
  font-weight: 600;
  font-size: 14px;
`

export const MobileTimerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-image: linear-gradient(to bottom, #18283b, #1a1f24 100%);
  width: 85%;
  height: 70px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  padding-top: 25px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 4px;
`

export const MobilePaymentTimer = styled.div`
  color: #ffffff;
  font-weight: 400;
`

export const MobileTimer = styled.div`
  color: #ffffff;
  font-weight: 400;
`

export const MobileTabsWrapper = styled.div`
  width: 85%;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-around;
  margin-left: auto;
  margin-right: auto;
  padding-right: 60px;
`

export const MobileSellTabWrapper = styled.div`
  border: 1px solid #b3b3ff;
  padding: 30px 95px;
  border-radius: 40px;
  cursor: pointer;
`

export const MobileBuyTabWrapper = styled.div`
  background-color: #b3b3ff;
  padding: 30px 95px;
  border-radius: 40px;
  cursor: pointer;
`

export const MobileSellTab = styled.p`
  cursor: pointer;
  color: #b3b3ff;
  font-weight: 500;
  text-transform: uppercase;
`

export const MobileBuyTab = styled.p`
  cursor: pointer;
  color: #ffffff;
  font-weight: 500;
  text-transform: uppercase;
`

export const MobileHeaderWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e0e0e0;
`

export const MobileHeader = styled.p`
  font-family: "Graphik";
  font-weight: 500;
  font-size: 16px;
`

export const MobileAddBankWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  font-family: "Graphik";
`

export const MobileAddBank = styled.p`
  font-size: 18px;
`

export const MobileFirstInputWrapper = styled.div``

export const MobileSecondInputWrapper = styled.div`
  margin-top: 50px;

  @media screen and (max-width: 1325px) {
  }
`

export const MobileInputWrapper = styled.div`
  border: 1px solid #b3b3ff;
  padding: 6px 0px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  border-radius: 4px;

  @media screen and (max-width: 1325px) {
  }
`

export const MobileLabel = styled.label`
  display: block;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: -0.25px;
  margin-bottom: 10px;
  margin-top: 5px;

  @media screen and (max-width: 1325px) {
  }
`

export const MobileInput = styled.input`
  width: 65%;
  height: 50px;
  font-size: 16px;
  background-color: white;
  color: black;
  font-family: "Graphik";
  padding-left: 10px;
  user-select: initial !important;
  border: 1px solid #ffffff;
  font-size: 13px;

  @media screen and (max-width: 1325px) {
  }
`

export const MobileSecondPartButtonsWrapper = styled.div`
  display: flex;
  width: 33%;
  justify-content: space-around;
  align-items: center;
  margin-right: 10px;

  @media screen and (max-width: 1325px) {
  }
`

export const MobileNgnButton = styled.p`
  cursor: pointer;
  color: #ffffff;
  font-weight: 400;
  width: 80px;
  height: 35px;
  background-color: #b3b3ff;
  border-radius: 4px;
  text-align: center;
  padding-top: 9px;
`

export const MobileBtcButton = styled.p`
  border: 1px solid #b3b3ff;
  cursor: pointer;
  width: 80px;
  height: 35px;
  color: #b3b3ff;
  font-weight: 400;
  border-radius: 4px;
  text-align: center;
  padding-top: 9px;
`

export const MobileApproSpan = styled.span`
  font-weight: 500;
`

export const MobilePasteButton = styled.p`
  background-color: #b3b3ff;
  color: #ffffff;
  font-weight: 400;
  width: 175px;
  height: 35px;
  text-align: center;
  border-radius: 4px;
  padding-top: 9px;
  cursor: pointer;
`

export const MobileThirdPartHeaderTextWrapper = styled.div`
  width: 85%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
`

export const MobileThirdPartHeader = styled.p`
  font-family: "Graphik";
  font-weight: 500;
  font-size: 17px;
  margin-bottom: 10px;
`

export const MobileThirdPartText = styled.p`
  font-family: "Graphik";
  font-weight: 400;
  font-size: 11px;
`

export const MobileThirdPartInputsWrapper = styled.div``

export const MobileFirstRowInputsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 85%;
  margin-left: auto;
  margin-right: auto;
`

export const MobileSelectBankInputWrapper = styled.div``

export const MobileAccountNumberInputWrapper = styled.div``

export const MobileSelectBankInput = styled.input`
  width: 270px;
  height: 60px;
  font-size: 16px;
  background-color: white;
  color: black;
  font-family: "Graphik";
  padding-left: 10px;
  user-select: initial !important;
  border: 1px solid #b3b3ff;
  font-size: 13px;
  border-radius: 4px;

  @media screen and (max-width: 1325px) {
  }
`

export const MobileAccountNumberInput = styled.input`
  width: 270px;
  height: 60px;
  font-size: 16px;
  background-color: white;
  color: black;
  font-family: "Graphik";
  padding-left: 10px;
  user-select: initial !important;
  border: 1px solid #b3b3ff;
  font-size: 13px;
  border-radius: 4px;

  @media screen and (max-width: 1325px) {
  }
`

export const MobileSecondRowInputsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 85%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
`

export const MobileAccountNameInputWrapper = styled.div``

export const MobileAccountNameInput = styled.input`
  width: 560px;
  height: 60px;
  font-size: 16px;
  background-color: white;
  color: black;
  font-family: "Graphik";
  padding-left: 10px;
  user-select: initial !important;
  border: 1px solid #b3b3ff;
  font-size: 13px;
  border-radius: 4px;

  @media screen and (max-width: 1325px) {
  }
`

export const MobileThirdPartButtonWrapper = styled.div`
  width: 85%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  margin-bottom: 50px;
`

export const MobileProceedPaymentButton = styled.p`
  cursor: pointer;
  color: #ffffff;
  font-weight: 400;
  padding: 25px 25px;
  background-image: linear-gradient(to bottom, #18283b, #1a1f24 100%);
  text-align: center;
  font-size: 14px;
  border-radius: 4px;
`

export default ProceedToBuy