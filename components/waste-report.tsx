"use client";

import { useState } from "react";
import { Camera, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
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

  // Initial idle screen
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-24 h-24 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
          <Camera className="w-12 h-12 text-primary" />
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-foreground">
            Lapor Sampah Menumpuk
          </h1>
          <p className="text-muted-foreground">
            Ambil foto dan laporkan lokasi sampah yang menumpuk di lingkungan
            Anda
          </p>
        </div>

        <Button
          onClick={handleStartReport}
          size="lg"
          className="w-full h-12 text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90"
        >
          <Camera className="w-5 h-5 mr-2" />
          Mulai Pengambilan Foto
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>

        <p className="text-xs text-muted-foreground">
          Mohon pastikan kamera Anda aktif dan izin akses kamera telah diberikan
        </p>
      </div>
    </div>
  );
}
