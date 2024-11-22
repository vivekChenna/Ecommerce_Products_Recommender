import { NextRequest, NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();  

  try {
    const response = await fetch(
      " https://divyeshproject-production-898b.up.railway.app/recommend-products/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          product_name: body.product_name,
        }),
      }
    );

    const jsonData = await response.json();


    return NextResponse.json(jsonData, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: error?.message,
      },
      {
        status: 500,
      }
    );
  }
}
