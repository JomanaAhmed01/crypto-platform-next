import React from "react"
import styled from "styled-components"
import { CloseCircle } from "@styled-icons/ionicons-outline/CloseCircle"
import { ArrowDropUp } from "@styled-icons/material-twotone/ArrowDropUp"

function Sell({
  handleCloseTrading,
  changeToProceedToSell,
  changeToBuy,
  changeToProceedToBuy,
}) {
  return (
    <>
      <Wrapper>
        <DesktopVersion>
          <FirstPartOfTheSell>
            <WhatDoYouWant>
              <WhatDoYouWantText>What do you want to do?</WhatDoYouWantText>
              <CloseIconWrapper onClick={handleCloseTrading}>
                <CloseIcon />
              </CloseIconWrapper>
            </WhatDoYouWant>
            <TabsWrapper>
              <BuyTabWrapper onClick={changeToBuy}>
                <BuyTab>Buy</BuyTab>
              </BuyTabWrapper>

              <SellTabWrapper>
                <SellTab>Sell</SellTab>
              </SellTabWrapper>
            </TabsWrapper>
          </FirstPartOfTheSell>

          <SecondPartOfSell>
            <DataWrapper>
              <FirstInputWrapper>
                <Label>How much do you want to sell?</Label>
                <InputWrapper>
                  <Input placeholder="Enter amount"></Input>
                  <SecondPartButtonsWrapper>
                    <BtcButton>BTC</BtcButton>
                  </SecondPartButtonsWrapper>
                </InputWrapper>
                <Approximately>
                  Approximately <ApproSpan>NGN 3,000,889,00</ApproSpan>
                </Approximately>
              </FirstInputWrapper>

              <SecondInputWrapper>
                <Label>Escrow Address</Label>
                <InputWrapper>
                  <Input placeholder="33849JJDiie9988djja882HHHi9002991"></Input>
                  <SecondPartButtonsWrapper>
                    <PasteButton>Copy</PasteButton>
                  </SecondPartButtonsWrapper>
                </InputWrapper>
              </SecondInputWrapper>
            </DataWrapper>
          </SecondPartOfSell>

          <ThirdPartOfTheSell>
            <ThirdPartHeaderTextWrapper>
              <ThirdPartHeader>Receiving Account Details</ThirdPartHeader>
              <ThirdPartText>
                Kindly provide the account where you want to receive money for
                your crypto.
              </ThirdPartText>
            </ThirdPartHeaderTextWrapper>

            <ThirdPartInputsWrapper>
              <FirstRowInputsWrapper>
                <SelectInputWrapper>
                  <Label>Select Bank</Label>
                  <StyledSelect name="Select a bank">
                    <Option value="Select a bank">Select a bank</Option>
                    <Option value="wemy">Wemy</Option>
                    <Option value="QNB">QNB</Option>
                    <Option value="Egyptian bank">Egyptian bank</Option>
                  </StyledSelect>
                </SelectInputWrapper>
                <AccountNumberInputWrapper>
                  <Label>Account Number</Label>
                  <AccountNumberInput placeholder="Enter account number"></AccountNumberInput>
                </AccountNumberInputWrapper>
              </FirstRowInputsWrapper>

              <SecondRowInputsWrapper>
                <AccountNameInputWrapper>
                  <Label>Account Name</Label>
                  <AccountNameInput placeholder="Enter full account name"></AccountNameInput>
                </AccountNameInputWrapper>
              </SecondRowInputsWrapper>
            </ThirdPartInputsWrapper>
            <ThirdPartButtonWrapper onClick={changeToProceedToSell}>
              <ProceedPaymentButton>Proceed to Escrow</ProceedPaymentButton>
            </ThirdPartButtonWrapper>
          </ThirdPartOfTheSell>
        </DesktopVersion>

        {/* ************************************ Mobile Version ***************************** */}

        <MobileVersion>
          <MobileWrapper>
            <MobileFirstPartOfTheSell>
              <MobileWhatDoYouWant>
                <MobileWhatDoYouWantText>
                  What do you want to do?
                </MobileWhatDoYouWantText>

                <CloseIconWrapper onClick={handleCloseTrading}>
                  <CloseIcon />
                </CloseIconWrapper>
              </MobileWhatDoYouWant>
              <MobileTimerWrapper onClick={changeToBuy}>
                <MobilePaymentTimer>Buy</MobilePaymentTimer>
                <MobileArrowToUp />
              </MobileTimerWrapper>
            </MobileFirstPartOfTheSell>

            <MobileSecondPartOfSell>
              <MobileDataWrapper>
                <MobileFirstInputWrapper>
                  <MobileLabel>How much do you want to sell?</MobileLabel>
                  <MobileInputWrapper>
                    <MobileInput placeholder="Enter amount"></MobileInput>
                    <MobileSecondPartButtonsWrapper>
                      <MobileBtcButton>BTC</MobileBtcButton>
                    </MobileSecondPartButtonsWrapper>
                  </MobileInputWrapper>
                  <MobileApproximately>
                    Approximately{" "}
                    <MobileApproSpan>NGN 3,000,889,00</MobileApproSpan>
                  </MobileApproximately>
                </MobileFirstInputWrapper>

                <MobileSecondInputWrapper>
                  <MobileLabel>Escrow Address</MobileLabel>
                  <MobileInputWrapper>
                    <MobileInput placeholder="33849JJDiie9988djja882HHHi9002991"></MobileInput>
                    <MobilePasteButtonWrapper>
                      <MobilePasteButton>Copy</MobilePasteButton>
                    </MobilePasteButtonWrapper>
                  </MobileInputWrapper>
                </MobileSecondInputWrapper>
              </MobileDataWrapper>
            </MobileSecondPartOfSell>

            <MobileThirdPartOfTheSell>
              <MobileThirdPartHeaderTextWrapper>
                <MobileThirdPartHeader>
                  Receiving Account Details
                </MobileThirdPartHeader>
                <MobileThirdPartText>
                  Kindly provide the account where you want to receive money for
                  your crypto.
                </MobileThirdPartText>
              </MobileThirdPartHeaderTextWrapper>

              <MobileThirdPartInputsWrapper>
                <MobileFirstRowInputsWrapper>
                  <MobileSelectInputWrapper>
                    <MobileLabel>Select Bank</MobileLabel>
                    <MobileStyledSelect name="Select a bank">
                      <MobileOption value="Select a bank">
                        Select a bank
                      </MobileOption>
                      <MobileOption value="wemy">Wemy</MobileOption>
                      <MobileOption value="QNB">QNB</MobileOption>
                      <MobileOption value="Egyptian bank">
                        Egyptian bank
                      </MobileOption>
                    </MobileStyledSelect>
                  </MobileSelectInputWrapper>
                  <MobileAccountNumberInputWrapper>
                    <MobileLabel>Account Number</MobileLabel>
                    <MobileAccountNumberInput placeholder="Enter account number"></MobileAccountNumberInput>
                  </MobileAccountNumberInputWrapper>
                  <MobileAccountNameInputWrapper>
                    <MobileLabel>Account Name</MobileLabel>
                    <MobileAccountNameInput placeholder="Enter full account name"></MobileAccountNameInput>
                  </MobileAccountNameInputWrapper>
                </MobileFirstRowInputsWrapper>
              </MobileThirdPartInputsWrapper>
              <MobileThirdPartButtonWrapper onClick={changeToProceedToSell}>
                <MobileProceedPaymentButton>
                  Proceed to Escrow
                </MobileProceedPaymentButton>
              </MobileThirdPartButtonWrapper>
            </MobileThirdPartOfTheSell>
          </MobileWrapper>
        </MobileVersion>
      </Wrapper>
    </>
  )
}

