import {
  deleteExperienceById,
  updateExperienceById,
} from "@/database/service/experience.service";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  req: NextRequest,

  { params }: { params: { id: string } },
  res: NextResponse
) {
  try {
    const id = params.id;
    await deleteExperienceById(id);
    return NextResponse.json({
      success: true,
      message: "Experience deleted successfully!",
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
    await updateExperienceById(id, bodyData);
    return NextResponse.json({ success: true, data: bodyData });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      message: error.message || "Failed to update exprience",
    });
  }
}
