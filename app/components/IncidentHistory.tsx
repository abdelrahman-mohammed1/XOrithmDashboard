import { incidents } from "constants/constants";
const IncidentHistory = () => {
  return (
    <section className="mb-12">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-6">Incident History</h2>
        <div className="space-y-6">
          {incidents.map((incident, index) => (
            <div key={index} className="border-l-4 border-green-500 pl-4 py-1">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium">{incident.title}</h3>
                <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                  {incident.status}
                </span>
              </div>
              <div className="text-sm text-gray-500 mb-2">
                {incident.date} at {incident.time}
              </div>
              <p className="text-sm text-gray-600">{incident.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <button className="text-blue-600 hover:text-blue-800 text-sm font-medium cursor-pointer">
            View full incident history{" "}
            <i className="fas fa-arrow-right ml-1"></i>
          </button>
        </div>
      </div>
    </section>
  );
};
export default IncidentHistory;
