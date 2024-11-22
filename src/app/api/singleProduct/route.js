import { NextRequest, NextResponse } from "next/server";

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const productName = searchParams.get('productName');

  try {
    const response = await fetch(
      `https://divyeshproject-production-898b.up.railway.app/get_product_by_name?product_name=${productName}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
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
