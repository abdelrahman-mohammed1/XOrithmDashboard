import Link from "next/link";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Subscribe to Updates</h3>
            <p className="text-sm text-gray-600 mb-4">
              Get notified when we update our systems status
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg rounded-button whitespace-nowrap cursor-pointer">
                Subscribe
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <Link
                href="#"
                className="text-gray-500 hover:text-gray-700 cursor-pointer"
              >
                <i className="fab fa-twitter text-xl"></i>
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-gray-700 cursor-pointer"
              >
                <i className="fab fa-github text-xl"></i>
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-gray-700 cursor-pointer"
              >
                <i className="fab fa-linkedin text-xl"></i>
              </Link>
            </div>
            <div className="flex space-x-6">
              <Link
                href="#"
                className="text-sm text-gray-600 hover:text-gray-800 cursor-pointer"
              >
                API Documentation
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-600 hover:text-gray-800 cursor-pointer"
              >
                Support
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-600 hover:text-gray-800 cursor-pointer"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center text-sm text-gray-500 pt-6 border-t border-gray-200">
          <p>© {currentYear} XOrithm. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
