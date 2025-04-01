"use client"
import dynamic from 'next/dynamic';

import Overview from './components/Overview';
import CongestedPoints from './components/CongestedPoints';
// import CongestionMap from './components/CongestionMap';
import CongestionGraph from './components/CongestionGraph';
import HourlyCongestion from './components/HourlyCOngestion';

const CongestionMap = dynamic(() => import('./components/CongestionMap'), {
    ssr: false, // Disable SSR for this component
  });

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-12">
      {/* Overview Section */}
      <Overview />

      {/* Congested Points Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <CongestedPoints />
        <CongestionMap />
      </div>

      {/* Congestion Trends Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <CongestionGraph />
        <HourlyCongestion />
      </div>
    </div>
  );
}
