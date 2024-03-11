import styled from 'styled-components';
import { useState } from 'react';
import { regular16 } from '../../styles/FontStyle';

const statePosition = {
  0: { position: 'absolute' },
  1: { position: 'relative' },
};

const DropdownContainer = styled.button`
  position: relative;
  display: flex;
  width: 32rem;
  padding: 1.2rem 1.6rem;
  align-items: center;
  border-radius: 0.8rem;
  border: 0.1rem solid var(--gray300);
  justify-content: space-between;

  &:focus,
  &:active {
    border: 0.2rem solid var(--gray500);
  }

  &:hover {
    border: 0.1rem solid var(--gray500);
  }

  &:disabled {
    gap: 18.9rem;
    background: var(--gray100);
  }

  &:error {
    gap: 18.9rem;
    border: 0.1rem solid var(--error);
  }
`;

const TextContainer = styled.p`
  color: var(--gray500);
  ${regular16}
  white-space: nowrap;

  &:focus,
  &:active,
  &:error {
    color: var(--gray900);
  }

  &:disabled {
    color: var(--gray400);
  }
`;

const ListContainer = styled.div`
  position: ${({ $state }) =>
    statePosition[$state] ? statePosition[$state].position : 'absolute'};
  display: inline-flex;
  overflow-y: auto;
  z-index: 1;
  padding: 1rem 0.1rem;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 0.8rem;
  border: 0.1rem solid var(--gray300);
  background: var(--white);
  box-shadow: 0rem 0.2rem 1.2rem 0rem rgba(0, 0, 0, 0.08);
`;

const Lists = styled.li`
  display: flex;
  width: 31.6rem;
  padding: 1.2rem 1.6rem;
  align-items: center;
  gap: 1rem;

  &:hover {
    background: var(--gray100);
  }
`;

function Dropdown({ options, placeholder, onChange, $state }) {
  const dropdownImage = ['/img/arrow_down.svg', '/img/arrow_top.svg'];

  const [toggled, setToggled] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleListDown = () => {
    setToggled(!toggled);
  };

  const handleItemClick = (itemText) => {
    setSelectedItem(itemText);
    setToggled(false);
    onChange(itemText);
  };

  return (
    <div>
      <DropdownContainer onClick={handleListDown} type="button">
        {selectedItem ? (
          <TextContainer>{selectedItem}</TextContainer>
        ) : (
          <TextContainer>{placeholder}</TextContainer>
        )}
        <img src={toggled ? dropdownImage[1] : dropdownImage[0]} alt="화살표" />
      </DropdownContainer>
      {toggled && (
        <ListContainer $state={$state}>
          {options.map((option) => (
            <Lists key={option} onClick={() => handleItemClick(option)}>
              <TextContainer>{option}</TextContainer>
            </Lists>
          ))}
        </ListContainer>
      )}
    </div>
  );
}

export default Dropdown;
