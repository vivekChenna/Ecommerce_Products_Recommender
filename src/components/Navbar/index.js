import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link href="/" className="flex items-center space-x-2">
            <ShoppingBag className="h-6 w-6 text-indigo-600" />
            <span className="text-xl font-bold text-gray-900">Trendify</span>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          {/* <Badge
            variant="secondary"
            className="hover:bg-gray-100 cursor-pointer"
          >
            Cart (0)
          </Badge> */}
        </div>
      </div>
    </nav>
  );
}
