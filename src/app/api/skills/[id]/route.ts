import { updateSkillsById } from "@/database/service/skills.service";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    const bodyData = await req.json();
    await updateSkillsById(id, bodyData);
    return NextResponse.json({ success: true, data: bodyData });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      message: error.message || "An error occurred while updating skills.",
    });
  }
}
