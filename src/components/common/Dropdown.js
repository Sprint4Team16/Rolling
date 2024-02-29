import styled from 'styled-components';
import { useState } from 'react';

const DropdownContainer = styled.div`
  display: flex;
  width: 320px;
  padding: 12px 16px;
  align-items: center;
  gap: 192px;
  border-radius: 8px;
  border: 1px solid var(--gray300);
  justify-content: space-between;

  &:focus,
  &:active { 
    border: 2px solid var(--gray500);
    gap: 189px; }
  
  &:hover { 
    gap: 189px;
    border: 1px solid var(--gray500);
  }

  &:disabled {
    gap: 189px;
    background: var(--gray100);
  }

  &:error {
    gap: 189px;
    border: 1px solid var(--error);
  }
`;

const TextContainer = styled.p`
  color: var(--gray500);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: -0.16px;

  &:focus,
  &:active,
  &:error { color: var(--gray900); }

  &:disabled { color: var(--gray400); }
`;

const ListContainer = styled.div`
  display: inline-flex;
  padding: 10px 1px;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 8px;
  border: 1px solid var(--gray300);
  background: var(--white);
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
`;

const Lists = styled.li`
  display: flex;
  width: 316px;
  padding: 12px 16px;
  align-items: center;
  gap: 10px;

  &:hover {
    background: var(--gray100); 
  }
`;

function Dropdown() {
  const dropdownImage = ['img/arrow_down.svg', 'img/arrow_top.svg'];
  const placeholderText = 'placeholder';

  const [toggled, setToggled] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleListDown = () => {
    setToggled(!toggled);
  };

  const handleItemClick = (itemText) => {
    setSelectedItem(itemText);
    setToggled(false);
  };

  return (
    <>
      <DropdownContainer>
        {selectedItem ? (
          <TextContainer>{selectedItem}</TextContainer>
        ) : (
          <TextContainer>{placeholderText}</TextContainer>
        )}
        <button type="button" onClick={handleListDown}>
          <img src={toggled ? dropdownImage[1] : dropdownImage[0]} alt="화살표" />
        </button>
      </DropdownContainer>
      {toggled && (
        <ListContainer>
          <Lists onClick={() => handleItemClick('예시1')}>
            <TextContainer>예시1</TextContainer>
          </Lists>
          <Lists onClick={() => handleItemClick('예시2')}>
            <TextContainer>예시2</TextContainer>
          </Lists>
          <Lists onClick={() => handleItemClick('예시3')}>
            <TextContainer>예시3</TextContainer>
          </Lists>

        </ListContainer>
      )}
    </>

  );
}

export default Dropdown;
