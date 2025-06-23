import { slideInFromBottom } from "@/animation";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const SignUpWrapper = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  background: #fff;

  align-items: center;
  justify-content: space-between;
  /* background: rgba(243, 243, 243, 0.65); */
  /* border-top-left-radius: 20px; */
  /* border-bottom-left-radius: 20px; */
  @media screen and (max-width: 800px) {
    align-items: center;
    border-radius: 0px;
    background: transparent;
  }
`;

export const SignUpForm = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
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
    /* background: rgba(243, 243, 243, 0.65); */
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
      /* padding-top: 2rem; */
    }
  }

  @media screen and (max-width: 800px) {
    width: 100%;
    height: 100%;
    padding: 0 0.5rem;
  }
`;

export const ImageWrapper = styled.form`
  width: 50%;
  height: 100%;
  display: flex;
  background: #fff;
  position: relative;
  align-items: center;
  justify-content: space-between;

  overflow: hidden;
  /* object-fit: fill; */

  /* border-radius: 20px; */

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

export const Guidelines = styled(Link)`
  color: #f68b1e;
  text-decoration: underline;
  margin-left: 4px;
`;

interface AgreeProps {
  mt?: string;
  mb?: string;
  align?: string;
  mobileAlign?: string;
}

export const Agree = styled.section<AgreeProps>`
  width: 100%;
  display: flex;
  align-items: center;

  color: #878787;
  font-size: 12px;
  margin-top: ${({ mt }) => (mt ? mt : "10px")};
  margin-bottom: ${({ mb }) => (mb ? mb : 0)};
  text-align: ${({ align, mobileAlign }) =>
    align ? align : mobileAlign ? "center" : "left"};
  justify-content: ${({ mobileAlign, align }) =>
    align ? align : mobileAlign ? "center" : "flex-start"};

  @media screen and (max-width: 800px) {
    justify-content: ${({ mobileAlign }) =>
      mobileAlign ? "center" : "flex-start"};
    font-size: 12px;
  }
`;

interface SocialMediaIconsProps {
  mt?: string;
  mb?: string;
  align?: string;
}

export const SocialMediaIcons = styled.div<SocialMediaIconsProps>`
  width: 100%;
  display: flex;
  color: #878787;
  font-size: 14px;
  justify-content: center;
  margin-top: ${({ mt }) => (mt ? mt : 0)};
  margin-bottom: ${({ mb }) => (mb ? mb : 0)};
  text-align: ${({ align }) => (align ? align : "left")};

  @media screen and (max-width: 800px) {
    font-size: 10px;
  }
`;

interface SocialIconsProps {
  align?: string;
}

export const SocialIcons = styled(Link)<SocialIconsProps>`
  margin: 5px;
  text-align: ${({ align }) => (align ? align : "left")};

  @media screen and (max-width: 800px) {
    font-size: 10px;
  }
`;

interface MoreProps {
  align?: string;
}

export const More = styled.button<MoreProps>`
  color: #fff;
  padding: 10px 15px;
  border-radius: 32px;
  border: 1px solid #ffffff;
  text-align: ${({ align }) => (align ? align : "left")};

  @media screen and (max-width: 800px) {
    font-size: 10px;
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  @media screen and (max-width: 800px) {
    /* flex: 1; */
    display: flex;
    margin-top: 0.5rem;
    flex-direction: column;
    justify-content: center;
  }
`;

export const Absolute = styled.div`
  width: 86%;
  color: #fff;
  right: 2rem;
  z-index: 9;
  bottom: 2rem;
  text-align: right;
  font-style: italic;
  position: absolute;

  div {
    margin: 0.5rem 0;
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
  /* background-color: #535353; */
  border-top: 0.5px solid #535353;
`;

export const Text = styled.div`
  margin: 0 10px;
  color: #535353;
  font-size: 12px;
`;

export const CheckboxWrapper = styled.div`
  margin-right: 5px;
  height: 20px;
  width: 20px;
`;

export const StyledImage = styled(Image)`
  object-fit: contain;
  object-position: center;
  animation: ${slideInFromBottom} 0.5s ease-out; /* Adjust the duration as needed */
  @media screen and (max-width: 800px) {
    display: none;
  }
`;