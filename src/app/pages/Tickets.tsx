import { PromptHistory } from '../components/PromptHistory';
import { TopNavigation } from '../components/TopNavigation';
import { KanbanColumn, TaskCard } from '../components/KanbanComponents';
import { LayoutGrid, Users, Calendar } from 'lucide-react';

export function Tickets() {
  return (
    <div className="flex h-screen bg-[#05050A] overflow-hidden">
      {/* Left: Prompt History with Chat Input */}
      <PromptHistory showChatInput={true} />
      
      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation */}
        <TopNavigation />
        
        {/* Board Header */}
        <div className="border-b border-white/10 bg-[#0A0A0F]/50 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 text-gray-500 text-xs mb-1">
                <LayoutGrid className="w-3 h-3" />
                <span>SPRINT 12</span>
              </div>
              <h1 className="text-2xl text-white">Simplified Onboarding</h1>
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2 text-gray-400">
                <Users className="w-4 h-4" />
                <span>3 members</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Calendar className="w-4 h-4" />
                <span>2 weeks</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-400">Total:</span>
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
                    <span className="text-xs text-purple-400 font-semibold">6</span>
                  </div>
                  <span className="text-xs text-gray-500">SP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Kanban Board */}
        <div className="flex-1 overflow-x-auto overflow-y-hidden">
          <div className="flex h-full min-w-max">
            {/* TO DO Column */}
            <KanbanColumn title="To Do" count={2}>
              <TaskCard
                id="CS-101"
                title="Reduce onboarding fields"
                storyPoints={3}
                priority="high"
              />
              <TaskCard
                id="CS-102"
                title="Add progress indicator"
                storyPoints={2}
                priority="medium"
              />
            </KanbanColumn>
            
            {/* IN PROGRESS Column */}
            <KanbanColumn title="In Progress" count={1}>
              <TaskCard
                id="CS-103"
                title="Improve onboarding copy"
                storyPoints={1}
                priority="low"
              />
            </KanbanColumn>
            
            {/* DONE Column */}
            <KanbanColumn title="Done" count={0}>
              {/* Empty state */}
              <div className="flex items-center justify-center h-32 text-gray-600 text-sm">
                No completed tasks yet
              </div>
            </KanbanColumn>
          </div>
        </div>
      </main>
    </div>
  );
}