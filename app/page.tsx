"use client";

import { useState } from "react";
import {
  Recycle,
  Trash2,
  MapPin,
  Camera,
  Users,
  ArrowRight,
  FileText,
  Target,
  Eye,
  Lightbulb,
  Heart,
  Globe,
  Handshake,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { WasteReport } from "@/components/waste-report";
import { ReportTable } from "@/components/report-table";
import { ReportProvider } from "@/lib/report-context";
import { PillarInfographic } from "@/components/pillar-infographic";
import Image from "next/image";

function HomeContent() {
  const [showReport, setShowReport] = useState(false);

  if (showReport) {
    return <WasteReport onComplete={() => setShowReport(false)} />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-background to-accent/10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        {/* Navigation */}
        <nav className="relative z-10 flex items-center justify-between p-4 md:p-6 max-w-6xl mx-auto">
          <div className="flex items-center gap-2">
            {/* <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <Leaf className="w-6 h-6 text-primary-foreground" />
            </div> */}
            <Image src="/Logo.png" alt="PPK-C Logo" width={70} height={70} />
            <span className="text-xl font-bold text-foreground">PPK-C</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a
              href="#tentang"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Tentang
            </a>
            <a
              href="#pilar"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Pilar
            </a>
            <a
              href="#laporan"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Laporan
            </a>
            <a
              href="#tujuan"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Tujuan
            </a>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 px-4 py-12 md:py-24 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/15 text-accent text-sm font-medium">
                <Recycle className="w-4 h-4" />
                Platform Digital Pionir Ciputat
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
                Mengenal <span className="text-primary">PPK-C</span>
              </h1>

              <p className="text-lg md:text-xl text-accent font-medium">
                Langkah Cerdas untuk Ciputat yang Lebih Hijau
              </p>

              <p className="text-muted-foreground leading-relaxed text-pretty">
                PPK-C (Pilah, Pantau, dan Kelola) adalah platform informasi dan
                ekosistem digital pionir yang dirancang khusus untuk warga
                Ciputat. Kami hadir sebagai solusi inovatif dalam menghadapi
                tantangan pengelolaan sampah di tingkat rumah tangga hingga
                lingkungan sekitar.
              </p>

              {/* CTA Button */}
              <div className="pt-4">
                <Button
                  onClick={() => setShowReport(true)}
                  size="lg"
                  className="h-14 px-8 text-lg font-semibold bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/25 transition-all hover:scale-105 hover:shadow-xl hover:shadow-accent/30"
                >
                  <Camera className="w-5 h-5 mr-2" />
                  Lapor Sampah Menumpuk Sekarang!
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <p className="text-sm text-muted-foreground mt-3">
                  Gratis - Tanpa registrasi - Proses cepat
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
                    alt="Ilustrasi lingkungan bersih Ciputat"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-2 -right-2 w-16 h-16 bg-accent rounded-2xl flex items-center justify-center shadow-lg animate-bounce">
                  <Trash2 className="w-8 h-8 text-accent-foreground" />
                </div>
                <div className="absolute -bottom-2 -left-2 w-20 h-20 bg-primary rounded-2xl flex items-center justify-center shadow-lg">
                  <MapPin className="w-10 h-10 text-primary-foreground" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="tentang" className="py-16 md:py-24 bg-card">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <Lightbulb className="w-4 h-4" />
                Tentang Kami
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-6 text-balance">
                Bukan Sekadar Sistem Informasi
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  PPK-C adalah jembatan yang menghubungkan partisipasi aktif
                  warga dengan teknologi untuk menciptakan manajemen sampah yang
                  lebih{" "}
                  <strong className="text-card-foreground">
                    modern, transparan, dan terintegrasi
                  </strong>
                  .
                </p>
                <p>
                  Dengan semangat kolaborasi, PPK-C mengajak seluruh masyarakat
                  Ciputat untuk mengubah pandangan terhadap sampah, dari{" "}
                  <strong className="text-card-foreground">
                    masalah menjadi sumber daya
                  </strong>{" "}
                  yang bisa dikelola secara berkelanjutan.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary/10 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-primary-foreground" />
                </div>
                <p className="text-2xl font-bold text-card-foreground">10K+</p>
                <p className="text-sm text-muted-foreground">Warga Aktif</p>
              </div>
              <div className="bg-accent/10 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Recycle className="w-6 h-6 text-accent-foreground" />
                </div>
                <p className="text-2xl font-bold text-card-foreground">500+</p>
                <p className="text-sm text-muted-foreground">
                  Ton Sampah Terkelola
                </p>
              </div>
              <div className="bg-accent/10 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 text-accent-foreground" />
                </div>
                <p className="text-2xl font-bold text-card-foreground">50+</p>
                <p className="text-sm text-muted-foreground">RW Terjangkau</p>
              </div>
              <div className="bg-primary/10 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-6 h-6 text-primary-foreground" />
                </div>
                <p className="text-2xl font-bold text-card-foreground">95%</p>
                <p className="text-sm text-muted-foreground">
                  Tingkat Kepuasan
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillar Infographic Section */}
      <div id="pilar">
        <PillarInfographic />
      </div>

      {/* Report Section */}
      <section id="laporan" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/15 text-accent text-sm font-medium mb-4">
              <FileText className="w-4 h-4" />
              Pantau Progress
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Daftar Laporan Masuk
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Lihat status terkini dari semua laporan sampah yang telah
              dikirimkan oleh warga Ciputat
            </p>
          </div>

          <ReportTable />

          {/* CTA */}
          <div className="text-center mt-10">
            <Button
              onClick={() => setShowReport(true)}
              size="lg"
              className="h-12 px-6 font-semibold bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Camera className="w-5 h-5 mr-2" />
              Buat Laporan Baru
            </Button>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section id="tujuan" className="py-16 md:py-24 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Target className="w-4 h-4" />
              Tujuan PPK-C
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Mewujudkan Kemandirian Pengelolaan Sampah Berbasis Digital
            </h2>
          </div>

          {/* Vision Card */}
          <div className="bg-primary rounded-3xl p-8 md:p-10 mb-8 text-primary-foreground">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-8 h-8" />
              <h3 className="text-2xl font-bold">Visi Kami</h3>
            </div>
            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              Mewujudkan Kemandirian Pengelolaan Sampah Berbasis Digital untuk
              Ciputat yang lebih bersih, sehat, dan berkelanjutan.
            </p>
          </div>

          {/* Goals Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-card rounded-2xl p-6 border border-border">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-card-foreground mb-2">
                Edukasi Warga
              </h4>
              <p className="text-muted-foreground text-sm">
                Mengedukasi warga Ciputat tentang pentingnya memilah sampah dari
                sumbernya (rumah tangga).
              </p>
            </div>
            <div className="bg-card rounded-2xl p-6 border border-border">
              <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-accent" />
              </div>
              <h4 className="font-semibold text-card-foreground mb-2">
                Pantau Real-time
              </h4>
              <p className="text-muted-foreground text-sm">
                Kemudahan memantau jadwal pengangkutan, volume sampah, serta
                efektivitas pengelolaan secara real-time.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-6 border border-border">
              <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center mb-4">
                <Recycle className="w-6 h-6 text-accent" />
              </div>
              <h4 className="font-semibold text-card-foreground mb-2">
                Daur Ulang Tepat
              </h4>
              <p className="text-muted-foreground text-sm">
                Memastikan sampah tidak hanya berakhir di TPA, melainkan
                didistribusikan ke jalur daur ulang yang tepat.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-6 border border-border">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-card-foreground mb-2">
                Sinergi Warga
              </h4>
              <p className="text-muted-foreground text-sm">
                Menciptakan sinergi antar warga dalam menjaga kebersihan dan
                kesehatan lingkungan demi generasi mendatang.
              </p>
            </div>
          </div>

          {/* Mission Section */}
          <div className="bg-card rounded-3xl p-8 md:p-10 border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                <Target className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground">
                Misi Kami
              </h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0 text-primary-foreground font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground mb-1">
                    Mengedukasi & Memberdayakan
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Memberikan literasi berkelanjutan tentang teknik pemilahan
                    sampah yang benar sejak dari sumbernya.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center shrink-0 text-accent-foreground font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground mb-1">
                    Platform Digital
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Membangun platform yang memudahkan pemantauan jadwal
                    pengangkutan dan distribusi sampah secara akurat.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0 text-primary-foreground font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground mb-1">
                    Kolaborasi Strategis
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Bekerja sama dengan Bank Sampah, TPS3R, dan mitra daur ulang
                    profesional.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center shrink-0 text-accent-foreground font-bold">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground mb-1">
                    Nilai Ekonomis
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Mengubah paradigma dengan menyalurkan sampah anorganik
                    menjadi komoditas bernilai ekonomis.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0 text-primary-foreground font-bold">
                  5
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground mb-1">
                    Keberlanjutan Lingkungan
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Menjadi penggerak utama lingkungan Ciputat yang bersih
                    melalui integrasi teknologi dan partisipasi aktif.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-card">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/15 text-accent text-sm font-medium mb-4">
              <Handshake className="w-4 h-4" />
              Mitra Kami
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-card-foreground">
              Kolaborasi untuk Ciputat Lebih Hijau
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <div className="text-center p-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                <Recycle className="w-8 h-8 text-primary" />
              </div>
              <p className="text-sm font-medium text-card-foreground">
                Bank Sampah
              </p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 rounded-full bg-accent/15 flex items-center justify-center mx-auto mb-2">
                <Trash2 className="w-8 h-8 text-accent" />
              </div>
              <p className="text-sm font-medium text-card-foreground">TPS3R</p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <p className="text-sm font-medium text-card-foreground">
                Mitra Daur Ulang
              </p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 rounded-full bg-accent/15 flex items-center justify-center mx-auto mb-2">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <p className="text-sm font-medium text-card-foreground">
                Komunitas Warga
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent text-accent-foreground">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mari Bergabung Bersama PPK-C
          </h2>
          <p className="text-accent-foreground/80 mb-8 max-w-2xl mx-auto">
            Setiap aksi kecil Anda berkontribusi besar untuk Ciputat yang lebih
            bersih dan berkelanjutan
          </p>
          <Button
            onClick={() => setShowReport(true)}
            size="lg"
            className="h-14 px-8 text-lg font-semibold bg-card text-card-foreground hover:bg-card/90 shadow-lg"
          >
            <Camera className="w-5 h-5 mr-2" />
            Lapor Sampah Sekarang
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Image src="/Logo.png" alt="PPK-C Logo" width={70} height={70} />
              <span className="text-xl font-bold text-foreground">PPK-C</span>
            </div>
            <p className="text-muted-foreground text-sm text-center">
              2025 PPK-C Ciputat. Bersama menjaga lingkungan untuk generasi
              mendatang.
            </p>
            <div className="flex items-center gap-4">
              <Users className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                Komunitas Peduli Lingkungan Ciputat
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function HomePage() {
  return (
    <ReportProvider>
      <HomeContent />
    </ReportProvider>
  );
}
