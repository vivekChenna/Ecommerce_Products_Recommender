"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getProductById, products } from "@/lib/products";
import { notFound, useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import RecommendedProducts from "@/components/RecommendedProducts";

// export function generateStaticParams() {
//   return products.map((product) => ({
//     id: product.id.toString(),
//   }));
// }

export default function ProductPage({ params }) {
  const [singleProduct, setSingleProduct] = useState(false);

  const router = useRouter();

  const paramsObj = useParams();
  const decodedPathname = decodeURIComponent(paramsObj.name);

  useEffect(() => {
    fetchSingleProduct();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const fetchSingleProduct = async () => {
    try {
      const response = await fetch(
        `/api/singleProduct?productName=${decodedPathname}`,
        {
          method: "GET",
        }
      );

      const jsonData = await response.json();

      setSingleProduct(jsonData[0]);
    } catch (error) {}
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/"
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Products</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <Image
              src={"/fooditems.jpg" || "productName"}
              alt={singleProduct?.PRODUCT_NAME || "productName"}
              fill
              className="object-cover"
              priority
            />
            {/* <Badge className="absolute top-4 right-4 bg-white/90 text-black">
              {product.tag}
            </Badge> */}
          </div>

          <div className="space-y-6">
            <Badge variant="secondary">{singleProduct?.CATEGORY}</Badge>
            <h1 className="text-4xl font-bold text-gray-900">
              {singleProduct?.PRODUCT_NAME}
            </h1>
            <div className="flex items-center space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <span className="text-gray-600">(50+ reviews)</span>
            </div>
            <p className="text-3xl font-bold text-indigo-600">
              ${singleProduct?.PRICE_CURRENT}
            </p>
            <p className="text-gray-600">
              Experience premium quality with our{" "}
              {singleProduct?.PRODUCT_NAME?.toLowerCase()}. This product
              combines elegant design with superior functionality, making it
              perfect for both professional use and everyday activities.
            </p>
            <div className="space-y-4">
              <Button
                size="lg"
                className="w-full bg-indigo-600 hover:bg-indigo-700"
                onClick={() => {
                  router.push(singleProduct?.PRODUCT_URL);
                }}
              >
                Go to Product
              </Button>
            </div>
          </div>
        </div>
      </div>
      <RecommendedProducts productName={decodedPathname} />
    </main>
  );
}
