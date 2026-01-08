"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export type ReportStatus = "dikirim" | "diproses" | "dibersihkan";

export interface Report {
  id: string;
  namaDepan: string;
  namaBelakang: string;
  alamat: string;
  catatan: string;
  latitude: number | null;
  longitude: number | null;
  image: string;
  status: ReportStatus;
  createdAt: Date;
  pickupDate?: Date; // Tanggal pengambilan untuk status "diproses"
}

interface ReportContextType {
  reports: Report[];
  addReport: (report: Omit<Report, "id" | "status" | "createdAt">) => void;
  updateStatus: (id: string, status: ReportStatus, pickupDate?: Date) => void;
}

const ReportContext = createContext<ReportContextType | undefined>(undefined);

export function ReportProvider({ children }: { children: ReactNode }) {
  const [reports, setReports] = useState<Report[]>([
    // Sample data for demo
    {
      id: "RPT001",
      namaDepan: "Budi",
      namaBelakang: "Santoso",
      alamat: "Jl. Merdeka No. 45, Menteng, Jakarta Pusat",
      catatan: "Sampah sudah menumpuk 3 hari",
      latitude: -6.1944,
      longitude: 106.8229,
      image: "/garbage-pile-street.jpg",
      status: "dibersihkan",
      createdAt: new Date(2025, 0, 5, 9, 30),
    },
    {
      id: "RPT002",
      namaDepan: "Siti",
      namaBelakang: "Rahayu",
      alamat: "Jl. Sudirman Kav. 21, Setiabudi, Jakarta Selatan",
      catatan: "Sampah plastik dan organik tercampur",
      latitude: -6.2088,
      longitude: 106.8456,
      image: "/trash-bags-sidewalk.jpg",
      status: "diproses",
      createdAt: new Date(2025, 0, 6, 14, 15),
      pickupDate: new Date(2025, 0, 9, 8, 0),
    },
    {
      id: "RPT003",
      namaDepan: "Ahmad",
      namaBelakang: "Hidayat",
      alamat: "Jl. Gatot Subroto No. 12, Kuningan, Jakarta Selatan",
      catatan: "TPS penuh, sampah meluber ke jalan",
      latitude: -6.2297,
      longitude: 106.8295,
      image: "/overflowing-garbage-bin.png",
      status: "dikirim",
      createdAt: new Date(2025, 0, 8, 10, 45),
    },
  ]);

  const addReport = (
    reportData: Omit<Report, "id" | "status" | "createdAt">
  ) => {
    const newReport: Report = {
      ...reportData,
      id: `RPT${String(reports.length + 1).padStart(3, "0")}`,
      status: "dikirim",
      createdAt: new Date(),
    };
    setReports((prev) => [newReport, ...prev]);
  };

  const updateStatus = (
    id: string,
    status: ReportStatus,
    pickupDate?: Date
  ) => {
    setReports((prev) =>
      prev.map((report) =>
        report.id === id
          ? {
              ...report,
              status,
              pickupDate:
                status === "diproses" ? pickupDate : report.pickupDate,
            }
          : report
      )
    );
  };

  return (
    <ReportContext.Provider value={{ reports, addReport, updateStatus }}>
      {children}
    </ReportContext.Provider>
  );
}

export function useReports() {
  const context = useContext(ReportContext);
  if (!context) {
    throw new Error("useReports must be used within a ReportProvider");
  }
  return context;
}
