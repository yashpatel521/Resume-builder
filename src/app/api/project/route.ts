import { createProject } from "@/database/service/project.service";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const bodyData = await req.json();
    delete bodyData._id;
    const result = await createProject(bodyData);
    return NextResponse.json({
      success: true,
      data: result,
    });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      error: error.message,
    });
  }
}
