// 'use client'
import React, { useMemo, useEffect } from "react";

interface PasswordStrengthCheckerProps {
  password: string;
  checkStatus?: (isValid: boolean) => void;
}

interface PasswordStrengthResult {
  uppercase: boolean;
  lowercase: boolean;
  number: boolean;
  specialChar: boolean;
  lengthValid: boolean;
}

const PasswordStrengthChecker: React.FC<PasswordStrengthCheckerProps> = ({
  password,
  checkStatus
}) => {

  const passwordStrength = useMemo((): PasswordStrengthResult => {
    // Handle empty password case
    if (password.trim() === '') {

      return {
        uppercase: false,
        lowercase: false,
        number: false,
        specialChar: false,
        lengthValid: false,
      };
    }

    // Check password strength criteria
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?`~]/.test(password);
    const isLengthValid = password.length >= 8;

    return {
      uppercase: hasUppercase,
      lowercase: hasLowercase,
      number: hasNumber,
      specialChar: hasSpecialChar,
      lengthValid: isLengthValid,
    };
  }, [password, checkStatus]);

  const getStatusText = (isValid: boolean): string => {
    return isValid ? "Pass" : "Fail";
  };

  const getStatusClass = (isValid: boolean): string => {
    return isValid ? "text-green-700" : "text-red-700";
  };


  useEffect(() => {
    const isAllValid = Object.values(passwordStrength).every(Boolean);
    checkStatus?.(isAllValid);
  }, [passwordStrength, checkStatus]);

  return (
    <div className="pl-5 mt-2 w-full">
      <ul className="list-disc text-xs">
        <li className={getStatusClass(passwordStrength.uppercase)}>
          Uppercase: {getStatusText(passwordStrength.uppercase)}
        </li>
        <li className={getStatusClass(passwordStrength.lowercase)}>
          Lowercase: {getStatusText(passwordStrength.lowercase)}
        </li>
        <li className={getStatusClass(passwordStrength.number)}>
          Number: {getStatusText(passwordStrength.number)}
        </li>
        <li className={getStatusClass(passwordStrength.specialChar)}>
          Special Character: {getStatusText(passwordStrength.specialChar)}
        </li>
        <li className={getStatusClass(passwordStrength.lengthValid)}>
          Minimum Length: {getStatusText(passwordStrength.lengthValid)}
        </li>
      </ul>
    </div>
  );
};

export default PasswordStrengthChecker;