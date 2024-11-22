"use client";

import useRecommendedProducts from "@/utils/useRecommendedProducts";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import Link from "next/link";
import Image from "next/image";

const RecommendedProducts = (props) => {
  const products = useRecommendedProducts(props.productName);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mx-auto max-w-7xl">
      {products && products?.length > 0 ? (
        products?.map((product) => {
          return (
            <Link
              href={`/product/${product?.PRODUCT_NAME}`}
              key={product?.index}
             
            >
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
      ) : products?.length === 0 ? null : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default RecommendedProducts;
