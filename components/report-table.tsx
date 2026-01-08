"use client";

import { useState } from "react";
import {
  MapPin,
  Calendar,
  Clock,
  ChevronDown,
  ChevronUp,
  Truck,
  CheckCircle2,
  Send,
  ImageIcon,
  User,
  X,
} from "lucide-react";
import {
  useReports,
  type Report,
  type ReportStatus,
} from "@/lib/report-context";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const statusConfig: Record<
  ReportStatus,
  { label: string; color: string; icon: typeof Send }
> = {
  dikirim: {
    label: "Dikirim",
    color: "bg-amber-100 text-amber-800 border-amber-200",
    icon: Send,
  },
  diproses: {
    label: "Diproses",
    color: "bg-blue-100 text-blue-800 border-blue-200",
    icon: Truck,
  },
  dibersihkan: {
    label: "Dibersihkan",
    color: "bg-emerald-100 text-emerald-800 border-emerald-200",
    icon: CheckCircle2,
  },
};

function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(date);
}

function formatTime(date: Date): string {
  return new Intl.DateTimeFormat("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

function ReportCard({ report }: { report: Report }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const status = statusConfig[report.status];
  const StatusIcon = status.icon;

  return (
    <>
      {/* Mobile Card View */}
      <div className="md:hidden bg-card rounded-xl border border-border p-4 space-y-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-lg bg-secondary overflow-hidden shrink-0 cursor-pointer"
              onClick={() => setShowImage(true)}
            >
              <img
                src={report.image || "/placeholder.svg"}
                alt="Foto laporan"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="font-medium text-card-foreground">
                {report.namaDepan} {report.namaBelakang}
              </p>
              <p className="text-xs text-muted-foreground">#{report.id}</p>
            </div>
          </div>
          <Badge className={`${status.color} border text-xs px-2 py-0.5`}>
            <StatusIcon className="w-3 h-3 mr-1" />
            {status.label}
          </Badge>
        </div>

        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Calendar className="w-3.5 h-3.5" />
          <span>{formatDate(report.createdAt)}</span>
          <Clock className="w-3.5 h-3.5 ml-2" />
          <span>{formatTime(report.createdAt)}</span>
        </div>

        {report.status === "diproses" && report.pickupDate && (
          <div className="flex items-center gap-2 text-xs bg-blue-50 text-blue-700 rounded-lg px-3 py-2">
            <Truck className="w-3.5 h-3.5" />
            <span>Pengambilan: {formatDate(report.pickupDate)}</span>
          </div>
        )}

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-1 text-xs text-primary font-medium"
        >
          {isExpanded ? (
            <>
              Sembunyikan <ChevronUp className="w-3.5 h-3.5" />
            </>
          ) : (
            <>
              Lihat Detail <ChevronDown className="w-3.5 h-3.5" />
            </>
          )}
        </button>

        {isExpanded && (
          <div className="space-y-2 pt-2 border-t border-border animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex items-start gap-2 text-sm">
              <MapPin className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
              <p className="text-muted-foreground">{report.alamat}</p>
            </div>
            {report.catatan && (
              <div className="text-sm text-muted-foreground bg-secondary/50 rounded-lg p-3">
                <p className="font-medium text-foreground mb-1">Catatan:</p>
                {report.catatan}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Image Modal */}
      {showImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setShowImage(false)}
        >
          <div className="relative max-w-2xl w-full">
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-12 right-0 text-white hover:bg-white/20"
              onClick={() => setShowImage(false)}
            >
              <X className="w-6 h-6" />
            </Button>
            <img
              src={report.image || "/placeholder.svg"}
              alt="Foto laporan"
              className="w-full rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
}

function DesktopTableRow({ report }: { report: Report }) {
  const [showImage, setShowImage] = useState(false);
  const status = statusConfig[report.status];
  const StatusIcon = status.icon;

  return (
    <>
      <tr className="border-b border-border hover:bg-secondary/30 transition-colors">
        <td className="px-4 py-4">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-lg bg-secondary overflow-hidden shrink-0 cursor-pointer hover:ring-2 hover:ring-primary transition-all"
              onClick={() => setShowImage(true)}
            >
              <img
                src={report.image || "/placeholder.svg"}
                alt="Foto"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="font-medium text-foreground text-sm">{report.id}</p>
              <p className="text-xs text-muted-foreground">
                {formatDate(report.createdAt)}
              </p>
            </div>
          </div>
        </td>
        <td className="px-4 py-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <User className="w-4 h-4 text-primary" />
            </div>
            <span className="text-sm text-foreground">
              {report.namaDepan} {report.namaBelakang}
            </span>
          </div>
        </td>
        <td className="px-4 py-4">
          <div className="flex items-start gap-2 max-w-xs">
            <MapPin className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
            <p className="text-sm text-muted-foreground line-clamp-2">
              {report.alamat}
            </p>
          </div>
        </td>
        <td className="px-4 py-4">
          <div className="space-y-1">
            <Badge className={`${status.color} border text-xs`}>
              <StatusIcon className="w-3 h-3 mr-1" />
              {status.label}
            </Badge>
            {report.status === "diproses" && report.pickupDate && (
              <div className="flex items-center gap-1 text-xs text-blue-600">
                <Truck className="w-3 h-3" />
                <span>{formatDate(report.pickupDate)}</span>
              </div>
            )}
          </div>
        </td>
      </tr>

      {/* Image Modal */}
      {showImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setShowImage(false)}
        >
          <div className="relative max-w-2xl w-full">
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-12 right-0 text-white hover:bg-white/20"
              onClick={() => setShowImage(false)}
            >
              <X className="w-6 h-6" />
            </Button>
            <img
              src={report.image || "/placeholder.svg"}
              alt="Foto laporan"
              className="w-full rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
}

export function ReportTable() {
  const { reports } = useReports();
  const [filter, setFilter] = useState<ReportStatus | "semua">("semua");

  const filteredReports =
    filter === "semua" ? reports : reports.filter((r) => r.status === filter);

  const statusCounts = {
    semua: reports.length,
    dikirim: reports.filter((r) => r.status === "dikirim").length,
    diproses: reports.filter((r) => r.status === "diproses").length,
    dibersihkan: reports.filter((r) => r.status === "dibersihkan").length,
  };

  return (
    <div className="space-y-4">
      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2">
        {(["semua", "dikirim", "diproses", "dibersihkan"] as const).map(
          (status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === status
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary text-muted-foreground hover:bg-secondary/80"
              }`}
            >
              {status === "semua" ? "Semua" : statusConfig[status].label}
              <span
                className={`ml-2 px-1.5 py-0.5 rounded-full text-xs ${
                  filter === status ? "bg-primary-foreground/20" : "bg-muted"
                }`}
              >
                {statusCounts[status]}
              </span>
            </button>
          )
        )}
      </div>

      {/* Empty State */}
      {filteredReports.length === 0 && (
        <div className="text-center py-12 bg-card rounded-xl border border-border">
          <div className="w-16 h-16 mx-auto rounded-full bg-secondary flex items-center justify-center mb-4">
            <ImageIcon className="w-8 h-8 text-muted-foreground" />
          </div>
          <p className="text-muted-foreground">Belum ada laporan</p>
        </div>
      )}

      {/* Mobile Cards */}
      <div className="md:hidden space-y-3">
        {filteredReports.map((report) => (
          <ReportCard key={report.id} report={report} />
        ))}
      </div>

      {/* Desktop Table */}
      {filteredReports.length > 0 && (
        <div className="hidden md:block bg-card rounded-xl border border-border overflow-hidden">
          <table className="w-full">
            <thead className="bg-secondary/50">
              <tr className="text-left text-sm text-muted-foreground">
                <th className="px-4 py-3 font-medium">ID Laporan</th>
                <th className="px-4 py-3 font-medium">Pelapor</th>
                <th className="px-4 py-3 font-medium">Lokasi</th>
                <th className="px-4 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredReports.map((report) => (
                <DesktopTableRow key={report.id} report={report} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
