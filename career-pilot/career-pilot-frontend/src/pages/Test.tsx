
// Main App component for the two-column layout
function Test() {
  return (
    // Main container for the layout, centered and with responsive padding
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 sm:p-6 lg:p-8 font-sans">
      {/* Outer container for the two columns,
          flex-col on small screens, flex-row on large screens,
          with rounded corners and shadow */}
      <div className="flex flex-col lg:flex-row bg-white rounded-lg shadow-xl overflow-hidden w-full"> {/* Removed max-w-4xl to make it full width */}

        {/* Left Column: Image Slider Section */}
        {/* Hidden on small screens, takes half width on large screens */}
        <div className="hidden lg:block lg:w-1/2 relative">
          {/* Image element, covering the full height and width of its container */}
          {/* Using a placeholder image for demonstration */}
          <img
            src="https://placehold.co/800x1200/4F46E5/FFFFFF?text=Your+Image+Here"
            alt="Placeholder for a beautiful background"
            className="absolute inset-0 w-full h-full object-cover rounded-l-lg"
            onError={(e) => {
              // Fallback if the image fails to load
              e.currentTarget.src = "https://placehold.co/800x1200/6B7280/FFFFFF?text=Image+Not+Found";
            }}
          />
          {/* Optional: Overlay for text or subtle effects */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
            <h2 className="text-white text-2xl font-bold rounded-md">
              Discover Amazing Features
            </h2>
          </div>
        </div>

        {/* Right Column: Form Section */}
        {/* Takes full width on small screens, half width on large screens */}
        <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
            Get Started
          </h2>
          <p className="text-gray-600 mb-8 text-center">
            Fill out the form below to learn more.
          </p>

          {/* The Form */}
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
                placeholder="Tell us more..."
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Test;