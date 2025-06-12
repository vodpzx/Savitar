import React from 'react';
import { CheckCircle, AlertCircle, Clock } from 'lucide-react';
import { FadeIn } from '../components/animations/FadeIn';

interface ServiceStatus {
  name: string;
  status: 'operational' | 'degraded' | 'maintenance';
  lastIncident?: string;
}

const services: ServiceStatus[] = [
  { name: 'Script Execution Engine', status: 'maintenance' },
  { name: 'Authentication System', status: 'maintenance' },
  { name: 'Script Library', status: 'maintenance' },
  { name: 'Auto-Updates', status: 'maintenance' },
  { name: 'Memory Scanner', status: 'maintenance' },
  { name: 'API Services', status: 'maintenance' }
];

function StatusIndicator({ status }: { status: ServiceStatus['status'] }) {
  switch (status) {
    case 'operational':
      return <CheckCircle className="w-5 h-5 text-green-400" />;
    case 'degraded':
      return <AlertCircle className="w-5 h-5 text-yellow-400" />;
    case 'maintenance':
      return <Clock className="w-5 h-5 text-blue-400" />;
  }
}

export function StatusPage() {
  const allOperational = services.every(service => service.status === 'operational');

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="bg-navy-800/30 rounded-2xl p-8 backdrop-blur-sm border border-white/5">
            <div className="flex items-center gap-3 mb-8">
              <StatusIndicator status="operational" />
              <h1 className="text-3xl font-bold">
                {allOperational ? 'All Systems Under Maintenance' : 'System Status'}
              </h1>
            </div>

            <div className="space-y-4">
              {services.map((service) => (
                <div
                  key={service.name}
                  className="flex items-center justify-between p-4 bg-navy-900/50 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <StatusIndicator status={service.status} />
                    <span className="font-medium">{service.name}</span>
                  </div>
                  <span className="text-sm text-gray-400">
                    {service.lastIncident || 'No incidents reported'}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-white/5">
              <h2 className="text-xl font-semibold mb-4">Status Legend</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-gray-400">Operational</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm text-gray-400">Degraded Performance</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <span className="text-sm text-gray-400">Maintenance</span>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
