import { useState } from "react";

const AddPhotoPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (e) => {
    setSelectedImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <div>
      <h4 className=" text-pink-500 text-center text-2xl font-bold mb-6">
        Upload Your Photo
      </h4>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image Upload Form */}
        <div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-lg font-semibold mb-2">
                Select Image
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="block w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>

            {selectedImage && (
              <div className="mb-4">
                <p className="text-lg font-semibold mb-2">Preview</p>
                <img
                  src={selectedImage}
                  alt="Selected"
                  className="w-48 h-48 object-cover rounded-md"
                />
              </div>
            )}

            <button
              type="submit"
              className="px-6 py-2 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition duration-300"
            >
              Submit Photo
            </button>
          </form>
        </div>

        {/* Image Upload Rules */}
        <div className=" bg-orange-50 py-8 px-4  rounded-lg">
          <h2 className=" text-xl font-bold text-center mb-4">
            Photo Guidelines
          </h2>
          <div className=" text-sm">
            <p className="mb-2">
              1. Upload 2 portrait selfie photo.{" "}
              <span className=" italic text-pink-500">view demo</span>
            </p>

            <p className="mb-2">
              2. Images should not exceed 5MB in size. Larger files may fail to
              upload.
            </p>
            <p className="mb-2">
              3. Please ensure your photo is clear, well-lit, and high
              resolution.
            </p>
            <p className="mb-2">
              4. Photos should be respectful and appropriate, showcasing you at
              your best. Offensive or inappropriate content will result in
              disqualification.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPhotoPage;
