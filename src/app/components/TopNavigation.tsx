import { Sparkles, FileText, Kanban } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router';

export function TopNavigation() {
  const navigate = useNavigate();
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <div className="h-14 border-b border-white/10 bg-[#0A0A0F] flex items-center justify-between px-6">
      {/* Left side - Logo/Title - Clickable to go home */}
      <button 
        onClick={() => navigate('/')}
        className="flex items-center gap-3 hover:opacity-80 transition-opacity"
      >
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
          <Sparkles className="w-5 h-5 text-white" />
        </div>
        <h1 className="text-white font-semibold">Customer Signal</h1>
      </button>
      
      {/* Right side - Navigation Buttons */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => navigate('/ai-output')}
          className={`
            flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all
            ${isActive('/ai-output')
              ? 'bg-white/10 text-white border border-white/20'
              : 'text-gray-400 hover:text-white hover:bg-white/5'
            }
          `}
        >
          <Sparkles className="w-4 h-4" />
          <span>Evidence</span>
        </button>
        
        <button
          onClick={() => navigate('/prd')}
          className={`
            flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all
            ${isActive('/prd')
              ? 'bg-white/10 text-white border border-white/20'
              : 'text-gray-400 hover:text-white hover:bg-white/5'
            }
          `}
        >
          <FileText className="w-4 h-4" />
          <span>PRD</span>
        </button>
        
        <button
          onClick={() => navigate('/tickets')}
          className={`
            flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all
            ${isActive('/tickets')
              ? 'bg-white/10 text-white border border-white/20'
              : 'text-gray-400 hover:text-white hover:bg-white/5'
            }
          `}
        >
          <Kanban className="w-4 h-4" />
          <span>Tickets</span>
        </button>
      </div>
    </div>
  );
}