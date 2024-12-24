import styled from 'styled-components';
import underline from '../../assets/StartPage/Line 1.svg';
import wishSparkle from '../../assets/StartPage/wishSparkle.svg';
import textareaSparkle from '../../assets/StartPage/textarea.svg';
import { Button } from '../Button';
import { CustomCheckbox } from './CustomCheckbox';
import { useEffect, useState } from 'react';
import { postWish } from '../../api/wish';
import { useNavigate } from 'react-router-dom';

export const WishForm = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [wish, setWish] = useState({ nickname: null, content: null });
  const [isActive, setIsActive] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    if (wish.nickname && wish.content) setIsActive(true);
    else setIsActive(false);
  }, [wish]);

  const onChangeWish = (e) => {
    let { name, value } = e.target;
    if (name == 'nickname' && value.length > 5) {
      value = value.substr(0, 5);
    } else if (name == 'content' && value.length > 50) {
      value = value.substr(0, 50);
    }
    setWish({ ...wish, [name]: value });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  const submitWish = async () => {
    try {
      const data = {
        nickname: wish.nickname,
        content: wish.content,
        is_displayed: isChecked,
      };
      const res = await postWish(data);
      if (res) {
        nav('/result', { state: { res } });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <NameContainer>
        <NameText>이름</NameText>
        <InputWrapper>
          <NameInput
            type="text"
            value={wish.nickname}
            name="nickname"
            onChange={onChangeWish}
            maxLength={5}
          />
          <UnderLine src={underline} />
        </InputWrapper>
      </NameContainer>
      <WishContainer>
        <WishText>
          당신의 소원은?
          <WishSparkle src={wishSparkle} />
        </WishText>
        <TextSparkle src={textareaSparkle} />
        <WishWrapper>
          <WishInput
            type="text"
            value={wish.content}
            name="content"
            onChange={onChangeWish}
            onKeyDown={handleKeyDown}
          />
          <TextCount>{`${wish.content?.length || 0}/50`}</TextCount>
        </WishWrapper>
      </WishContainer>
      <CheckboxContainer>
        <CheckboxText>소원을 다른 사람들에게 보여줄까요?</CheckboxText>

        <CustomCheckbox isChecked={isChecked} setIsChecked={setIsChecked} />
      </CheckboxContainer>
      <ButtonWrapper>
        <Button
          text="소원 빌기"
          color="yellow"
          isActive={isActive}
          onClick={submitWish}
        />
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

  position: relative;
`;

const WishSparkle = styled.img`
  position: absolute;
  top: -1.5rem;
  left: -3.5rem;
`;

const WishText = styled.div`
  font-size: 2.25rem;
  position: relative;
`;

const WishWrapper = styled.div`
  width: 100%;
  height: 8.4375rem;

  display: flex;
  flex-direction: column;

  border: 1.5px solid var(--brown);
  border-radius: 0.625rem;

  padding: 0.56rem 0.94rem;
  box-sizing: border-box;
`;

const TextSparkle = styled.img`
  position: absolute;
  top: 1rem;
  right: -2rem;
  z-index: 5;
`;

const WishInput = styled.textarea`
  width: 100%;
  height: 6rem;
  font-size: 1.5rem;
  color: var(--brown);
  border: none;
  background-color: transparent;

  resize: none;
`;

const TextCount = styled.div`
  margin-left: auto;
  font-size: 1.25rem;
  color: var(--browngray);
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
