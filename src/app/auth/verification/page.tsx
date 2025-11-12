"use client";
import React, {  useState } from "react";
interface ResetPasswordPayload {
    email: string;
}


interface ApiResponse {
    message: string;
}

interface ApiError {
    response?: {
        data?: {
            message?: string;
        };
    };
    message?: string;
}

const Verification: React.FC = () => {
    return (<div></div>)
};

export default Verification;

