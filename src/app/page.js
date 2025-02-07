import ProductGrid from '@/components/ProductGrid';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Trending Products</h1>
          <p className="text-lg text-gray-600">Discover our curated collection of premium items</p>
        </div>
        <ProductGrid />
      </div>
    </main>
  );
}