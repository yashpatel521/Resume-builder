import { getProjectsByUserId } from "@/database/service/project.service";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const experiences = await getProjectsByUserId(id);
    return NextResponse.json({
      success: true,
      data: experiences,
    });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      error: error.message,
    });
  }
}
