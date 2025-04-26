import { systemComponents } from "constants/constants";
const CurrentStatus = () => {
  return (
    <section className="mb-12">
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Current Status</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {systemComponents.map((component, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">{component.name}</h3>
                <div className="flex items-center">
                  <div
                    className={`h-2.5 w-2.5 rounded-full ${
                      component.status === "operational"
                        ? "bg-green-500"
                        : "bg-yellow-500"
                    } mr-1.5`}
                  ></div>
                  <span className="text-xs capitalize">{component.status}</span>
                </div>
              </div>
              <div className="text-sm text-gray-500">
                <span className="font-medium">{component.uptime}</span> uptime
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default CurrentStatus;
