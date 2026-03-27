import { Sidebar } from '../components/Sidebar';
import { ChatInput } from '../components/ChatInput';
import { FeatureCard } from '../components/FeatureCard';

export function Dashboard() {
  const features = [
    {
      feature: 'Simplified Onboarding',
      impact: '+14% activation',
      source: '12 interviews, 7 Reddit complaints',
      tags: ['High Impact', 'Low Effort'],
      icon: 'message' as const,
      imageUrl: 'https://images.unsplash.com/photo-1547411713-d8b9c8d1eaa7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBvbmJvYXJkaW5nJTIwc2NyZWVufGVufDF8fHx8MTc3NDY0OTQxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      feature: 'Faster Load Times',
      impact: '-22% churn',
      source: 'Reddit + analytics',
      tags: ['High Impact'],
      icon: 'chart' as const,
      imageUrl: 'https://images.unsplash.com/photo-1632017261554-7c6712cb0a09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXN0JTIwbG9hZGluZyUyMHNwZWVkJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc3NDUyOTIxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      feature: 'Improve Search UX',
      impact: '+18% engagement',
      source: 'Interview transcripts',
      tags: ['High Impact', 'Low Effort'],
      icon: 'search' as const,
      imageUrl: 'https://images.unsplash.com/photo-1762330465551-5217a6dec84f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWFyY2glMjBpbnRlcmZhY2UlMjB1eHxlbnwxfHx8fDE3NzQ2NDk0MTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      feature: 'Analytics Dashboard',
      impact: '+25% user insights',
      source: '8 interviews, analytics data',
      tags: ['High Impact'],
      icon: 'chart' as const,
      imageUrl: 'https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBkYXNoYm9hcmQlMjBkZXNpZ258ZW58MXx8fHwxNzc0NjE1Mzk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      feature: 'Mobile App Redesign',
      impact: '+30% engagement',
      source: 'Reddit feedback, user testing',
      tags: ['High Impact', 'Low Effort'],
      icon: 'message' as const,
      imageUrl: 'https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzc0NTcyMjQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      feature: 'User Profile Settings',
      impact: '+12% completion',
      source: '15 interviews',
      tags: ['Low Effort'],
      icon: 'search' as const,
      imageUrl: 'https://images.unsplash.com/photo-1769083013406-bf8a66257f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwcHJvZmlsZSUyMHNldHRpbmdzfGVufDF8fHx8MTc3NDY0OTQxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];
  
  return (
    <div className="flex h-screen bg-[#05050A] overflow-hidden">
      <Sidebar />
      
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Chat Input Section */}
        <div className="border-b border-white/10">
          <ChatInput />
        </div>
        
        {/* Features Feed */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="mb-8">
              <h2 className="text-2xl text-white mb-2">Past Features</h2>
              <p className="text-gray-400">Features identified from user research and feedback</p>
            </div>
            
            {/* 3-column grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}