"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { MapPin, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface ReportFormProps {
  capturedImage: string;
  onSubmit: (data: FormData) => void;
  onBack: () => void;
}

interface FormData {
  namaDepan: string;
  namaBelakang: string;
  alamat: string;
  catatan: string;
  latitude: number | null;
  longitude: number | null;
}

export function ReportForm({
  capturedImage,
  onSubmit,
  onBack,
}: ReportFormProps) {
  const [formData, setFormData] = useState<FormData>({
    namaDepan: "",
    namaBelakang: "",
    alamat: "",
    catatan: "",
    latitude: null,
    longitude: null,
  });
  const [isLoadingLocation, setIsLoadingLocation] = useState(true);
  const [locationError, setLocationError] = useState<string | null>(null);

  useEffect(() => {
    getCurrentLocation();
  }, []);

  const getCurrentLocation = async () => {
    setIsLoadingLocation(true);
    setLocationError(null);

    if (!navigator.geolocation) {
      setLocationError("Geolocation tidak didukung oleh browser Anda");
      setIsLoadingLocation(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        setFormData((prev) => ({ ...prev, latitude, longitude }));

        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`,
            {
              headers: {
                "Accept-Language": "id",
              },
            }
          );
          const data = await response.json();

          if (data.display_name) {
            setFormData((prev) => ({ ...prev, alamat: data.display_name }));
          }
        } catch (error) {
          console.error("Error getting address:", error);
          setFormData((prev) => ({
            ...prev,
            alamat: `Lat: ${latitude.toFixed(6)}, Long: ${longitude.toFixed(
              6
            )}`,
          }));
        }

        setIsLoadingLocation(false);
      },
      (error) => {
        console.error("Geolocation error:", error);
        switch (error.code) {
          case error.PERMISSION_DENIED:
            setLocationError(
              "Akses lokasi ditolak. Silakan aktifkan izin lokasi."
            );
            break;
          case error.POSITION_UNAVAILABLE:
            setLocationError("Informasi lokasi tidak tersedia.");
            break;
          case error.TIMEOUT:
            setLocationError("Waktu permintaan lokasi habis.");
            break;
          default:
            setLocationError("Terjadi kesalahan saat mendapatkan lokasi.");
        }
        setIsLoadingLocation(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const isFormValid =
    formData.namaDepan && formData.namaBelakang && formData.alamat;

  return (
    <div className="min-h-screen bg-background">
      {/* Header with captured image */}
      <div className="relative h-48 md:h-64 overflow-hidden">
        <img
          src={capturedImage || "/placeholder.svg"}
          alt="Captured waste"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-foreground/30 to-foreground/70" />
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center gap-2 text-background">
            <CheckCircle2 className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">Foto berhasil diambil</span>
          </div>
        </div>
        <Button
          variant="ghost"
          onClick={onBack}
          className="absolute top-4 left-4 text-background hover:bg-background/20"
        >
          ← Kembali
        </Button>
      </div>

      {/* Form */}
      <div className="p-4 md:p-6 max-w-lg mx-auto">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-foreground">
            Lengkapi Data Laporan
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            Isi informasi berikut untuk mengirimkan laporan sampah
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Nama Fields */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="namaDepan" className="text-sm font-medium">
                Nama Depan <span className="text-destructive">*</span>
              </Label>
              <Input
                id="namaDepan"
                name="namaDepan"
                placeholder="John"
                value={formData.namaDepan}
                onChange={handleInputChange}
                required
                className="bg-card border-input"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="namaBelakang" className="text-sm font-medium">
                Nama Belakang <span className="text-destructive">*</span>
              </Label>
              <Input
                id="namaBelakang"
                name="namaBelakang"
                placeholder="Doe"
                value={formData.namaBelakang}
                onChange={handleInputChange}
                required
                className="bg-card border-input"
              />
            </div>
          </div>

          {/* Alamat Field */}
          <div className="space-y-2">
            <Label htmlFor="alamat" className="text-sm font-medium">
              Alamat Lokasi <span className="text-destructive">*</span>
            </Label>
            <div className="relative">
              <Textarea
                id="alamat"
                name="alamat"
                placeholder="Alamat akan terdeteksi otomatis..."
                value={formData.alamat}
                onChange={handleInputChange}
                required
                rows={3}
                className="bg-card border-input pr-10 resize-none"
              />
              <div className="absolute top-3 right-3">
                {isLoadingLocation ? (
                  <Loader2 className="w-5 h-5 text-primary animate-spin" />
                ) : locationError ? (
                  <AlertCircle className="w-5 h-5 text-destructive" />
                ) : (
                  <MapPin className="w-5 h-5 text-primary" />
                )}
              </div>
            </div>
            {isLoadingLocation && (
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                <Loader2 className="w-3 h-3 animate-spin" />
                Mendeteksi lokasi Anda...
              </p>
            )}
            {locationError && (
              <div className="flex items-start gap-2 text-xs text-destructive">
                <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                <div>
                  <p>{locationError}</p>
                  <button
                    type="button"
                    onClick={getCurrentLocation}
                    className="underline hover:no-underline mt-1"
                  >
                    Coba lagi
                  </button>
                </div>
              </div>
            )}
            {formData.latitude && formData.longitude && (
              <p className="text-xs text-muted-foreground">
                📍 Koordinat: {formData.latitude.toFixed(6)},{" "}
                {formData.longitude.toFixed(6)}
              </p>
            )}
          </div>

          {/* Catatan Field */}
          <div className="space-y-2">
            <Label htmlFor="catatan" className="text-sm font-medium">
              Catatan Tambahan{" "}
              <span className="text-muted-foreground">(opsional)</span>
            </Label>
            <Textarea
              id="catatan"
              name="catatan"
              placeholder="Deskripsi kondisi sampah, sudah berapa lama, dll..."
              value={formData.catatan}
              onChange={handleInputChange}
              rows={3}
              className="bg-card border-input resize-none"
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={!isFormValid}
            className="w-full h-12 text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
          >
            Kirim Laporan
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            Dengan mengirim laporan, Anda membantu menjaga kebersihan lingkungan
          </p>
        </form>
      </div>
    </div>
  );
}
