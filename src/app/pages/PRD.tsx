import { PromptHistory } from '../components/PromptHistory';
import { TopNavigation } from '../components/TopNavigation';
import { 
  AlertCircle, 
  Target, 
  Lightbulb, 
  CheckSquare, 
  FileText,
  Video,
  MessageSquare,
  TrendingDown,
  Kanban,
  ArrowRight
} from 'lucide-react';
import { useNavigate } from 'react-router';

export function PRD() {
  const navigate = useNavigate();
  
  return (
    <div className="flex h-screen bg-[#05050A] overflow-hidden">
      {/* Left: Prompt History with Chat Input */}
      <PromptHistory showChatInput={true} />
      
      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation */}
        <TopNavigation />
        
        {/* PRD Content - Notion Style */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto px-12 py-12">
            
            {/* Header */}
            <div className="mb-12">
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                <FileText className="w-4 h-4" />
                <span>Product Requirements Document</span>
              </div>
              <h1 className="text-4xl text-white mb-4">
                Feature: Simplified Onboarding
              </h1>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span>Created: Mar 27, 2026</span>
                <span>•</span>
                <span>Status: <span className="text-purple-400">Draft</span></span>
              </div>
            </div>
            
            <div className="h-px bg-white/10 mb-12"></div>
            
            {/* Problem Section */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-red-500/10 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-red-400" />
                </div>
                <h2 className="text-2xl text-white">Problem</h2>
              </div>
              <div className="ml-11">
                <p className="text-gray-300 leading-relaxed mb-4">
                  Users drop off during signup due to friction. Current onboarding flow has 6 steps with multiple required fields, causing confusion and abandonment.
                </p>
                <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                  <p className="text-sm text-gray-400">
                    "I almost gave up during signup. There were too many steps and I didn't understand why I needed to fill out all this information."
                  </p>
                  <span className="text-xs text-gray-500 mt-2 block">— User feedback</span>
                </div>
              </div>
            </section>
            
            {/* Evidence Section */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-500/10 rounded-lg">
                  <FileText className="w-5 h-5 text-purple-400" />
                </div>
                <h2 className="text-2xl text-white">Evidence</h2>
              </div>
              <div className="ml-11 space-y-3">
                <div className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-lg">
                  <Video className="w-5 h-5 text-purple-400" />
                  <div className="flex-1">
                    <span className="text-gray-300">6 interview clips</span>
                    <p className="text-xs text-gray-500 mt-0.5">Users expressing frustration with signup process</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-lg">
                  <MessageSquare className="w-5 h-5 text-blue-400" />
                  <div className="flex-1">
                    <span className="text-gray-300">7 Reddit complaints</span>
                    <p className="text-xs text-gray-500 mt-0.5">Community feedback about onboarding complexity</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                  <TrendingDown className="w-5 h-5 text-red-400" />
                  <div className="flex-1">
                    <span className="text-gray-300">32% drop-off at step 2</span>
                    <p className="text-xs text-gray-500 mt-0.5">Analytics data from last 30 days</p>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Goal Section */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-emerald-500/10 rounded-lg">
                  <Target className="w-5 h-5 text-emerald-400" />
                </div>
                <h2 className="text-2xl text-white">Goal</h2>
              </div>
              <div className="ml-11">
                <p className="text-gray-300 leading-relaxed mb-4">
                  Increase activation rate by reducing friction in the onboarding process
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                    <div className="text-sm text-gray-400 mb-1">Target Metric</div>
                    <div className="text-2xl text-emerald-400">+18%</div>
                    <div className="text-xs text-gray-500 mt-1">Activation rate increase</div>
                  </div>
                  <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                    <div className="text-sm text-gray-400 mb-1">Timeline</div>
                    <div className="text-2xl text-white">2 weeks</div>
                    <div className="text-xs text-gray-500 mt-1">Development + testing</div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Solution Section */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <Lightbulb className="w-5 h-5 text-blue-400" />
                </div>
                <h2 className="text-2xl text-white">Solution</h2>
              </div>
              <div className="ml-11 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs text-blue-400">1</span>
                  </div>
                  <div>
                    <h3 className="text-white mb-1">Reduce steps from 6 → 3</h3>
                    <p className="text-sm text-gray-400">Consolidate form fields and remove non-essential information gathering</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs text-blue-400">2</span>
                  </div>
                  <div>
                    <h3 className="text-white mb-1">Add progress bar</h3>
                    <p className="text-sm text-gray-400">Visual indicator showing users where they are in the process</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs text-blue-400">3</span>
                  </div>
                  <div>
                    <h3 className="text-white mb-1">Make optional fields skippable</h3>
                    <p className="text-sm text-gray-400">Clearly label optional fields with "Skip" button option</p>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Acceptance Criteria Section */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-500/10 rounded-lg">
                  <CheckSquare className="w-5 h-5 text-purple-400" />
                </div>
                <h2 className="text-2xl text-white">Acceptance Criteria</h2>
              </div>
              <div className="ml-11 space-y-2">
                <div className="flex items-start gap-3 p-3 bg-white/5 border border-white/10 rounded-lg hover:border-purple-500/30 transition-colors">
                  <div className="w-5 h-5 rounded border-2 border-gray-600 flex-shrink-0 mt-0.5"></div>
                  <span className="text-gray-300">Onboarding reduced to 3 steps maximum</span>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-white/5 border border-white/10 rounded-lg hover:border-purple-500/30 transition-colors">
                  <div className="w-5 h-5 rounded border-2 border-gray-600 flex-shrink-0 mt-0.5"></div>
                  <span className="text-gray-300">Progress bar visible at all times during signup</span>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-white/5 border border-white/10 rounded-lg hover:border-purple-500/30 transition-colors">
                  <div className="w-5 h-5 rounded border-2 border-gray-600 flex-shrink-0 mt-0.5"></div>
                  <span className="text-gray-300">Only email and password required fields remain</span>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-white/5 border border-white/10 rounded-lg hover:border-purple-500/30 transition-colors">
                  <div className="w-5 h-5 rounded border-2 border-gray-600 flex-shrink-0 mt-0.5"></div>
                  <span className="text-gray-300">Clear UI with "Skip" buttons for optional fields</span>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-white/5 border border-white/10 rounded-lg hover:border-purple-500/30 transition-colors">
                  <div className="w-5 h-5 rounded border-2 border-gray-600 flex-shrink-0 mt-0.5"></div>
                  <span className="text-gray-300">Average completion time under 90 seconds</span>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-white/5 border border-white/10 rounded-lg hover:border-purple-500/30 transition-colors">
                  <div className="w-5 h-5 rounded border-2 border-gray-600 flex-shrink-0 mt-0.5"></div>
                  <span className="text-gray-300">A/B test shows statistically significant improvement</span>
                </div>
              </div>
            </section>
            
            {/* Create Tickets Button */}
            <div className="flex justify-center pt-4 pb-8">
              <button
                onClick={() => navigate('/tickets')}
                className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 rounded-xl transition-all shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40"
              >
                <Kanban className="w-5 h-5 text-white" />
                <span className="text-white font-medium">Create Tickets</span>
                <ArrowRight className="w-5 h-5 text-white" />
              </button>
            </div>
            
          </div>
        </div>
      </main>
    </div>
  );
}