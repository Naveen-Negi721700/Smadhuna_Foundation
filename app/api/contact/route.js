import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Contact from "@/models/Contact";

export async function POST(request) {
  try {
    const body = await request.json();

    await connectDB();

    const contact = await Contact.create({
      name: body.name,
      email: body.email,
      contact: body.contact,
      donation_section: body.donation_section,
      message: body.message,
    });

    return NextResponse.json({
      success: true,
      data: contact,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}