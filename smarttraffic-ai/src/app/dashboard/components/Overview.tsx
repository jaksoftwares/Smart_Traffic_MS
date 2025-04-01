export default function Overview() {
    return (
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Overview</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-blue-100 dark:bg-blue-700 p-4 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold">Accident Level</h3>
            <p className="text-xl">High</p>
          </div>
          <div className="bg-yellow-100 dark:bg-yellow-700 p-4 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold">Accidents</h3>
            <p className="text-xl">42</p>
          </div>
          <div className="bg-red-100 dark:bg-red-700 p-4 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold">Road Closures</h3>
            <p className="text-xl">5</p>
          </div>
          <div className="bg-green-100 dark:bg-green-700 p-4 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold">Avg Transit Delay</h3>
            <p className="text-xl">15 mins</p>
          </div>
          <div className="bg-purple-100 dark:bg-purple-700 p-4 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold">CA Congestion Rank</h3>
            <p className="text-xl">3rd</p>
          </div>
        </div>
      </div>
    );
  }
  