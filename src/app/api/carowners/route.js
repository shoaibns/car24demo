import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Carowners from "@/models/Carowners";
import cloudinary from "cloudinary";

// Configure Cloudinary
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req) {
  await dbConnect();

  try {
    // Parse JSON body
    const body = await req.json();
    const { firstName, lastName, email, phoneNumber, role, status, image } =
      body;

    // Validate required fields
    if (!firstName || !lastName || !email || !phoneNumber || !role || !status) {
      return NextResponse.json(
        { error: "All fields, including status, are required" },
        { status: 400 }
      );
    }

    let imageUrl = null;
    let publicId = null;

    // Upload the image to Cloudinary if provided
    if (image) {
      const uploadResponse = await cloudinary.v2.uploader.upload(image, {
        folder: "carownersimg",
      });
      imageUrl = uploadResponse.url;
      publicId = uploadResponse.public_id;
    }

    // Save the car owner to the database
    const newCarOwner = new Carowners({
      firstName,
      lastName,
      email,
      phoneNumber,
      role,
      status, // Include status
      image: {
        publicId,
        url: imageUrl,
      },
    });

    await newCarOwner.save();

    return NextResponse.json(
      { message: "Car owner created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET(req) {
  await dbConnect();

  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page")) || 1; // Default to page 1
    const limit = parseInt(searchParams.get("limit")) || 4; // Default to 4 items per page

    const skip = (page - 1) * limit; // Calculate the number of records to skip for pagination

    // Fetch car owners with pagination
    const carOwners = await Carowners.find()
      .skip(skip) // Skip the records before the current page
      .limit(limit); // Limit the number of records per page

    // Get the total count of car owners
    const totalCarOwners = await Carowners.countDocuments();

    return NextResponse.json({
      owners: carOwners, // Return the fetched owners
      totalCarOwners, // Total count of car owners
      totalPages: Math.ceil(totalCarOwners / limit), // Calculate total number of pages
      currentPage: page, // Current page number
    });
  } catch (error) {
    console.error("Error fetching car owners:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// update user
export async function PATCH(req) {
  try {
    // Connect to the database
    await dbConnect();

    // Parse the request body
    const body = await req.json();
    const { id, ...updates } = body;

    // Validate the `id` field
    if (!id) {
      return NextResponse.json(
        { error: "Car owner ID is required for update" },
        { status: 400 }
      );
    }

    // Update the Car Owner in the database
    const updatedCarOwner = await Carowners.findByIdAndUpdate(id, updates, {
      new: true, // Return the updated document
      runValidators: true, // Ensure validation on updates
    });

    if (!updatedCarOwner) {
      return NextResponse.json(
        { error: "Car owner not found" },
        { status: 404 }
      );
    }

    // Return the updated car owner data
    return NextResponse.json(updatedCarOwner, { status: 200 });
  } catch (error) {
    console.error("Error updating car owner:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

//   Delete Car Owner

export async function DELETE(req) {
  await dbConnect();

  try {
    const id = req.nextUrl.searchParams.get("id");

    console.log("user id in :", id);

    if (!id) {
      return NextResponse.json(
        { error: "Car owner ID is required for deletion" },
        { status: 400 }
      );
    }

    const deletedCarOwner = await Carowners.findByIdAndDelete(id);

    if (!deletedCarOwner) {
      return NextResponse.json(
        { error: "Car owner not found" },
        { status: 404 }
      );
    }

    // Delete the associated image from Cloudinary if it exists
    if (deletedCarOwner.image?.publicId) {
      await cloudinary.v2.uploader.destroy(deletedCarOwner.image.publicId);
    }

    return NextResponse.json(
      { message: "Car owner deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting car owner:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// check

// revalidatePath("/dashboard/users");
//   redirect("/dashboard/users");
