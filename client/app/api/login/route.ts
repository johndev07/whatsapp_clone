import { connect } from "@/dbConfig/dbCOnfig";
import User from "@/models/userModal";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;

    const userDetails = await User.findOne({ email });
    if (!userDetails) {
      return NextResponse.json(
        { error: "User does not exist" },
        { status: 400 }
      );
    }

    const validPassword = await bcryptjs.compare(
      password,
      userDetails.password
    );
    if (!validPassword) {
      return NextResponse.json({ error: "Invalid Passwod" }, { status: 400 });
    }

    console.log(userDetails);

    const tokenData = {
      id: userDetails._id,
      username: userDetails.username,
      email: userDetails.email,
    };

    const token = await jwt.sign(tokenData, "/94aP%y'oqPXsOl", {
      expiresIn: "1d",
    });
    const response = NextResponse.json({
      message: "Login successfull",
      success: true,
    });

    response.cookies.set("token", token, { httpOnly: true });
    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
    console.log(error.message);
  }
}
