import { PromptHistory } from '../components/PromptHistory';
import { TopNavigation } from '../components/TopNavigation';
import { VideoClip, RedditLink, AnalyticsStat } from '../components/EvidenceComponents';
import { Lightbulb, CheckCircle2, FileText, ArrowRight, ChevronDown, ChevronUp, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router';
import { useState, useEffect } from 'react';

export function AIOutput() {
  const navigate = useNavigate();
  const [showEvidence, setShowEvidence] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [streamingSection, setStreamingSection] = useState(0);
  const [isStreaming, setIsStreaming] = useState(false);
  
  // Content sections that will stream in
  const contentSections = [
    'header', // Title and tags
    'metrics', // Metrics badges
    'description', // Description text
    'evidenceButton', // Show evidence button
    'complete' // All done
  ];
  
  const handleNewQuery = (query: string) => {
    // Reset and start streaming animation
    setShowEvidence(false);
    setStreamingSection(0);
    setIsStreaming(false);
    setIsThinking(true);
    
    // Show thinking animation for 1.5 seconds
    setTimeout(() => {
      setIsThinking(false);
      setIsStreaming(true);
      setStreamingSection(0);
    }, 1500);
  };
  
  // Stream content sections one by one
  useEffect(() => {
    if (isStreaming && streamingSection < contentSections.length) {
      const timer = setTimeout(() => {
        setStreamingSection(prev => prev + 1);
      }, 600); // Each section appears after 600ms
      return () => clearTimeout(timer);
    }
  }, [isStreaming, streamingSection]);
  
  const showSection = (sectionName: string) => {
    if (!isStreaming) return true; // Show all if not streaming
    const sectionIndex = contentSections.indexOf(sectionName);
    return streamingSection > sectionIndex;
  };
  
  return (
    <div className="flex h-screen bg-[#05050A] overflow-hidden">
      {/* Left: Prompt History with Chat Input */}
      <PromptHistory showChatInput={true} onSubmit={handleNewQuery} />
      
      {/* Main Content - No top chat bar */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation */}
        <TopNavigation />
        
        {/* Thinking Animation */}
        {isThinking && (
          <div className="border-b border-white/10 bg-[#0A0A0F] px-6 py-4">
            <div className="flex items-center gap-3 text-purple-400">
              <Loader2 className="w-5 h-5 animate-spin" />
              <span className="text-sm font-medium">Analyzing Reddit + interviews...</span>
            </div>
          </div>
        )}
        
        {/* AI Output Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto px-6 py-8">
            {/* Feature Suggestion Header */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full mb-4">
                <Lightbulb className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-medium text-purple-300">AI Recommendation</span>
              </div>
              
              {showSection('header') && (
                <div className="animate-fadeIn">
                  <h1 className="text-3xl text-white mb-3">
                    Top Opportunity: Improve onboarding drop-off
                  </h1>
                  
                  {/* Tags */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-emerald-500/20 border border-emerald-500/40 rounded-full text-xs font-semibold text-emerald-300">
                      High Impact
                    </span>
                    <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/40 rounded-full text-xs font-semibold text-blue-300">
                      Low Effort
                    </span>
                    <span className="px-3 py-1 bg-red-500/20 border border-red-500/40 rounded-full text-xs font-semibold text-red-300">
                      Churn Driver
                    </span>
                  </div>
                </div>
              )}
              
              {/* Metrics Badges */}
              {showSection('metrics') && (
                <div className="flex items-center gap-3 mb-4 animate-fadeIn">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
                    <span className="text-lg font-bold text-emerald-400">+14%</span>
                    <span className="text-xs text-gray-400">Activation</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-red-500/10 border border-red-500/30 rounded-lg">
                    <span className="text-lg font-bold text-red-400">-22%</span>
                    <span className="text-xs text-gray-400">Churn</span>
                  </div>
                </div>
              )}
              
              {showSection('description') && (
                <p className="text-gray-400 animate-fadeIn">
                  Based on analysis of 47 data points across interviews, Reddit discussions, and analytics
                </p>
              )}
              
              {/* Show Evidence Button */}
              {showSection('evidenceButton') && (
                <button
                  onClick={() => setShowEvidence(!showEvidence)}
                  className="mt-4 flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/30 rounded-lg transition-all animate-fadeIn"
                >
                  <span className="text-sm font-medium text-white">Show Evidence</span>
                  {showEvidence ? (
                    <ChevronUp className="w-4 h-4 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  )}
                </button>
              )}
            </div>
            
            {/* Evidence Section - Collapsible */}
            {showEvidence && (
              <div className="space-y-8 mb-8">
                
                {/* Interviews */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h2 className="text-xl text-white mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                    Interviews
                  </h2>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <VideoClip clipNumber={1} timestamp="1:24" />
                    <VideoClip clipNumber={2} timestamp="2:11" />
                  </div>
                  
                  <div className="mt-4 p-4 bg-white/5 rounded-lg border border-white/5">
                    <p className="text-sm text-gray-300 italic">
                      "I almost gave up during signup. There were too many steps and I didn't understand why I needed to fill out all this information."
                    </p>
                    <span className="text-xs text-gray-500 mt-2 block">— Sarah M., Interview Clip 1</span>
                  </div>
                </div>
                
                {/* Reddit */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h2 className="text-xl text-white mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                    Reddit
                  </h2>
                  
                  <div className="space-y-3">
                    <RedditLink
                      subreddit="r/product"
                      title="signup is confusing"
                      url="https://reddit.com/r/product"
                    />
                    <RedditLink
                      subreddit="r/startups"
                      title="too many steps"
                      url="https://reddit.com/r/startups"
                    />
                    <RedditLink
                      subreddit="r/SaaS"
                      title="lost me at step 4, what even is this?"
                      url="https://reddit.com/r/SaaS"
                    />
                  </div>
                </div>
                
                {/* Analytics */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h2 className="text-xl text-white mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-400"></span>
                    Analytics
                  </h2>
                  
                  <AnalyticsStat
                    stat="32%"
                    description="drop-off at step 2"
                  />
                </div>
              </div>
            )}
            
            {/* Suggested Feature */}
            <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/30 rounded-xl p-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-xl text-white mb-1">Suggested Feature</h2>
                  <p className="text-sm text-gray-400">Recommended actions to address this opportunity</p>
                </div>
              </div>
              
              <div className="space-y-3 ml-11">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2"></div>
                  <p className="text-gray-200">Reduce onboarding steps from 6 → 3</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2"></div>
                  <p className="text-gray-200">Add progress indicator</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2"></div>
                  <p className="text-gray-200">Make optional fields clearly skippable</p>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-purple-500/20">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Expected impact</span>
                  <span className="text-lg font-semibold text-emerald-400">+18% activation</span>
                </div>
              </div>
            </div>
            
            {/* Generate PRD Button */}
            <div className="flex justify-center pt-4 pb-8">
              <button
                onClick={() => navigate('/prd')}
                className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 rounded-xl transition-all shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40"
              >
                <FileText className="w-5 h-5 text-white" />
                <span className="text-white font-medium">Generate PRD</span>
                <ArrowRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}