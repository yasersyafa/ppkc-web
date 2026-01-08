"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { Camera, RotateCcw, Check, X, SwitchCamera } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CameraCaptureProps {
  onCapture: (imageData: string) => void;
  onClose: () => void;
}

export function CameraCapture({ onCapture, onClose }: CameraCaptureProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [facingMode, setFacingMode] = useState<"user" | "environment">(
    "environment"
  );
  const [isCameraReady, setIsCameraReady] = useState(false);

  const startCamera = useCallback(async (facing: "user" | "environment") => {
    try {
      setIsLoading(true);
      setError(null);
      setIsCameraReady(false);

      // Stop existing stream
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
        streamRef.current = null;
      }

      console.log("Starting camera with facing mode:", facing);

      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: facing,
          aspectRatio: { ideal: 1 },
          width: { ideal: 1280 },
        },
        audio: false,
      });

      console.log("Camera stream obtained:", mediaStream.id);
      streamRef.current = mediaStream;

      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
        videoRef.current.onloadedmetadata = () => {
          console.log("Video metadata loaded");
          videoRef.current
            ?.play()
            .then(() => {
              console.log("Video playing");
              setIsCameraReady(true);
              setIsLoading(false);
            })
            .catch((playError) => {
              console.error("Video play error:", playError);
              setIsLoading(false);
            });
        };
      }
    } catch (err) {
      console.error("Error accessing camera:", err);
      setError(
        "Tidak dapat mengakses kamera. Pastikan Anda memberikan izin kamera."
      );
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    startCamera(facingMode);

    return () => {
      console.log("Cleaning up camera stream");
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
        streamRef.current = null;
      }
    };
  }, [facingMode, startCamera]);

  const switchCamera = () => {
    const newFacing = facingMode === "user" ? "environment" : "user";
    setFacingMode(newFacing);
    startCamera(newFacing);
  };

  const capturePhoto = useCallback(() => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;

      console.log(
        "Capturing photo, video dimensions:",
        video.videoWidth,
        video.videoHeight
      );

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.drawImage(video, 0, 0);
        const imageData = canvas.toDataURL("image/jpeg", 0.8);
        console.log("[v0] Photo captured, data length:", imageData.length);
        setCapturedImage(imageData);
      }
    }
  }, []);

  const retakePhoto = () => {
    setCapturedImage(null);
  };

  const confirmPhoto = () => {
    if (capturedImage) {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
      onCapture(capturedImage);
    }
  };

  const handleClose = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
    }
    onClose();
  };

  if (error) {
    return (
      <div className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4">
        <div className="bg-card rounded-xl p-6 max-w-sm w-full text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mx-auto">
            <Camera className="w-8 h-8 text-destructive" />
          </div>
          <h3 className="text-lg font-semibold text-card-foreground">
            Akses Kamera Diperlukan
          </h3>
          <p className="text-sm text-muted-foreground">{error}</p>
          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={handleClose}
              className="flex-1 bg-transparent"
            >
              Tutup
            </Button>
            <Button onClick={() => startCamera(facingMode)} className="flex-1">
              Coba Lagi
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-10 p-4 flex justify-between items-center bg-linear-to-b from-black/80 to-transparent">
        <Button
          variant="ghost"
          size="icon"
          onClick={handleClose}
          className="rounded-full bg-white/20 text-white hover:bg-white/30"
        >
          <X className="w-5 h-5" />
        </Button>
        <span className="text-white font-medium">Ambil Foto Sampah</span>
        <Button
          variant="ghost"
          size="icon"
          onClick={switchCamera}
          className="rounded-full bg-white/20 text-white hover:bg-white/30"
        >
          <SwitchCamera className="w-5 h-5" />
        </Button>
      </div>

      {/* Camera View */}
      <div className="flex-1 relative overflow-hidden bg-black">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
            <div className="text-center space-y-4">
              <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
              <p className="text-white/70 text-sm">Memuat kamera...</p>
            </div>
          </div>
        )}

        {capturedImage ? (
          <img
            src={capturedImage || "/placeholder.svg"}
            alt="Captured"
            className="w-full h-full object-cover"
          />
        ) : (
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="w-full h-full object-cover"
          />
        )}

        <canvas ref={canvasRef} className="hidden" />

        {/* Viewfinder overlay */}
        {!capturedImage && isCameraReady && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-72 h-72 relative">
              <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-primary rounded-tl-xl" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-primary rounded-tr-xl" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-primary rounded-bl-xl" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-primary rounded-br-xl" />
            </div>
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="absolute bottom-0 left-0 right-0 p-6 pb-10 bg-linear-to-t from-black/80 to-transparent">
        {capturedImage ? (
          <div className="flex justify-center gap-6">
            <Button
              onClick={retakePhoto}
              variant="outline"
              size="lg"
              className="rounded-full px-8 bg-white/20 border-white/30 text-white hover:bg-white/30"
            >
              <RotateCcw className="w-5 h-5 mr-2" />
              Ulangi
            </Button>
            <Button
              onClick={confirmPhoto}
              size="lg"
              className="rounded-full px-8 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Check className="w-5 h-5 mr-2" />
              Gunakan Foto
            </Button>
          </div>
        ) : (
          <div className="flex justify-center">
            <button
              onClick={capturePhoto}
              disabled={!isCameraReady}
              className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg transition-transform active:scale-95 disabled:opacity-50"
            >
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                <Camera className="w-8 h-8 text-primary-foreground" />
              </div>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
