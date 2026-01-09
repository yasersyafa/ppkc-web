"use client";

import { useState } from "react";
import {
  Trash2,
  Eye,
  Settings,
  ArrowRight,
  Leaf,
  FileText,
  Package,
  AlertTriangle,
  Calendar,
  BarChart3,
  Truck,
  Factory,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface PillarDetailProps {
  pillar: "pilah" | "pantau" | "kelola";
  onClose: () => void;
}

function PillarDetail({ pillar, onClose }: PillarDetailProps) {
  const details = {
    pilah: {
      title: "PILAH",
      subtitle: "Langkah Awal di Tangan Anda",
      description:
        "Pilah adalah aksi nyata pertama yang dilakukan di rumah. Melalui platform ini, kami memberikan panduan kepada warga untuk memisahkan sampah berdasarkan jenisnya.",
      color: "bg-primary",
      textColor: "text-primary",
      items: [
        {
          icon: Leaf,
          title: "Organik",
          desc: "Sisa makanan dan dedaunan untuk kompos",
        },
        {
          icon: Package,
          title: "Anorganik",
          desc: "Plastik, kertas, dan logam yang bernilai ekonomis (daur ulang)",
        },
        {
          icon: AlertTriangle,
          title: "Residu/B3",
          desc: "Sampah berbahaya yang membutuhkan penanganan khusus",
        },
      ],
      quote: "Memilah berarti mempermudah proses pemanfaatan kembali sampah.",
    },
    pantau: {
      title: "PANTAU",
      subtitle: "Transparansi di Ujung Jari",
      description:
        "Fitur Pantau memungkinkan warga untuk terhubung langsung dengan sistem pengumpulan sampah digital.",
      color: "bg-accent",
      textColor: "text-accent",
      items: [
        {
          icon: Calendar,
          title: "Jadwal Pengangkutan",
          desc: "Lihat jadwal rutin pengangkutan sampah di wilayah Anda",
        },
        {
          icon: Truck,
          title: "Status Real-time",
          desc: "Lacak status pengumpulan sampah secara langsung",
        },
        {
          icon: BarChart3,
          title: "Data Statistik",
          desc: "Lihat data sampah yang berhasil dikurangi melalui pemilahan",
        },
      ],
      quote:
        "Memantau berarti memastikan setiap sampah tertangani dengan benar.",
    },
    kelola: {
      title: "KELOLA",
      subtitle: "Aksi Nyata untuk Keberlanjutan",
      description:
        "Kelola adalah tahap akhir di mana sampah yang telah terpilah dan terpantau diproses secara bertanggung jawab. PPK-C bekerja sama dengan berbagai pihak.",
      color: "bg-primary",
      textColor: "text-primary",
      items: [
        {
          icon: Leaf,
          title: "Sampah Organik",
          desc: "Diolah menjadi pupuk atau pakan",
        },
        {
          icon: Factory,
          title: "Sampah Anorganik",
          desc: "Disalurkan ke industri daur ulang",
        },
        {
          icon: Trash2,
          title: "Pengurangan TPA",
          desc: "Mengurangi penumpukan sampah di tempat pembuangan akhir",
        },
      ],
      quote:
        "Mengelola berarti mengubah sampah menjadi sumber daya berkelanjutan.",
    },
  };

  const data = details[pillar];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm">
      <div className="bg-card rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className={cn("p-6 rounded-t-3xl", data.color)}>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground">
                {data.title}
              </h3>
              <p className="text-primary-foreground/80 mt-1">{data.subtitle}</p>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
            >
              <X className="w-5 h-5 text-primary-foreground" />
            </button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <p className="text-muted-foreground leading-relaxed">
            {data.description}
          </p>

          <div className="space-y-4">
            {data.items.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 p-4 rounded-xl bg-secondary/50"
              >
                <div
                  className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center shrink-0",
                    data.color
                  )}
                >
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div
            className={cn(
              "p-4 rounded-xl border-l-4",
              pillar === "pantau"
                ? "border-accent bg-accent/10"
                : "border-primary bg-primary/10"
            )}
          >
            <p className={cn("font-medium italic", data.textColor)}>
              &quot;{data.quote}&quot;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PillarInfographic() {
  const [activePillar, setActivePillar] = useState<
    "pilah" | "pantau" | "kelola" | null
  >(null);

  const pillars = [
    {
      id: "pilah" as const,
      icon: Trash2,
      title: "PILAH",
      subtitle: "Langkah Awal di Tangan",
      desc: "Pisahkan sampah organik, anorganik, dan B3 dari rumah",
      color: "bg-primary",
      hoverColor: "hover:bg-primary/90",
      ringColor: "ring-primary",
    },
    {
      id: "pantau" as const,
      icon: Eye,
      title: "PANTAU",
      subtitle: "Transparansi di Ujung Jari",
      desc: "Lacak jadwal, status, dan statistik pengumpulan sampah",
      color: "bg-accent",
      hoverColor: "hover:bg-accent/90",
      ringColor: "ring-accent",
    },
    {
      id: "kelola" as const,
      icon: Settings,
      title: "KELOLA",
      subtitle: "Aksi Nyata untuk Keberlanjutan",
      desc: "Proses dan daur ulang sampah secara bertanggung jawab",
      color: "bg-primary",
      hoverColor: "hover:bg-primary/90",
      ringColor: "ring-primary",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <FileText className="w-4 h-4" />
            Tiga Pilar Utama
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Apa itu Pilah, Pantau, dan Kelola?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Untuk memudahkan warga dalam berpartisipasi, PPK-C berlandaskan pada
            tiga pilar utama
          </p>
        </div>

        {/* Infographic Flow */}
        <div className="relative">
          {/* Desktop Flow Line */}
          <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-1 bg-border -translate-y-1/2 z-0">
            <div className="absolute left-1/4 top-1/2 -translate-y-1/2 -translate-x-1/2">
              <ArrowRight className="w-6 h-6 text-muted-foreground" />
            </div>
            <div className="absolute left-3/4 top-1/2 -translate-y-1/2 -translate-x-1/2">
              <ArrowRight className="w-6 h-6 text-muted-foreground" />
            </div>
          </div>

          {/* Pillar Cards */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 relative z-10">
            {pillars.map((pillar, index) => (
              <div key={pillar.id} className="flex flex-col items-center">
                {/* Mobile Arrow */}
                {index > 0 && (
                  <div className="md:hidden flex justify-center py-4">
                    <ArrowRight className="w-6 h-6 text-muted-foreground rotate-90" />
                  </div>
                )}

                <button
                  onClick={() => setActivePillar(pillar.id)}
                  className={cn(
                    "group w-full bg-card rounded-2xl p-6 border-2 border-border transition-all duration-300",
                    "hover:shadow-xl hover:scale-105 hover:border-transparent",
                    `focus:outline-none focus:ring-4 focus:${pillar.ringColor}/30`
                  )}
                >
                  {/* Icon Circle */}
                  <div
                    className={cn(
                      "w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center transition-transform group-hover:scale-110",
                      pillar.color
                    )}
                  >
                    <pillar.icon className="w-10 h-10 text-primary-foreground" />
                  </div>

                  {/* Step Number */}
                  <div className="flex justify-center mb-3">
                    <span
                      className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold",
                        pillar.color,
                        "text-primary-foreground"
                      )}
                    >
                      {index + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-card-foreground mb-1">
                    {pillar.title}
                  </h3>
                  <p
                    className={cn(
                      "text-sm font-medium mb-3",
                      pillar.id === "pantau" ? "text-accent" : "text-primary"
                    )}
                  >
                    {pillar.subtitle}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {pillar.desc}
                  </p>

                  {/* CTA */}
                  <div
                    className={cn(
                      "mt-4 inline-flex items-center gap-1 text-sm font-medium transition-colors",
                      pillar.id === "pantau" ? "text-accent" : "text-primary"
                    )}
                  >
                    Pelajari Selengkapnya
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Summary */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-card border border-border shadow-sm">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <Trash2 className="w-4 h-4 text-primary-foreground" />
              </div>
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                <Eye className="w-4 h-4 text-accent-foreground" />
              </div>
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <Settings className="w-4 h-4 text-primary-foreground" />
              </div>
            </div>
            <span className="text-sm text-muted-foreground">
              Klik setiap pilar untuk info lengkap
            </span>
          </div>
        </div>
      </div>

      {/* Modal Detail */}
      {activePillar && (
        <PillarDetail
          pillar={activePillar}
          onClose={() => setActivePillar(null)}
        />
      )}
    </section>
  );
}
