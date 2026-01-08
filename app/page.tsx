"use client";

import { useState } from "react";
import {
  Leaf,
  Recycle,
  Trash2,
  MapPin,
  Camera,
  Shield,
  Users,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { WasteReport } from "@/components/waste-report";
import Image from "next/image";

export default function HomePage() {
  const [showReport, setShowReport] = useState(false);

  if (showReport) {
    console.log("Rendering WasteReport component");
    return <WasteReport />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-background to-secondary/30" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        {/* Navigation */}
        <nav className="relative z-10 flex items-center justify-between p-4 md:p-6 max-w-6xl mx-auto">
          <div className="flex items-center gap-2">
            <Image src="/Logo.png" alt="PPKC Logo" width={50} height={50} />
            <span className="text-xl font-bold text-foreground">PPK-C</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a
              href="#features"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Fitur
            </a>
            <a
              href="#cara-kerja"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Cara Kerja
            </a>
            <a
              href="#tentang"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Tentang
            </a>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 px-4 py-12 md:py-24 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Recycle className="w-4 h-4" />
                Platform Pelaporan Sampah #1
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Bersama Wujudkan{" "}
                <span className="text-primary">Ciputat Bersih</span> dan
                <span className="text-[#E27149]"> Berkelanjutan.</span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-lg text-pretty">
                Platform digital untuk memilah, memantau, dan mengelola sampah
                rumah tangga di wilayah Ciputat.
              </p>

              {/* CTA Button */}
              <div className="pt-4">
                <Button
                  onClick={() => setShowReport(true)}
                  size="lg"
                  className="h-14 px-8 text-lg font-semibold bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/30"
                >
                  <Camera className="w-5 h-5 mr-2" />
                  Lapor Sampah Menumpuk Sekarang!
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <p className="text-sm text-muted-foreground mt-3">
                  ✓ Gratis &nbsp; ✓ Tanpa registrasi &nbsp; ✓ Proses cepat
                </p>
              </div>
            </div>

            {/* Right Content - Illustration */}
            <div className="relative hidden md:block">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Main Card */}
                <div className="absolute inset-4 bg-card rounded-3xl shadow-2xl border border-border overflow-hidden">
                  <img
                    src="/clean-green-environment-recycling-illustration.jpg"
                    alt="Ilustrasi lingkungan bersih"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-2 -right-2 w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg animate-bounce">
                  <Trash2 className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="absolute -bottom-2 -left-2 w-20 h-20 bg-accent rounded-2xl flex items-center justify-center shadow-lg">
                  <MapPin className="w-10 h-10 text-accent-foreground" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Fitur Unggulan
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Kami menyediakan fitur-fitur canggih untuk memudahkan pelaporan
              sampah
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Camera className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">
                Foto Langsung
              </h3>
              <p className="text-muted-foreground text-sm">
                Ambil foto langsung dari kamera perangkat Anda tanpa perlu
                keluar aplikasi.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">
                Lokasi Otomatis
              </h3>
              <p className="text-muted-foreground text-sm">
                Alamat terdeteksi otomatis menggunakan GPS untuk akurasi lokasi
                yang tepat.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">
                Proses Cepat
              </h3>
              <p className="text-muted-foreground text-sm">
                Laporan langsung diterima dan ditindaklanjuti oleh tim dalam
                24-48 jam.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="cara-kerja" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Cara Kerja
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hanya 3 langkah mudah untuk melaporkan sampah menumpuk
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Klik Tombol Lapor
              </h3>
              <p className="text-muted-foreground text-sm">
                Tekan tombol &quot;Lapor Sampah Menumpuk Sekarang!&quot; untuk
                memulai pelaporan.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Ambil Foto
              </h3>
              <p className="text-muted-foreground text-sm">
                Gunakan kamera untuk mengambil foto kondisi sampah yang
                menumpuk.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Lengkapi Data
              </h3>
              <p className="text-muted-foreground text-sm">
                Isi nama dan lokasi Anda akan terdeteksi otomatis, lalu kirim
                laporan.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button
              onClick={() => setShowReport(true)}
              size="lg"
              className="h-14 px-8 text-lg font-semibold bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Camera className="w-5 h-5 mr-2" />
              Lapor Sampah Menumpuk Sekarang!
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-bold">10K+</p>
              <p className="text-primary-foreground/80 text-sm mt-1">
                Laporan Terkirim
              </p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold">95%</p>
              <p className="text-primary-foreground/80 text-sm mt-1">
                Ditindaklanjuti
              </p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold">50+</p>
              <p className="text-primary-foreground/80 text-sm mt-1">
                Kota Terjangkau
              </p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold">24 Jam</p>
              <p className="text-primary-foreground/80 text-sm mt-1">
                Respon Cepat
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="tentang" className="py-12 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Leaf className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">
                EcoReport
              </span>
            </div>
            <p className="text-muted-foreground text-sm text-center">
              © 2025 EcoReport. Bersama menjaga lingkungan untuk generasi
              mendatang.
            </p>
            <div className="flex items-center gap-4">
              <Users className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                Komunitas Peduli Lingkungan
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
