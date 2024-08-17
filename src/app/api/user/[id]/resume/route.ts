import {
  getAllDataByUserId,
  getUserByEmail,
  getUserById,
  updateUserById,
} from "@/database/service/user.service";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const user = await getAllDataByUserId(params.id);
    // console.log(user);

    return NextResponse.json({ success: true, data: user });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      message: error.message || "Failed to fetch user",
    });
  }
}
