import { Link, useLocation } from 'react-router';
import { BarChart3, MessageSquare, Search } from 'lucide-react';

export function Sidebar() {
  const location = useLocation();
  
  const navItems = [
    { path: '/insights', label: 'INSIGHTS', icon: BarChart3 },
    { path: '/interviews', label: 'INTERVIEWS', icon: MessageSquare },
    { path: '/reddit', label: 'REDDIT', icon: Search },
  ];
  
  return (
    <div className="w-64 h-full bg-[#0A0A0F] border-r border-white/10 flex flex-col">
      {/* Logo/Brand */}
      <div className="p-6 border-b border-white/10">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Customer Signal
          </span>
        </Link>
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`
                flex items-center gap-4 px-4 py-4 rounded-lg transition-all
                ${isActive 
                  ? 'bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30' 
                  : 'hover:bg-white/5'
                }
              `}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-purple-400' : 'text-gray-400'}`} />
              <span className={`
                text-[19px] font-semibold tracking-wide
                ${isActive ? 'text-white' : 'text-gray-400'}
              `}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}