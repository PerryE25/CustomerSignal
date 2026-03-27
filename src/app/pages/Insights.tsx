import { Sidebar } from '../components/Sidebar';
import { BarChart3, TrendingUp, Users, Zap } from 'lucide-react';

export function Insights() {
  const insights = [
    {
      title: 'Top User Pain Point',
      description: 'Onboarding takes too long - averaging 8 minutes vs industry 3 minutes',
      impact: 'High',
      icon: Users,
    },
    {
      title: 'Performance Issue',
      description: 'Dashboard load times exceed 5 seconds for 40% of users',
      impact: 'Critical',
      icon: Zap,
    },
    {
      title: 'Feature Request Trend',
      description: 'Advanced search requested 23 times this month across interviews and Reddit',
      impact: 'Medium',
      icon: TrendingUp,
    },
  ];
  
  return (
    <div className="flex h-screen bg-[#05050A] overflow-hidden">
      <Sidebar />
      
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-5xl mx-auto px-8 py-12">
          <div className="mb-8">
            <h1 className="text-3xl text-white mb-3">Insights</h1>
            <p className="text-gray-400">AI-powered analysis of user feedback and behavior</p>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            {insights.map((insight, index) => {
              const Icon = insight.icon;
              return (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-purple-500/30 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30">
                      <Icon className="w-6 h-6 text-purple-400" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl text-white">{insight.title}</h3>
                        <span
                          className={`
                            px-3 py-1 rounded-md text-sm font-medium
                            ${insight.impact === 'Critical' 
                              ? 'bg-red-500/20 text-red-300 border border-red-500/30'
                              : insight.impact === 'High'
                              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                              : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                            }
                          `}
                        >
                          {insight.impact} Impact
                        </span>
                      </div>
                      <p className="text-gray-400">{insight.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