export const SelectInputWrapper = styled.div`
  width: 30%;
  margin-right: 15px;
`

export const StyledSelect = styled.select`
  width: 100%;
  height: 60px;
  border-radius: 4px;
  padding-left: 10px;
  border: 1px solid gray;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
`

export const Option = styled.option``

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

export const CloseIcon = styled(CloseCircle)`
  width: 35px;
  height: 35px;
  opacity: 60%;
  cursor: pointer;

  @media screen and (max-width: 1325px) {
  }
`

export const WhatDoYouWant = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15px;
  padding-left: 13px;
  padding-right: 13px;
`

export const WhatDoYouWantText = styled.p`
  font-family: "Graphik";
  font-weight: 500;
  font-size: 17px;
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
  background-image: linear-gradient(to bottom, #18283b, #1a1f24 100%);
  padding: 30px 95px;
  border-radius: 40px;
  cursor: pointer;

  @media screen and (max-width: 1250px) {
    padding: 30px 70px;
  }
`

export const BuyTabWrapper = styled.div`
  border: 1px solid #000000;
  padding: 30px 95px;
  border-radius: 40px;
  cursor: pointer;

  @media screen and (max-width: 1250px) {
    padding: 30px 70px;
  }
`

export const SellTab = styled.p`
  cursor: pointer;
  color: #ffffff;
  font-weight: 500;
  text-transform: uppercase;
`

export const BuyTab = styled.p`
  cursor: pointer;
  color: #000000;
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

export const DataWrapper = styled.div`
  width: 85%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;

  @media screen and (max-width: 1325px) {
  }
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
  border: 1px solid gray;
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
  justify-content: flex-end;
  align-items: center;
  margin-right: 18px;

  @media screen and (max-width: 1325px) {
  }
`

export const BtcButton = styled.p`
  background-image: linear-gradient(to bottom, #18283b, #1a1f24 100%);
  cursor: pointer;
  color: #ffffff;
  width: 80px;
  height: 35px;
  padding: 15px 25px;
  font-weight: 400;
  border-radius: 4px;
  padding-top: 9px;
`

export const Approximately = styled.p`
  font-family: "Graphik";
  font-size: 14px;
`

export const ApproSpan = styled.span`
  font-weight: 500;
`

export const PasteButton = styled.p`
  background-image: linear-gradient(to bottom, #18283b, #1a1f24 100%);
  color: #ffffff;
  font-weight: 500;
  border-radius: 4px;
  font-weight: 400;
  width: 175px;
  height: 35px;
  padding-top: 9px;
  text-align: center;
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
  width: 85%;
  margin-left: auto;
  margin-right: auto;
`

export const SelectBankInputWrapper = styled.div``

export const AccountNumberInputWrapper = styled.div`
  width: 70%;
`

export const AccountNumberInput = styled.input`
  width: 100%;
  height: 60px;
  font-size: 16px;
  background-color: white;
  color: black;
  font-family: "Graphik";
  padding-left: 10px;
  user-select: initial !important;
  border: 1px solid gray;
  font-size: 13px;
  border-radius: 4px;

  @media screen and (max-width: 1325px) {
  }
`

export const SecondRowInputsWrapper = styled.div`
  width: 85%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
`

export const AccountNameInputWrapper = styled.div``

export const AccountNameInput = styled.input`
  width: 100%;
  height: 60px;
  font-size: 16px;
  background-color: white;
  color: black;
  font-family: "Graphik";
  padding-left: 10px;
  user-select: initial !important;
  border: 1px solid gray;
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

///////////////////////////////////////// Mobile Version ///////////////////////////////////////////

export const MobileVersion = styled.div`
  display: none;

  @media screen and (max-width: 1024px) {
    display: initial;
  }
`

export const MobileWrapper = styled.div`
  overflow-y: scroll;
  border-radius: 4px;
  background-color: #ffffff;
  margin-left: auto;
  margin-right: auto;
  font-size: 16px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
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

export const MobileCloseIcon = styled(CloseCircle)`
  width: 35px;
  height: 35px;
  opacity: 60%;
  cursor: pointer;

  @media screen and (max-width: 1325px) {
  }
`

export const MobileWhatDoYouWant = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15px;
  padding-left: 13px;
  padding-right: 13px;
`

export const MobileWhatDoYouWantText = styled.p`
  font-family: "Graphik";
  font-weight: 500;
  font-size: 17px;
`

export const MobileTimerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: linear-gradient(to bottom, #18283b, #1a1f24 100%);
  width: 85%;
  height: 50px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 30px;
  border-radius: 4px;
`

export const MobilePaymentTimer = styled.div`
  color: #ffffff;
  font-weight: 400;
`

export const MobileArrowToUp = styled(ArrowDropUp)`
  width: 30px;
  height: 30px;
  color: #ffffff;
  cursor: pointer;

  @media screen and (max-width: 1325px) {
  }
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

export const MobileDataWrapper = styled.div`
  width: 85%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;

  @media screen and (max-width: 1325px) {
  }
`

export const MobileFirstInputWrapper = styled.div`
  @media screen and (max-width: 1325px) {
  }
`

export const MobileSecondInputWrapper = styled.div`
  margin-top: 50px;

  @media screen and (max-width: 1325px) {
  }
`

export const MobileInputWrapper = styled.div`
  border: 1px solid gray;
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
  font-size: 100%;
  -webkit-appearance: none;

  @media screen and (max-width: 1325px) {
  }
`

export const MobileSecondPartButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-right: 10px;

  @media screen and (max-width: 1325px) {
  }
`

export const MobileBtcButton = styled.p`
  border: 1px solid #000000;
  cursor: pointer;
  width: 80px;
  height: 35px;
  color: linear-gradient(to bottom, #18283b, #1a1f24 100%);
  font-weight: 400;
  border-radius: 4px;
  text-align: center;
  padding-top: 9px;
`

export const MobileApproximately = styled.p`
  font-family: "Graphik";
  font-size: 14px;
`

export const MobileApproSpan = styled.span`
  font-weight: 500;
`

export const MobilePasteButtonWrapper = styled.div`
  padding-right: 10px;
  margin-top: 7px;

  @media screen and (max-width: 1325px) {
  }
`

export const MobilePasteButton = styled.p`
  background-image: linear-gradient(to bottom, #18283b, #1a1f24 100%);
  color: #ffffff;
  font-weight: 400;
  width: 80px;
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
  flex-direction: column;
  width: 85%;
  margin-left: auto;
  margin-right: auto;
`

export const MobileSelectInputWrapper = styled.div``

export const MobileStyledSelect = styled.select`
  width: 100%;
  height: 60px;
  border-radius: 4px;
  padding-left: 10px;
  margin-bottom: 30px;
  border: 1px solid gray;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
  font-size: 100%;
`

export const MobileOption = styled.option``

export const MobileAccountNumberInputWrapper = styled.div``

export const MobileAccountNumberInput = styled.input`
  width: 100%;
  height: 60px;
  font-size: 16px;
  background-color: white;
  color: black;
  font-family: "Graphik";
  padding-left: 10px;
  user-select: initial !important;
  border: 1px solid gray;
  font-size: 13px;
  border-radius: 4px;
  margin-bottom: 30px;
  font-size: 100%;
  -webkit-appearance: none;

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
  width: 100%;
  height: 60px;
  font-size: 16px;
  background-color: white;
  color: black;
  font-family: "Graphik";
  padding-left: 10px;
  user-select: initial !important;
  border: 1px solid gray;
  font-size: 13px;
  border-radius: 4px;
  font-size: 100%;
  -webkit-appearance: none;

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

export default Sell