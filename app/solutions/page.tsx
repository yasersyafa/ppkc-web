"use client";

import Link from "next/link";
import { Leaf, ArrowLeft, Lightbulb, RotateCcw, Recycle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SolutionsPage() {
  const solutions = [
    {
      id: "reduce",
      title: "Reduce (Mengurangi)",
      icon: Lightbulb,
      color: "from-primary to-primary/80",
      accent: "bg-primary",
      description:
        "Langkah paling utama dengan mencegah timbulnya sampah sejak awal.",
      items: [
        "Membawa Tas Belanja Sendiri: Menggunakan tas kain (tote bag) saat berbelanja untuk menghindari penggunaan kantong plastik sekali pakai.",
        "Menghindari Produk Sekali Pakai: Memilih produk yang tidak menggunakan kemasan berlebih atau plastik sachet.",
        "Membeli dalam Jumlah Besar (Bulk): Membeli kebutuhan pokok dalam ukuran besar sekaligus untuk mengurangi jumlah sampah kemasan plastik kecil.",
        "Paperless: Mengurangi penggunaan kertas dengan beralih ke dokumen digital atau e-billing.",
      ],
    },
    {
      id: "reuse",
      title: "Reuse (Menggunakan Kembali)",
      icon: RotateCcw,
      color: "from-accent to-accent/80",
      accent: "bg-accent",
      description:
        "Menggunakan kembali barang yang masih layak pakai tanpa proses pengolahan yang rumit.",
      items: [
        "Botol Minum dan Wadah Makan: Selalu membawa tumblr atau kotak makan sendiri saat membeli makanan/minuman di luar.",
        "Upcycling Kreatif: Mengubah kaleng bekas menjadi pot tanaman, atau botol kaca menjadi dekorasi lampu.",
        "Donasi Barang Layak Pakai: Memberikan pakaian, buku, atau mainan yang sudah tidak digunakan kepada orang lain yang membutuhkan.",
        "Isi Ulang (Refill): Membeli produk pembersih atau sabun dalam kemasan isi ulang untuk dimasukkan ke botol yang sudah ada.",
      ],
    },
    {
      id: "recycle",
      title: "Recycle (Mendaur Ulang)",
      icon: Recycle,
      color: "from-primary/60 to-primary/40",
      accent: "bg-primary/60",
      description:
        "Upaya terakhir memproses sampah menjadi bahan baku baru dengan pengolahan kembali.",
      items: [
        "Pilah Sampah dari Rumah: Memisahkan sampah organik (sisa makanan) dan anorganik (plastik, kertas, logam) agar mudah diolah.",
        "Pengomposan: Mengolah sampah organik dapur menjadi pupuk kompos untuk tanaman.",
        "Menyetor ke Bank Sampah: Menyerahkan sampah plastik, kertas, dan logam ke pengepul atau bank sampah untuk dikirim ke pabrik daur ulang.",
        "Membeli Produk Hasil Daur Ulang: Mendukung ekonomi sirkular dengan membeli produk yang terbuat dari bahan daur ulang (misalnya kertas daur ulang atau tisu berbahan serat bambu).",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Kembali</span>
          </Link>
          <h1 className="text-lg md:text-xl font-bold text-foreground">
            Cara Mengelola Sampah
          </h1>
          <div className="w-12" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 md:py-16">
        <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-background to-accent/10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Leaf className="w-8 h-8 text-primary" />
            <span className="text-sm font-semibold text-primary">
              Panduan Praktis
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-foreground mb-4 leading-tight">
            Solusi Penanganan Sampah
          </h2>
          <p className="text-center text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Reduce, Reuse, Recycle - Tiga langkah mudah untuk mengurangi sampah
            dan menjaga kelestarian lingkungan
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {solutions.map((solution) => {
              const IconComponent = solution.icon;
              return (
                <div
                  key={solution.id}
                  className="group relative overflow-hidden rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300"
                >
                  {/* Background gradient */}
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${solution.color} opacity-5 group-hover:opacity-10 transition-opacity`}
                  />

                  {/* Card content */}
                  <div className="relative p-6 md:p-8">
                    {/* Icon */}
                    <div
                      className={`w-12 h-12 rounded-lg ${solution.accent} flex items-center justify-center mb-4`}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                      {solution.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm md:text-base text-muted-foreground mb-6">
                      {solution.description}
                    </p>

                    {/* Items list */}
                    <div className="space-y-3">
                      {solution.items.map((item, idx) => (
                        <div key={idx} className="flex gap-3">
                          <div
                            className={`w-1.5 h-1.5 rounded-full ${solution.accent} mt-2 shrink-0`}
                          />
                          <p className="text-sm text-foreground leading-relaxed">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-20 bg-linear-to-br from-primary/10 via-background to-accent/10">
        <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Mulai Terapkan Sekarang
          </h3>
          <p className="text-muted-foreground mb-8 text-base md:text-lg">
            Setiap langkah kecil yang Anda lakukan berkontribusi besar untuk
            menjaga kelestarian lingkungan. Yuk, mulai dari sekarang untuk masa
            depan yang lebih hijau!
          </p>
          <Link href="/">
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              Laporkan Sampah Menumpuk
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer spacing */}
      <div className="h-8" />
    </div>
  );
}
