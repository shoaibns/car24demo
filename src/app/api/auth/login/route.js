// // login api
// import User from "@/models/User";
// import { NextResponse } from "next/server";

// export async function POST(req) {
//   try {
//     const body = await req.json();

//     const { email, password } = body;

//     // Validate input
//     if (!email || !password) {
//       return NextResponse.json(
//         { message: "Email and password are required." },
//         { status: 400 }
//       );
//     }

//     // Check if user exists in the mocked database
//     const user = User.find((u) => u.email === email && u.password === password);

//     if (!user) {
//       return NextResponse.json(
//         { message: "Invalid email or password." },
//         { status: 401 }
//       );
//     }

//     // On successful login
//     return NextResponse.json(
//       { message: "Login successful!", user: { email: user.email } },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Error during login:", error);
//     return NextResponse.json(
//       { message: "An error occurred while processing your request." },
//       { status: 500 }
//     );
//   }
// }

import User from "@/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import dbConnect from "@/lib/dbConnect";

export async function POST(req) {
  try {
    // Connect to the database
    await dbConnect();

    const { email, password } = await req.json();

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password are required." },
        { status: 400 }
      );
    }

    // Check if user exists in the database
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { message: "Invalid email or password." },
        { status: 401 }
      );
    }

    // Verify the password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json(
        { message: "Invalid email or password." },
        { status: 401 }
      );
    }

    // On successful login, you might generate a token (JWT) here
    // For simplicity, we just return the user's email and ID
    return NextResponse.json(
      {
        message: "Login successful!",
        user: { email: user.email, id: user._id },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error during login:", error);
    return NextResponse.json(
      { message: "An error occurred while processing your request." },
      { status: 500 }
    );
  }
}
