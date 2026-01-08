"use client";

import { useState } from "react";
import { CameraCapture } from "./camera-capture";
import { ReportForm } from "./report-form";
import { SuccessScreen } from "./success-screen";
import { useReports } from "@/lib/report-context";

type Step = "idle" | "camera" | "form" | "success";

interface WasteReportProps {
  onComplete: () => void;
}

export function WasteReport({ onComplete }: WasteReportProps) {
  const [step, setStep] = useState<Step>("camera");
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const { addReport } = useReports();

  const handleCapture = (imageData: string) => {
    setCapturedImage(imageData);
    setStep("form");
  };

  const handleCameraClose = () => {
    onComplete();
  };

  const handleFormSubmit = (data: any) => {
    addReport({
      namaDepan: data.namaDepan,
      namaBelakang: data.namaBelakang,
      alamat: data.alamat,
      catatan: data.catatan,
      latitude: data.latitude,
      longitude: data.longitude,
      image: capturedImage || "",
    });
    setStep("success");
  };

  const handleFormBack = () => {
    setStep("camera");
  };

  const handleReset = () => {
    setCapturedImage(null);
    onComplete();
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
