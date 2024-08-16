import {
  deleteEducationById,
  updateEducationById,
} from "@/database/service/education.service";
import { NextRequest, NextResponse } from "next/server";

// delete route

export async function DELETE(
  req: NextRequest,

  { params }: { params: { id: string } },
  res: NextResponse
) {
  try {
    const id = params.id;
    await deleteEducationById(id);
    return NextResponse.json({
      success: true,
      message: "Education deleted successfully!",
    });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }
}

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    const bodyData = await req.json();
    await updateEducationById(id, bodyData);
    return NextResponse.json({ success: true, data: bodyData });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      message: error.message || "Failed to update Education",
    });
  }
}
