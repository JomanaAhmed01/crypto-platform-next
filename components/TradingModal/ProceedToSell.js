import React from "react"
import styled from "styled-components"
import { ArrowCircleLeftOutline } from "@styled-icons/evaicons-outline/ArrowCircleLeftOutline"
import { IosArrowLeft } from "@styled-icons/fluentui-system-filled/IosArrowLeft"

function ProceedToSell({ handleCloseTrading, changeToSell }) {
  return (
    <>
      <Wrapper>
        <DesktopVersion>
          <FirstPartOfTheSell>
            <WhatDoYouWant>
              <ArrowIcon onClick={changeToSell} />
              <OrderDetails>Order Details</OrderDetails>
            </WhatDoYouWant>
          </FirstPartOfTheSell>

          <SecondPartOfSell>
            <KindlyProvidingText>
              Kindly escrow your cryptocurrency with the receiving address
              provided below. Your cryptocurrency will onlu be available for
              sale after it has been successfuly escrowed.
            </KindlyProvidingText>
            <DataWrapper>
              <BuyingAmountReceivingAddressWrapper>
                <BuyingAmount>Selling Amount</BuyingAmount>
                <ReceivingAddress>Receiving Address</ReceivingAddress>
              </BuyingAmountReceivingAddressWrapper>

              <BuyingAmountRecevingAddressData>
                <BuyingAmountNumberApproximatelyWrapper>
                  <BuyingAmountNumber>0.0799968668</BuyingAmountNumber>
                  <Approximately>
                    Approximately{" "}
                    <ApproximatelySpan>3,000,889.00</ApproximatelySpan>
                  </Approximately>
                </BuyingAmountNumberApproximatelyWrapper>
                <ReceivingAddressCode>
                  33849JJDiie9988djja882HHHi9002991
                </ReceivingAddressCode>
              </BuyingAmountRecevingAddressData>
            </DataWrapper>
          </SecondPartOfSell>

          <ThirdPartOfTheSell>
            <ThirdPartHeaderTextWrapper>
              <ThirdPartHeader>Receiving Account Details</ThirdPartHeader>
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

export const KindlyProvidingText = styled.p`
  font-weight: 400;
  width: 85%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  font-size: 15px;
`

export const DataWrapper = styled.div`
  width: 85%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1325px) {
  }
`

export const BuyingAmountReceivingAddressWrapper = styled.div``

export const BuyingAmount = styled.p`
  font-weight: 500;
  font-family: "Graphik";
  color: linear-gradient(to bottom, #18283b, #1a1f24 100%);
  margin-bottom: 50px;
`

export const ReceivingAddress = styled.p`
  font-weight: 500;
  font-family: "Graphik";
  color: linear-gradient(to bottom, #18283b, #1a1f24 100%);
`

export const BuyingAmountRecevingAddressData = styled.div``

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
  justify-content: flex-end;
`

export const Approximately = styled.p`
  font-weight: 400;
  font-family: "Graphik";
  font-size: 13px;
  color: #686868;
  display: flex;
  justify-content: flex-end;
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

export default ProceedToSell