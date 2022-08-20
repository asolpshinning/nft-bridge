import React from "react";

export type LoadingButtonStateType =
  | "idle"
  | "submitting"
  | "step2"
  | "step3"
  | "confirmed"
  | "failed"
  | "rejected";
export type LoadingButtonTextType = {
  state: LoadingButtonStateType;
  idleText: string;
  submittingText: string;
  step2Text?: string;
  step3Text?: string;
  confirmedText: string;
  failedText?: string;
  rejectedText?: string;
};

export const LoadingButtonText = ({
  state,
  idleText,
  submittingText,
  step2Text,
  step3Text,
  confirmedText,
  failedText,
  rejectedText,
}: LoadingButtonTextType) => {
  switch (state) {
    case "idle":
      return <>{idleText}</>;
    case "submitting":
      return (
        <div className="flex justify-center items-center ">
          <img
            src="/loading-circle.jpeg"
            aria-label="loading"
            className="h-6 mr-1 animate-spin bg-white rounded-full"
          />
          <span>{submittingText}</span>
        </div>
      );
    case "step2":
      return (
        <div className="flex justify-center items-center ">
          <img
            src="/loading-circle.jpeg"
            aria-label="loading"
            className="h-6 mr-1 animate-spin bg-white rounded-full"
          />
          <span>{step2Text}</span>
        </div>
      );
    case "step3":
      return (
        <div className="flex justify-center items-center ">
          <img
            src="/loading-circle.jpeg"
            aria-label="loading"
            className="h-6 mr-1 animate-spin bg-white rounded-full"
          />
          <span>{step3Text}</span>
        </div>
      );
    case "confirmed":
      return <>{confirmedText}</>;
    case "failed":
      return <>{failedText}</>;
    case "rejected":
      return <>{rejectedText}</>;
    default:
      return <>{idleText}</>;
  }
};

export default LoadingButtonText;
