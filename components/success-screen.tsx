"use client";

import { CheckCircle2, Home, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMemo } from "react";

interface SuccessScreenProps {
  onReset: () => void;
}

export function SuccessScreen({ onReset }: SuccessScreenProps) {
  const ticketId = useMemo(() => {
    return crypto.randomUUID().split("-")[0].toUpperCase();
  }, []);
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-6">
        {/* Success Icon */}
        <div className="relative">
          <div className="w-24 h-24 mx-auto rounded-full bg-primary/10 flex items-center justify-center animate-in zoom-in duration-500">
            <CheckCircle2 className="w-12 h-12 text-primary" />
          </div>
          <div className="absolute inset-0 w-24 h-24 mx-auto rounded-full bg-primary/20 animate-ping" />
        </div>

        {/* Success Message */}
        <div className="space-y-2 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
          <h1 className="text-2xl font-bold text-foreground">
            Laporan Terkirim!
          </h1>
          <p className="text-muted-foreground">
            Terima kasih atas partisipasi Anda dalam menjaga kebersihan
            lingkungan. Tim kami akan segera menindaklanjuti laporan Anda.
          </p>
        </div>

        {/* Report Summary Card */}
        <div className="bg-card border border-border rounded-xl p-4 text-left animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
          <div className="flex items-center gap-3 text-sm">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <FileText className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-medium text-card-foreground">Nomor Laporan</p>
              <p className="text-muted-foreground">#{ticketId}</p>
            </div>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-2 gap-3 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-400">
          <div className="bg-secondary/50 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-primary">24-48</p>
            <p className="text-xs text-muted-foreground">Jam estimasi respon</p>
          </div>
          <div className="bg-secondary/50 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-primary">✓</p>
            <p className="text-xs text-muted-foreground">
              Notifikasi via email
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-500">
          <Button
            onClick={onReset}
            className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Home className="w-5 h-5 mr-2" />
            Kembali ke Beranda
          </Button>
          <Button
            variant="outline"
            onClick={onReset}
            className="w-full h-12 bg-transparent"
          >
            Buat Laporan Baru
          </Button>
        </div>
      </div>
    </div>
  );
}
