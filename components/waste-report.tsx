"use client";

import { useState } from "react";
import { CameraCapture } from "./camera-capture";
import { ReportForm } from "./report-form";
import { SuccessScreen } from "./success-screen";

type Step = "idle" | "camera" | "form" | "success";

export function WasteReport() {
  const [step, setStep] = useState<Step>("idle");
  const [capturedImage, setCapturedImage] = useState<string | null>(null);

  const handleStartReport = () => {
    setStep("camera");
  };

  const handleCapture = (imageData: string) => {
    setCapturedImage(imageData);
    setStep("form");
  };

  const handleCameraClose = () => {
    setStep("idle");
  };

  const handleFormSubmit = (data: any) => {
    console.log("[v0] Form submitted:", {
      ...data,
      image: capturedImage?.substring(0, 50) + "...",
    });
    setStep("success");
  };

  const handleFormBack = () => {
    setStep("camera");
  };

  const handleReset = () => {
    setCapturedImage(null);
    setStep("idle");
  };

  if (step === "camera") {
    return (
      <CameraCapture onCapture={handleCapture} onClose={handleCameraClose} />
    );
  }

  if (step === "form" && capturedImage) {
    return (
      <ReportForm
        capturedImage={capturedImage}
        onSubmit={handleFormSubmit}
        onBack={handleFormBack}
      />
    );
  }

  if (step === "success") {
    return <SuccessScreen onReset={handleReset} />;
  }

  return null;
}
