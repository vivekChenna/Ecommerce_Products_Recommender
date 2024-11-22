"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";
import { useState, useEffect } from "react";

export default function ProductGrid() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("/api/products", {
        method: "GET",
      });

      const data = await response.json();
      setProducts(data);
    } catch (error) {}
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products && products?.length > 0 ? (
        products?.map((product) => {
          return (
            <Link href={`/product/${product?.PRODUCT_NAME}`} key={product?.index}>
              <Card className="overflow-hidden group hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <div className="relative h-64">
                  <Image
                src={'/fooditems.jpg'}
                alt={product?.PRODUCT_NAME || "productName"}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
                  {/* <Badge className="absolute top-2 right-2 bg-white/90 text-black">
                {product.tag}
              </Badge> */}
                </div>
                <div className="p-4">
                  <div className="mb-2">
                    <Badge variant="secondary" className="mb-2">
                      {product?.CATEGORY}
                    </Badge>
                    <h3 className="font-semibold text-lg mb-1">
                      {product?.PRODUCT_NAME}
                    </h3>
                    <p className="text-2xl font-bold text-indigo-600">
                      ${product?.PRICE_CURRENT}
                    </p>
                  </div>
                </div>
              </Card>
            </Link>
          );
        })
      ) : products?.length === 0 ? (
        <div>No products available</div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
