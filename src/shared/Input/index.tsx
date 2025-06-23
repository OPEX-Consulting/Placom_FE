"use client";
import { useState, InputHTMLAttributes } from "react";
import "./inputStyle.css";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { BsAsterisk, BsFillEnvelopeOpenFill } from "react-icons/bs";
import {
  RadioLabel,
  StyledInput,
  AbsoluteIcon,
  RadioWrapper,
  InputContainer,
  InputRadioMain,
} from "./inputStyles";
// import { H6 } from "../elements";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  styles?: React.CSSProperties;
  name?: string;
  error?: boolean | string;
  type?: string;
  margin?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  noRadius?: boolean;
  hasIcon?: boolean;
  halfWidth?: boolean;
  width?: string;
  className?: string;
  isSearch?: boolean;
  bg?: string;
  noBg?: boolean;
  id?:string;
  value?: string | number;
  max?: number;
  min?: number;
  maxLength?: number;
  minLength?: number;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface RadioInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  margin?: string;
  title?: string;
  name?: string;
  value?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  label,
  styles,
  name,
  error,
  type,
  margin,
  onChange,
  placeholder,
  isRequired,
  isDisabled,
  noRadius,
  hasIcon,
  halfWidth,
  width,
  id,
  className,
  isSearch,
  bg,
  noBg,
  value,
  max,
  min,
  maxLength,
  minLength,
  ...others
}: InputProps) => {
  const [view, setView] = useState(true);
  const handleView = () => setView(!view);

  return (
    <div className="w-full" style={{ width }}>
      {label && (
        <div className="flex items-center capitalize w-max">
          <h6 className="mb-1" 
        //   htmlFor={id}
          >
            {label}{" "}
          </h6>
          {isRequired && <BsAsterisk className="mb-1" color="red" size={8} />}
        </div>
      )}
      <InputContainer
        className={className}
        style={{
          margin: margin ? "5px 0" : undefined,
          ...styles,
        }}
        halfWidth={halfWidth}
        width={width}
      >
        {hasIcon && (hasIcon || <BsFillEnvelopeOpenFill />)}

        <div
          className={`flex items-center justify-center ${
            hasIcon ? "w-[90%]" : "w-[100%]"
          } border ${error ? "border-red-900" : "border-[#c7c7cd]"} rounded ${
            noBg ? "bg-transparent" : bg
          }`}
        >
          {isSearch && (
            <div className="px-2 flex justify-end">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.66667 2C4.08934 2 2 4.08934 2 6.66667C2 9.244 4.08934 11.3333 6.66667 11.3333C7.71489 11.3333 8.68239 10.9877 9.46145 10.4043L12.1953 13.1381C12.4557 13.3985 12.8778 13.3985 13.1381 13.1381C13.3985 12.8778 13.3985 12.4557 13.1381 12.1953L10.4043 9.46145C10.9877 8.68239 11.3333 7.71489 11.3333 6.66667C11.3333 4.08934 9.244 2 6.66667 2ZM3.33333 6.66667C3.33333 4.82572 4.82572 3.33333 6.66667 3.33333C8.50762 3.33333 10 4.82572 10 6.66667C10 8.50762 8.50762 10 6.66667 10C4.82572 10 3.33333 8.50762 3.33333 6.66667Z"
                  fill="#64748B"
                />
              </svg>
            </div>
          )}

          <StyledInput
            {...others}
            max={max}
            min={min}
            maxLength={maxLength}
            minLength={minLength}
            name={name}
            // error={error}
            value={value}
            // noRadius={noRadius}
            onChange={onChange}
            // hasIcon={hasIcon}
            disabled={isDisabled}
            type={
              name === "password" || name === "confirmPassword"
                ? view
                  ? "password"
                  : "text"
                : type || "text"
            }
            style={{
              marginTop: label ? 0 : undefined,
            }}
            placeholder={placeholder || ""}
            className="outline-none bg-transparent border-none focus:bg-transparent focus:outline-none focus:border-none"
          />
        </div>

        {(type === "password") && (
          <AbsoluteIcon eye='true'>
            {view ? (
              <AiOutlineEye onClick={handleView} color="#878787" />
            ) : (
              <AiOutlineEyeInvisible onClick={handleView} color="#878787" />
            )}
          </AbsoluteIcon>
        )}
      </InputContainer>
    </div>
  );
};

export const RadioInput = ({
  label,
  margin,
  title,
  name,
  value,
  checked,
  defaultChecked,
  onChange,
  ...props
}: RadioInputProps) => (
  <RadioWrapper
    style={{
      margin: margin ? "10px 0" : undefined,
    }}
  >
    {label && <RadioLabel htmlFor="input">{label}</RadioLabel>}
    <InputRadioMain>
      <label className="radio-title">{title}</label>
      <label className="container">
        <input
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          defaultChecked={defaultChecked}
          {...props}
        />
        <span className="checkmark"></span>
      </label>
    </InputRadioMain>
  </RadioWrapper>
);

const Slider = () => <input type="range" />;

const EditableInput = () => <input type="text" contentEditable />;

const DatePicker = () => <input type="date" />;

const LocaleDatePicker = () => <input type="datetime-local" />;

export { Slider, DatePicker, EditableInput, LocaleDatePicker };
export default Input;