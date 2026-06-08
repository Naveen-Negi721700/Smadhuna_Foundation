// app/api/involved-form/route.js

import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import ContactInvolvedForm from "@/models/Contact-involved-form";

export async function POST(request) {
  try {
    const body = await request.json();

    await connectDB();

    await ContactInvolvedForm.create(body);
      
    return NextResponse.json({
      success: true,
      message: "Saved Successfully",
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}