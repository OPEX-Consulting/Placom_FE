"use client";
import Link from "next/link";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import { useLayoutEffect, useState, useEffect, Suspense } from "react";
import { redirect, useRouter, useSearchParams } from "next/navigation";
import api from "@/services/api";
import { Loader2Icon } from "lucide-react"
import Input from "@/shared/Input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox"
import AuthLayout from "../Authlayout";
import { H1, H3 } from "@/shared/heading/headingStyles";
import { isValidEmail } from "@/services/utils";
import { Loader, LoaderLine } from "@/shared/authCard/cardStyles";
import { ErrorResponse, RegisterResponse, } from "@/types/index"
import { RegisterUser } from "@/services/apis/auth"
import {
  More,
  Absolute,
  ErrorText,
  Guidelines,
  StyledImage,
  ImageWrapper,
  ButtonWrapper,
  LoginForm as SignUpForm,
  LoginWrapper as SignUpWrapper,
} from "../login/loginStyle";
import PasswordStrengthChecker from "@/shared/passwordChecker";


// Type definitions
interface User {
  email: string;
  password: string;
  type: string;
  invite_passcode?: string;
  role?: string;
}

interface ApiResponse {
  message: string;
  data?: {
    verified?: boolean;
  };
}

interface ApiError {
  message?: string;
  data?: {
    verified?: boolean;
  };
  response?: {
    data?: {
      message?: string;
      verified?: boolean;

    };
  };
}


