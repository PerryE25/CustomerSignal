import { Clock, Sparkles } from 'lucide-react';
import React from 'react';

interface PromptItem {
  query: string;
  timestamp: string;
  isActive?: boolean;
}

interface PromptHistoryProps {
  showChatInput?: boolean;
  onSubmit?: (query: string) => void;
}

export function PromptHistory({ showChatInput = false, onSubmit }: PromptHistoryProps) {
  const [query, setQuery] = React.useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim() && onSubmit) {
      onSubmit(query);
      setQuery('');
    }
  };
  
  const prompts: PromptItem[] = [
    {
      query: 'What should we build next?',
      timestamp: '2 min ago',
      isActive: true,
    },
    {
      query: 'Analyze user churn data',
      timestamp: '1 hour ago',
    },
    {
      query: 'Top feature requests',
      timestamp: '3 hours ago',
    },
    {
      query: 'Reddit sentiment analysis',
      timestamp: 'Yesterday',
    },
  ];
  
  return (
    <div className="w-72 h-full bg-[#0A0A0F] border-r border-white/10 flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-white/10">
        <div className="flex items-center gap-2 text-gray-400">
          <Clock className="w-4 h-4" />
          <span className="text-sm font-medium">History</span>
        </div>
      </div>
      
      {/* Prompt List */}
      <div className="flex-1 overflow-y-auto p-3 space-y-1">
        {prompts.map((prompt, index) => (
          <button
            key={index}
            className={`
              w-full text-left p-3 rounded-lg transition-all
              ${prompt.isActive 
                ? 'bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30' 
                : 'hover:bg-white/5'
              }
            `}
          >
            <div className="flex items-start gap-2 mb-1.5">
              <Sparkles className={`w-4 h-4 mt-0.5 flex-shrink-0 ${prompt.isActive ? 'text-purple-400' : 'text-gray-500'}`} />
              <p className={`text-sm line-clamp-2 ${prompt.isActive ? 'text-white' : 'text-gray-400'}`}>
                {prompt.query}
              </p>
            </div>
            <span className="text-xs text-gray-500 ml-6">{prompt.timestamp}</span>
          </button>
        ))}
      </div>
      
      {/* Chat Input at Bottom (if enabled) */}
      {showChatInput && (
        <div className="p-4 border-t border-white/10">
          <form onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask anything..."
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 text-sm"
              />
            </div>
          </form>
        </div>
      )}
    </div>
  );
}