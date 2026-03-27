import { Circle } from 'lucide-react';

interface TaskCardProps {
  title: string;
  storyPoints: number;
  id: string;
  priority?: 'high' | 'medium' | 'low';
}

export function TaskCard({ title, storyPoints, id, priority = 'medium' }: TaskCardProps) {
  const priorityColors = {
    high: 'text-red-400 border-red-500/30',
    medium: 'text-yellow-400 border-yellow-500/30',
    low: 'text-blue-400 border-blue-500/30',
  };
  
  return (
    <div className="bg-[#0A0A0F] border border-white/10 rounded-lg p-4 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/10 transition-all cursor-grab active:cursor-grabbing group">
      {/* ID */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-gray-500 font-mono">{id}</span>
        <Circle className={`w-2 h-2 ${priorityColors[priority].split(' ')[0]} fill-current`} />
      </div>
      
      {/* Title */}
      <h3 className="text-white mb-3 leading-snug group-hover:text-purple-300 transition-colors">
        {title}
      </h3>
      
      {/* Story Points */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 rounded bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
            <span className="text-xs text-purple-400 font-semibold">{storyPoints}</span>
          </div>
          <span className="text-xs text-gray-500">SP</span>
        </div>
      </div>
    </div>
  );
}

interface KanbanColumnProps {
  title: string;
  count: number;
  children: React.ReactNode;
}

export function KanbanColumn({ title, count, children }: KanbanColumnProps) {
  return (
    <div className="flex-1 min-w-[320px] flex flex-col">
      {/* Column Header */}
      <div className="px-4 py-3 border-b border-white/10 bg-[#0A0A0F]/50">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
            {title}
          </h2>
          <span className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded-full">
            {count}
          </span>
        </div>
      </div>
      
      {/* Cards Container */}
      <div className="flex-1 p-4 space-y-3 bg-[#05050A]">
        {children}
      </div>
    </div>
  );
}
