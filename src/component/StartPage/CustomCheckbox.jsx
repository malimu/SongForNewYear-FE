import styled from 'styled-components';
import toggleOn from '../../assets/StartPage/toggleon.svg';
import toggleOff from '../../assets/StartPage/toggleoff.svg';

export const CustomCheckbox = ({ isChecked, setIsChecked }) => {
  return (
    <Container>
      <HiddenCheckbox
        type="checkbox"
        id="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked((prev) => !prev)}
      />
      <StyledCheckbox htmlFor={'checkbox'} checked={isChecked} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const HiddenCheckbox = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.label`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.125rem;
  height: 1.125rem;

  cursor: pointer;

  background-image: ${({ checked }) =>
    checked ? `url(${toggleOn})` : `url(${toggleOff})`};
  background-size: cover;
`;
