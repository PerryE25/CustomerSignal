import { Sparkles } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router';

export function ChatInput() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      // Navigate to AI output page
      navigate('/ai-output');
    }
  };
  
  return (
    <div className="w-full max-w-3xl mx-auto px-6 py-8">
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask anything..."
            className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl 
                     text-white placeholder:text-gray-500
                     focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20
                     transition-all duration-200"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 
                     p-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500
                     hover:from-purple-600 hover:to-blue-600
                     transition-all duration-200"
          >
            <Sparkles className="w-5 h-5 text-white" />
          </button>
        </div>
        
        <div className="mt-3 text-center">
          <span className="text-sm text-gray-500">
            👉 Try: <span className="text-gray-400">"What should we build next?"</span>
          </span>
        </div>
      </form>
    </div>
  );
}