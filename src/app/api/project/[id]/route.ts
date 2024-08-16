import {
  deleteProjectById,
  updateProjectById,
} from "@/database/service/project.service";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } },
  res: NextResponse
) {
  try {
    const id = params.id;
    await deleteProjectById(id);
    return NextResponse.json({
      success: true,
      message: "Project deleted successfully",
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
    await updateProjectById(id, bodyData);
    return NextResponse.json({ success: true, data: bodyData });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      message: error.message || "Project not found",
    });
  }
}
