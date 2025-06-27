import {
  fadeIn,
  slideInFromBottom,
  slideInFromRight,
  slideInFromTop,
} from "@/animation";
import Image, { ImageProps } from "next/image";
import Link, { LinkProps } from "next/link";
import styled  from "styled-components";

interface CommonProps {
  align?: "left" | "center" | "right";
  mobileAlign?: "left" | "center" | "right";
  mt?: string;
  mb?: string;
}

interface RegisterProps {
  register?: boolean;
}

export const LoginWrapper = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  background: #fff;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    align-items: center;
    border-radius: 0px;
    background: transparent;
  }
`;

interface LoginFormProps {
  justify?: string;
}

export const LoginForm = styled.div<LoginFormProps>`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: ${({ justify }) => justify || "flex-end"};
  animation: ${fadeIn} 1s ease-in-out;
  align-items: center;
  background: linear-gradient(
    15deg,
    rgba(0, 0, 0, 0.53) 10.21%,
    rgba(0, 0, 0, 0) 40.23%
  );

  .form {
    width: 80%;
    padding: 0 2rem;
    height: 100%;
    display: flex;
    background: linear-gradient(
      0deg,
      rgba(243, 243, 243, 0.65) 80.21%,
      rgba(0, 0, 0, 0) 100%
    );
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 800px) {
      width: 100%;
      height: 100%;
      padding: 2rem 1rem 0 1rem;
    }
  }

  @media screen and (max-width: 800px) {
    width: 100%;
    height: 100%;
    padding: 0 0.5rem;
  }
`;

export const ImageWrapper = styled.form`
  width: 76%;
  height: 100%;
  display: flex;
  background: #fff;
  position: relative;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;

  img {
    width: 100%;
  }

  .overlay {
    position: absolute;
    z-index: 5;
    height: 100%;
    width: 100%;
    background: linear-gradient(
      -15deg,
      rgba(0, 0, 0, 0.53) 10.21%,
      rgba(0, 0, 0, 0) 40.23%
    );
  }

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const Guidelines = styled(Link)<LinkProps & CommonProps>`
  color: #0F6862;
  text-decoration: underline;
`;

export const Agree = styled.section<CommonProps & RegisterProps>`
  display: ${({ register }) => (register ? "flex" : "block")};
  align-items: ${({ register }) => register && "center"};
  width: 100%;
  color: #878787;
  font-size: 14px;
  margin-top: ${({ mt }) => mt || "0"};
  margin-bottom: ${({ mb }) => mb || "10px"};
  text-align: ${({ align }) => align || "left"};

  @media screen and (max-width: 800px) {
    text-align: ${({ mobileAlign }) => mobileAlign || "left"};
    font-size: 12px;
  }
`;

export const SocialMediaIcons = styled.div<CommonProps>`
  width: 100%;
  display: flex;
  color: #878787;
  font-size: 14px;
  justify-content: center;
  margin-top: ${({ mt }) => mt || "0"};
  margin-bottom: ${({ mb }) => mb || "0"};
  text-align: ${({ align }) => align || "left"};

  @media screen and (max-width: 800px) {
    font-size: 10px;
  }
`;

export const SocialIcons = styled(Link)<LinkProps & CommonProps>`
  margin: 5px;
  text-align: ${({ align }) => align || "left"};

  @media screen and (max-width: 800px) {
    font-size: 10px;
  }
`;

export const More = styled.button<CommonProps>`
  color: #fff;
  padding: 10px 15px;
  border-radius: 32px;
  border: 1px solid #ffffff;
  text-align: ${({ align }) => align || "left"};

  @media screen and (max-width: 800px) {
    font-size: 10px;
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;

  @media screen and (max-width: 800px) {
    display: flex;
    margin-top: 0.5rem;
    flex-direction: column;
    justify-content: center;
    font-size: 13px;
  }
`;

export const Absolute = styled.div<CommonProps>`
  width: 50%;
  color: #fff;
  right: 3rem;
  z-index: 9;
  bottom: 2rem;
  text-align: right;
  font-style: italic;
  position: absolute;
  animation: ${slideInFromRight} 0.5s ease-out;

  div {
    margin: 0.5rem 0;
  }
`;

export const StyledImage = styled(Image)<ImageProps>`
  object-fit: contain;
  object-position: center;
  animation: ${slideInFromBottom} 0.5s ease-out;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const ErrorText = styled.span`
  font-size: 11px;
  color: red;
  width: 100%;
`;

export const Divider = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: 20px 0 5px 0;
`;

export const Line = styled.hr`
  width: 15%;
  height: 1px;
  border-top: 0.5px solid #535353;
`;

export const Text = styled.div<CommonProps>`
  margin: 0 10px;
  color: #535353;
  font-size: 13px;
`;

export const CheckboxWrapper = styled.div`
  margin-right: 5px;
  height: 20px;
  width: 20px;
`;