const useRegisterMutation = () => {
  return useMutation<RegisterResponse, ErrorResponse, User>({
    mutationFn: ({ email, password, role, invite_passcode }: User): Promise<RegisterResponse> => RegisterUser(email, password, role, invite_passcode),    // onError: (error: ErrorResponse) => {
    //     // console.error('Login error:', error);
    //     toast.error(error?.message)
  });
};
const SignUp: React.FC = () => {

  const { mutateAsync, isPending } = useRegisterMutation()


  const router = useRouter();
  const searchParams = useSearchParams();
  const passcodeFromMagicLink: string | undefined = searchParams.get("passcode") ?? undefined;
  const roleFromMagicLink: string | undefined = searchParams.get("role") ?? undefined;
  const invitedUserEmail: string | undefined = searchParams.get("email") ?? undefined;

  // Store values in localStorage/sessionStorage with null checks
  if (typeof window !== "undefined") {
    if (roleFromMagicLink) localStorage.setItem("roleFromMagicLink", roleFromMagicLink);

  }

  const [email, setEmail] = useState<string>("");
  const [checkPass, setCheckPass] = useState<boolean | undefined>(undefined);
  const [adhere, setAdhere] = useState<boolean>(false)
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<boolean>(false);
  const [btnName, setBtnName] = useState<string>("Create Account");
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [confirmPasswordError, setConfirmPasswordError] = useState<boolean>(false);

  useEffect(() => {
    if (invitedUserEmail) {
      setEmail(invitedUserEmail);
    }
  }, [invitedUserEmail]);

  // Set the role and passcode to session when the user visits using magic link
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (roleFromMagicLink) {
        sessionStorage.setItem("roleFromMagicLink", roleFromMagicLink);
        localStorage.setItem("roleFromMagicLink", roleFromMagicLink);
      }
      if (passcodeFromMagicLink) {
        sessionStorage.setItem("passcodeFromMagicLink", passcodeFromMagicLink);
        localStorage.setItem("passcodeFromMagicLink", passcodeFromMagicLink);
      }
    }
  }, [passcodeFromMagicLink, roleFromMagicLink]);

  useLayoutEffect(() => {
    // When the login page loads, preload these pages to improve routing speed and app performance
    const prefetchLogin = "/auth/login";
    const prefetchVP = "/auth/verification";
    const prefetchRP = "/auth/reset-password";

    const prefetchData = (): void => {
      router.prefetch(prefetchLogin);
      router.prefetch(prefetchRP);
      router.prefetch(prefetchVP);
    };

    prefetchData();
  }, [router]);

  const handleSubmit = async (): Promise<void> => {
    // e.preventDefault();

    // Input fields checks
    if (!email?.trim()) {
      setEmailError(true);
    } else if (isValidEmail(email) === false) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    if (!password?.trim()) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }

    if (!confirmPassword?.trim() || confirmPassword !== password) {
      setConfirmPasswordError(true);
      return;
    } else {
      setConfirmPasswordError(false);
    }

    if (confirmPassword !== password) {
      setConfirmPasswordError(true);
    } else {
      setConfirmPasswordError(false);
    }

    // Don't trigger the create account API if the params are not met
    if (
      !email?.trim() ||
      !password?.trim() ||
      !confirmPassword?.trim() ||
      isValidEmail(email) === false ||
      checkPass === false
    ) {
      return;
    }

    // Get the code from localStorage
    const passcodeFromMagicLinkInLocal: string | null = localStorage.getItem("passcodeFromMagicLink");
    const role: string | null = localStorage.getItem("roleFromMagicLink");

    const payload: User = {
      email: email,
      password: password,
      type: "credentials",
      // The backend needs the passcode from a user invited by a corporate entity. Dynamically add it to the payload obj when it is available
      invite_passcode: passcodeFromMagicLinkInLocal?.trim() || passcodeFromMagicLink?.trim(),
      role: role || undefined,
    };

    try {
      // Make a request to the register endpoint
      await mutateAsync(payload, {
        onSuccess: (data: ApiResponse) => {
          if (data) {
            setBtnName("Account Created Successfully!");
            toast(data?.message, {
              hideProgressBar: true,
              autoClose: 800,
              type: "success",
            });

            // Redirect to verify account
            router.push("/auth/verification");
          }
        },
        onError: (error: ErrorResponse) => {
          setBtnName("Create Account");
          toast(error?.message || "Something went wrong! Please try again.", {
            hideProgressBar: true,
            autoClose: 1000,
            type: "error",
          });

          // When the error message is account verification issue
          // if (error?.data?.verified === false) {
          //   router.push("/auth/login");
          // }
        },
      });

      // Store the user email in local storage to use it on otp page
      localStorage.setItem("email", email);
    } catch (error: unknown) {
      // Handle login error
      const apiError = error as ApiError;
      toast(apiError?.response?.data?.message || "An error occurred", {
        hideProgressBar: true,
        autoClose: 800,
        type: "error",
      });
    }
  };

  // if (status === "authenticated") return redirect("/market");

  return (
    <AuthLayout register={false}>
      <SignUpWrapper>
        <SignUpForm>
          <form className="form relative" onSubmit={handleSubmit}>
            <div
              className={`${isPending ? "flex" : "hidden"
                } absolute top-0 left-0 bg-[#ffffff56] h-full w-full z-10`}
            >
              <Loader>
                <LoaderLine></LoaderLine>
              </Loader>
            </div>
            <div className="w-full flex flex-col space-y-1 mb-2">
              <H1>{"First time here?"}</H1>
              <H3>{"Create your account below"}</H3>
            </div>

            {!invitedUserEmail && (
              <Input
                name="email"
                error={emailError}
                type="text"
                value={email}
                placeholder={"Email address"}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              />
            )}

            {invitedUserEmail && (
              <Input
                name="email"
                isDisabled={true}
                error={emailError}
                type="text"
                value={invitedUserEmail}
                placeholder={"Email address or phone number"}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              />
            )}
            {emailError && <ErrorText>Please enter a valid email</ErrorText>}
            <div style={{ margin: "10px 0", width: "100%" }}>
              <Input
                name="password"
                type={"password"}
                error={passwordError}
                value={password}
                placeholder={"Type a password"}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
              />
              {passwordError && (
                <ErrorText>Password must be at least 8 characters</ErrorText>
              )}
            </div>
            <Input
              name="confirmPassword"
              type={"password"}
              error={confirmPasswordError}
              value={confirmPassword}
              placeholder={"Confirm password"}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
            />
            {confirmPasswordError && (
              <ErrorText>Password does not match</ErrorText>
            )}

            <PasswordStrengthChecker
              checkStatus={(status: boolean) => setCheckPass(status)}
              password={password}
            />

            <div className="flex flex-row gap-2  mt-5  !items-start !justify-start p-1 w-full">
              <Checkbox
                checked={adhere}
                defaultChecked={adhere}
                className="data-[state=checked]:border-green-900 border-2 data-[state=checked]:bg-teal-800 data-[state=checked]:text-white dark:data-[state=checked]:border-green-700 dark:data-[state=checked]:bg-teal-700"
                onClick={() => setAdhere(!adhere)}
                onCheckedChange={(checked) => {
                  return checked
                }
                }
              />
              <div className="-font-work-sans col-span-2 flex items-start justify-start">
                <p className="text-[#000] text-sm">
                  I agree to adhere to
                </p>
                <Link
                  className="text-[#0F6862] pl-1 text-sm underline"
                  href={"/privacy-policy"}
                >
                  {"PLACOM Privacy Policy"}
                </Link>
              </div>
            </div>


            <ButtonWrapper className="mt-2">
              <Button
                variant={'primary'}
                size={'lg'}
                disabled={adhere ? false : true}
                className="w-full bg-[#0F6862] rounded-none !py-6 px-4 text-lg"
                onClick={() => handleSubmit()}
              >{isPending ? "Creating your account..." : btnName}</Button>
              <div className="mt-10 flex items-end justify-end ">
                Already have an account?
                <Guidelines href={"/auth/login"}>Login</Guidelines>
              </div>
            </ButtonWrapper>

          </form>
        </SignUpForm>
        {/* <ImageWrapper >
          <div className="overlay"></div>
          <StyledImage className="" alt="#" src={"/assets/Image.png"} fill />
          <Absolute className="overflow-hidden pr-42">
            <div>Did you know?</div>
            <div>
              Farmers will have to grow 70 percent more food than what is
              currently produced to feed the world's growing population by 2050.
            </div>
            <More>see more facts</More>
          </Absolute>
        </ImageWrapper> */}
        <ImageContent />
      </SignUpWrapper>
    </AuthLayout>
  );
};

const ImageContent = () => {
  const [imageState, setImageState] = useState<'loading' | 'loaded' | 'error'>('loading');

  return (<ImageWrapper >
    <div className="overlay"></div>
    <StyledImage alt="#"
      src={"/assets/Image.png"}
      fill
      onLoad={() => setImageState('loaded')}
      onError={() => setImageState('error')}
      loading="lazy"
      className={`transition-opacity duration-300 ${imageState === 'loaded' ? 'opacity-100' : 'opacity-0'
        }`}
    />

          {/* Loading state */}
      {imageState === 'loading' && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/80 z-10">
          <Loader2Icon className="animate-spin h-8 w-8 text-[#000]" />
        </div>
      )}
      

    <Absolute className="overflow-hidden pr-6 md:pr-15 lg:pr-43 ">
      <div>Did you know?</div>
      <div>
        Farmers will have to grow 70 percent more food than what is
        currently produced to feed the world's growing population by 2050.
      </div>
      <More>see more facts</More>
    </Absolute>
  </ImageWrapper>)
}

export default function RegisterForm() {
  return (
    <Suspense fallback={<div className='h-screen w-full flex flex-col justify-center items-center'><Loader2Icon className='animate-spain h-10 w-10' /></div>}>
      <SignUp />
    </Suspense>
  );
}