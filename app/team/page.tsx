import { Leaf, ArrowLeft, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const teamMembers = [
  {
    name: "Muhammad Zacky Afdjani",
    nim: "44523010073",
    photo: "/zacky.jpg",
  },
  {
    name: "Salsabila Latifatusiriyah",
    nim: "4612401029",
    photo: "/salsabila.jpg",
  },
  {
    name: "Deliya Afifah",
    nim: "43123010224",
    photo: "/deliya.jpg",
  },
  {
    name: "Galih Purnama Adji",
    nim: "44223010050",
    photo: "/galih.jpg",
  },
  {
    name: "Syagara Fadia",
    nim: "46124010104",
    photo: "/fadia.jpg",
  },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-background to-accent/10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

        {/* Navigation */}
        <nav className="relative z-10 flex items-center justify-between p-4 md:p-6 max-w-6xl mx-auto">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/Logo.png" alt="PPK-C Logo" width={70} height={70} />
            <span className="text-xl font-bold text-foreground">PPK-C</span>
          </Link>
          <Link href="/">
            <Button
              variant="outline"
              size="sm"
              className="gap-2 bg-transparent"
            >
              <ArrowLeft className="w-4 h-4" />
              Kembali
            </Button>
          </Link>
        </nav>

        {/* Header Content */}
        <div className="relative z-10 px-4 py-12 md:py-16 max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/15 text-accent text-sm font-medium mb-4">
            <GraduationCap className="w-4 h-4" />
            Tim Pengembang
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Profil <span className="text-primary">Tim Kami</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Kenali para mahasiswa yang berdedikasi dalam mengembangkan platform
            PPK-C untuk Ciputat yang lebih hijau
          </p>
        </div>
      </header>

      {/* Team Members Grid */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group relative bg-card rounded-3xl border border-border overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
              >
                {/* Decorative Background */}
                <div className="absolute top-0 left-0 right-0 h-24 bg-linear-to-br from-primary to-primary/80" />

                {/* Photo Placeholder */}
                <div className="relative pt-8 px-6">
                  <div className="relative mx-auto w-32 h-32 md:w-36 md:h-36 rounded-2xl bg-secondary border-4 border-card shadow-lg overflow-hidden">
                    {/* Photo placeholder - ready for image */}
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Member Info */}
                <div className="p-6 pt-4 text-center">
                  {/* Role Badge
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/15 text-accent text-xs font-medium mb-3">
                    {member.role}
                  </div> */}

                  {/* Name */}
                  <h3 className="text-xl font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>

                  {/* NIM */}
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <GraduationCap className="w-4 h-4" />
                    <span className="text-sm font-mono">{member.nim}</span>
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <div className="h-1 bg-linear-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Quote Section */}
      <section className="py-12 md:py-16 bg-card">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-linear-to-br from-primary/5 to-accent/5 rounded-3xl p-8 md:p-12 border border-border">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Leaf className="w-8 h-8 text-primary" />
            </div>
            <blockquote className="text-xl md:text-2xl font-medium text-card-foreground mb-4 text-balance">
              &quot;Bersama membangun Ciputat yang lebih bersih, sehat, dan
              berkelanjutan melalui teknologi dan kolaborasi.&quot;
            </blockquote>
            <p className="text-muted-foreground">- Tim PPK-C</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-secondary/50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm">
            PPK-C - Platform Digital Pionir untuk Ciputat yang Lebih Hijau
          </p>
        </div>
      </footer>
    </div>
  );
}
