import ProductGrid from "@/components/ProductGrid.jsx";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ShoppingBag className="h-6 w-6 text-indigo-600" />
            <span className="text-xl font-bold text-gray-900">ShopStyle</span>
          </div>
          <div className="flex items-center space-x-4">
            <Badge
              variant="secondary"
              className="hover:bg-gray-100 cursor-pointer"
            >
              Cart (0)
            </Badge>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Trending Products
          </h1>
          <p className="text-lg text-gray-600">
            Discover our curated collection of premium items
          </p>
        </div>
        <ProductGrid />
      </div>
    </main>
  );
}
