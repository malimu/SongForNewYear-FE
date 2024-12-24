import styled from 'styled-components';
import underline from '../../assets/StartPage/Line 1.svg';
import { Button } from '../Button';
import { CustomCheckbox } from './CustomCheckbox';
import { useState } from 'react';

export const WishForm = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Container>
      <NameContainer>
        <NameText>이름</NameText>
        <InputWrapper>
          <NameInput />
          <UnderLine src={underline} />
        </InputWrapper>
      </NameContainer>
      <WishContainer>
        <WishText>당신의 소원은?</WishText>
        <WishInput />
      </WishContainer>
      <CheckboxContainer>
        <CheckboxText>소원을 다른 사람들에게 보여줄까요?</CheckboxText>
        <CustomCheckbox isChecked={isChecked} />
      </CheckboxContainer>
      <ButtonWrapper>
        <Button text="소원 빌기" color="yellow" />
      </ButtonWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0 3.25rem;
  box-sizing: border-box;
`;

const NameContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.38rem;
`;

const NameText = styled.div`
  font-size: 1.875rem;
  padding-bottom: 0.2rem;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
`;

const NameInput = styled.input`
  border: 0;
  background-color: transparent;

  width: 10rem;
  font-size: 1.875rem;
  text-align: center;
  color: var(--brown);
`;

const UnderLine = styled.img``;

const WishContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;

  gap: 0.7rem;

  margin-top: 2.38rem;
`;

const WishText = styled.div`
  font-size: 2.25rem;
`;

const WishInput = styled.textarea`
  width: 100%;
  height: 8.4375rem;

  border: 1.5px solid var(--brown);
  border-radius: 0.625rem;
  background-color: transparent;

  padding: 0.56rem 0.94rem;
  box-sizing: border-box;

  font-size: 1.5rem;
  color: var(--brown);

  resize: none;
`;

const CheckboxContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.87rem;

  margin: 0.75rem 0 1.75rem;
`;

const CheckboxText = styled.div`
  font-size: 1.25rem;
`;

const ButtonWrapper = styled.div`
  width: 100%;
`;
