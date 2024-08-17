import {
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
    const user = await getUserById(params.id);

    if (!user) {
      return NextResponse.json({ success: false, message: "User not found" });
    }

    return NextResponse.json({ success: true, data: user });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      message: error.message || "Failed to fetch user",
    });
  }
}

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const user = await getUserById(params.id);
    if (!user) {
      return NextResponse.json({ success: false, message: "User not found" });
    }

    const bodyData = await req.json();

    // Check if the email is already taken by another user
    if (bodyData.email && bodyData.email !== user.email) {
      const existingUser = await getUserByEmail(bodyData.email);
      if (existingUser) {
        return NextResponse.json({
          success: false,
          message: "Email already exists",
        });
      }
    }

    // Update user fields, only if they are provided in the request
    user.firstName = bodyData.firstName || user.firstName;
    user.lastName = bodyData.lastName || user.lastName;
    user.email = bodyData.email || user.email;
    user.phoneNumber = bodyData.phoneNumber || user.phoneNumber;
    user.address = bodyData.address || user.address;
    user.postalCode = bodyData.postalCode || user.postalCode;
    user.majorSkill = bodyData.majorSkill || user.majorSkill;
    console.log(bodyData.majorSkill);
    console.log(user.majorSkill);
    await updateUserById(params.id, user);

    return NextResponse.json({ success: true, data: user });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      message: error.message || "Failed to update user",
    });
  }
}
