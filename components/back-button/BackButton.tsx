import { ArrowLeftCircle } from "lucide-react";
import Link from "next/link";

interface BackButtonProps {
  text?: string;
  link?: string;
}

const BackButton = ({ text, link = "/" }: BackButtonProps) => {
  return (
    <Link
      href={link}
      className="flex items-center gap-2 hover:underline font-bold"
    >
      <ArrowLeftCircle size={18} />
      <span className="text-sm">{text}</span>
    </Link>
  );
};

export default BackButton;
