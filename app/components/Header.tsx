const Header = () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const formattedTime = currentDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-2xl font-bold mr-2">OpenAI</div>
          <span className="text-gray-500 text-sm">Status</span>
        </div>
        <div className="flex items-center">
          <div className="flex items-center mr-6">
            <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
            <span className="text-sm font-medium">All Systems Operational</span>
          </div>
          <div className="text-sm text-gray-500">
            {formattedTime} • {formattedDate}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
