"use client";

import { useFormContext } from "@/context/formContext";
import { useState } from "react";
import { FiUpload } from "react-icons/fi";

export default function Media() {
  const { formData, setFormData } = useFormContext();
  const [image, setImage] = useState(null);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData({ ...formData, media: { ...formData.media, files } });
  };

  return (
    <div>
      <h2 className="text-3xl font-semibold text-gray-900 mb-4">Gallery</h2>
      <form className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {/* Image Box 1 */}
        <div className="aspect-w-1 aspect-h-1 bg-gray-100 rounded-lg overflow-hidden">
          <img
            src="https://creativelayers.net/themes/boxcar-html/images/resource/list2-1.png"
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
        {/* Image Box 2 */}
        <div className="aspect-w-1 aspect-h-1 bg-gray-100 rounded-lg overflow-hidden">
          <img
            src="https://creativelayers.net/themes/boxcar-html/images/resource/list2-2.png"
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
        {/* Image Box 3 */}
        <div className="aspect-w-1 aspect-h-1 bg-gray-100 rounded-lg overflow-hidden">
          <img
            src="https://creativelayers.net/themes/boxcar-html/images/resource/list2-3.png"
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
        {/* Image Box 4 */}
        <div className="aspect-w-1 aspect-h-1 bg-gray-100 rounded-lg overflow-hidden">
          <img
            src="https://plus.unsplash.com/premium_photo-1664303847960-586318f59035?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D"
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
        {/* Upload Box */}
        <div className="aspect-w-1 aspect-h-1 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-gray-200 transition">
          <label
            htmlFor="img"
            className="flex flex-col items-center justify-center"
          >
            <FiUpload className="text-3xl text-gray-800 mb-2" />
            <span className="text-blue-500 underline">Upload</span>
            <input
              type="file"
              id="img"
              multiple
              accept="image/*,video/*"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
          {image && (
            <div className="mt-2 text-sm text-gray-500">Image selected.</div>
          )}
        </div>
        {/* List uploaded files */}
        {formData.media?.files?.length > 0 && (
          <div className="col-span-full">
            <ul className="text-sm text-gray-600">
              {formData.media.files.map((file, index) => (
                <li key={index}>{file.name}</li>
              ))}
            </ul>
          </div>
        )}
      </form>
    </div>
  );
}
