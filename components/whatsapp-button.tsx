import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

export function WhatsAppButton({ phoneNumber }: { phoneNumber: string }) {
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    <Link
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="z-50"
    >
      <Button
        size={"icon-lg"}
        className="fixed bottom-5 right-5 rounded-full p-4 shadow-lg flex items-center justify-center"
      >
        <Image src="/whatsapp.png" alt="WhatsApp" fill />
      </Button>
    </Link>
  );
}
