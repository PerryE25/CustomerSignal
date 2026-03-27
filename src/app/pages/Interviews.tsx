import { Sidebar } from '../components/Sidebar';
import { MessageSquare, Calendar, User } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Interviews() {
  const interviews = [
    {
      participant: 'Sarah M.',
      date: 'Mar 25, 2026',
      duration: '45 min',
      summary: 'Struggled with initial setup. Wants faster dashboard loading.',
      tags: ['Onboarding', 'Performance'],
      imageUrl: 'https://images.unsplash.com/photo-1758613656365-5195c3b96ba3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGNhbGwlMjBpbnRlcnZpZXclMjB3b21hbnxlbnwxfHx8fDE3NzQ2NDk5Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      participant: 'David L.',
      date: 'Mar 23, 2026',
      duration: '30 min',
      summary: 'Search functionality is confusing. Suggested better filters.',
      tags: ['Search', 'UX'],
      imageUrl: 'https://images.unsplash.com/photo-1758525588839-97e6313401e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjB2aWRlbyUyMGNvbmZlcmVuY2UlMjBtZWV0aW5nfGVufDF8fHx8MTc3NDY0OTk2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      participant: 'Emma K.',
      date: 'Mar 20, 2026',
      duration: '60 min',
      summary: 'Loves the core features but wants mobile app. Desktop is too slow.',
      tags: ['Mobile', 'Performance'],
      imageUrl: 'https://images.unsplash.com/photo-1735956908173-8c9cfdf546e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHpvb20lMjBjYWxsJTIwbGFwdG9wfGVufDF8fHx8MTc3NDY0OTk3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      participant: 'Marcus T.',
      date: 'Mar 18, 2026',
      duration: '40 min',
      summary: 'Analytics dashboard is powerful but overwhelming. Needs simpler views.',
      tags: ['Analytics', 'UX'],
      imageUrl: 'https://images.unsplash.com/photo-1758525588828-c99e1b79936e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbiUyMG9ubGluZSUyMG1lZXRpbmd8ZW58MXx8fHwxNzc0NjQ5OTcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      participant: 'Lisa C.',
      date: 'Mar 15, 2026',
      duration: '50 min',
      summary: 'Export features are missing. Would like CSV and PDF options.',
      tags: ['Export', 'Feature Request'],
      imageUrl: 'https://images.unsplash.com/photo-1646172615914-d980737c59b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHZpcnR1YWwlMjBtZWV0aW5nJTIwaGVhZHNldHxlbnwxfHx8fDE3NzQ2NDk5NzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      participant: 'Carlos R.',
      date: 'Mar 12, 2026',
      duration: '35 min',
      summary: 'Collaboration features needed. Team sharing and comments would help.',
      tags: ['Collaboration', 'Feature Request'],
      imageUrl: 'https://images.unsplash.com/photo-1599576219848-222b20473611?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjByZW1vdGUlMjBpbnRlcnZpZXclMjB2aWRlb3xlbnwxfHx8fDE3NzQ2NDk5NzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];
  
  return (
    <div className="flex h-screen bg-[#05050A] overflow-hidden">
      <Sidebar />
      
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-6xl mx-auto px-8 py-12">
          <div className="mb-8">
            <h1 className="text-3xl text-white mb-3">Interviews</h1>
            <p className="text-gray-400">User interview transcripts and summaries</p>
          </div>
          
          <div className="space-y-3">
            {interviews.map((interview, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-xl hover:bg-white/[0.07] hover:border-purple-500/30 transition-all cursor-pointer group"
              >
                <div className="flex gap-4 p-4">
                  {/* YouTube-style Thumbnail */}
                  <div className="relative w-64 h-36 flex-shrink-0 rounded-xl overflow-hidden bg-gradient-to-br from-purple-900/20 to-blue-900/20">
                    <ImageWithFallback 
                      src={interview.imageUrl}
                      alt={interview.participant}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Duration Badge */}
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-0.5 rounded font-medium">
                      {interview.duration}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0 py-1">
                    <h3 className="text-lg text-white mb-2 font-medium">
                      {interview.participant}
                    </h3>
                    
                    <p className="text-sm text-gray-300 mb-3 line-clamp-2">
                      {interview.summary}
                    </p>
                    
                    <div className="flex items-center gap-3 text-sm text-gray-400 mb-3">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {interview.date}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {interview.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2.5 py-1 rounded-md text-xs font-medium bg-blue-500/20 text-blue-300 border border-blue-500/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}