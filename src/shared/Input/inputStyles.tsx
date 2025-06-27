import styled from "styled-components";

interface InputContainerProps {
  halfWidth?: boolean;
  width?: string;
}

interface AbsoluteIconProps {
  eye?: string;
  search?: boolean;
}

interface StyledInputProps {

}

export const InputContainer = styled.div<InputContainerProps>`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  width: ${({ halfWidth, width }) => (halfWidth ? "50%" : width ? width : "100%")};
`;

export const Label = styled.label`
  color: #878787;
  font-weight: 400;
  font-size: 12px;
  margin-bottom: 0;
  line-height: 14px;
  font-style: normal;
`;

export const RadioLabel = styled.label`
  font-size: 12px;
  color: #878787;
  font-weight: 400;
  margin-right: 10px;
  font-style: normal;
`;

export const StyledInput = styled.input<StyledInputProps>`
  height: 40px;
  color: #75757a;
  font-weight: 400;
  font-size: 13px;
  text-indent: 0;
  border-radius: 4px;
  border: none;
  position: relative;
  padding-left:0.5rem;
  padding-right: 1rem;
  box-sizing: border-box;
  background-color: transparent !important;
  outline: none;
  width: 100%;

  &:focus {
    outline: none;
    outline-offset: none;
    outline-style: none;
    outline-color: transparent;
    border: none;
    background-color: transparent;
  }

  &::placeholder {
    color: #75757a;
    
    @media screen and (max-width: 800px) {
      font-size: 12px;
    }
  }

  svg {
    color: #c7c7cd;
  }
`;

export const AbsoluteIcon = styled.div<AbsoluteIconProps>`
  top: 0;
  height: 100%;
  padding: 10px;
  display: flex;
  cursor: pointer;
  position: absolute;
  margin-right: 10px;
  align-items: center;
  right: ${({ eye }) => eye && `0`};
  left: ${({ search }) => search && `0`};

  svg {
    padding: 7px;
    font-size: 35px;
    border-radius: 50%;

    &:hover {
      background: #87878728;
    }
  }
`;

export const SearchIcon = styled.div``;
export const RadioWrapper = styled.div``;

export const InputRadioMain = styled.div`
  height: 35px;
  display: flex;
  font-size: 12px;
  font-weight: 400;
  padding: 0px 6px;
  border-radius: 10px;
  align-items: center;
  box-sizing: border-box;
  background: transparent;
  text-transform: capitalize;
  border: 1px solid #878787;
  justify-content: space-between;
`;

export const InputRadio = styled.input`
  display: none;

  &:checked + .checkmark {
    width: 13px;
    height: 13px;
    background-color: #fcfcfc;
    border: 1px solid #878787;
  }
`;

export const CustomRadio = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 10px;
  user-select: none;
  width: fit-content;

  input {
    width: 10px;
    height: 10px;
    cursor: pointer;
  }

  .checkmark {
    top: -3px;
    width: 10px;
    left: -2.5px;
    height: 10px;
    position: absolute;
    border-radius: 50%;
    background-color: #fff;
    border: 3px solid #878787;

    &:after {
      content: "";
      display: none;
      position: absolute;
    }
  }

  &:hover input ~ .checkmark {
    background-color: #fcfcfc;
  }

  input:checked ~ .checkmark {
    &:after {
      display: block;
    }
  }
`;