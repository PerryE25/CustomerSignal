import { Sidebar } from '../components/Sidebar';
import { MessageSquare, ThumbsUp, TrendingUp } from 'lucide-react';

export function Reddit() {
  const posts = [
    {
      title: 'This app is unusable on slow connections',
      subreddit: 'r/productfeedback',
      upvotes: 847,
      comments: 92,
      sentiment: 'negative',
      excerpt: 'Takes forever to load the dashboard. I have to wait 10+ seconds every time...',
    },
    {
      title: 'The onboarding flow needs serious work',
      subreddit: 'r/SaaS',
      upvotes: 523,
      comments: 67,
      sentiment: 'negative',
      excerpt: 'Spent 15 minutes trying to figure out how to get started. Where\'s the quick start guide?',
    },
    {
      title: 'Why isn\'t there a better search feature?',
      subreddit: 'r/productreviews',
      upvotes: 412,
      comments: 45,
      sentiment: 'neutral',
      excerpt: 'I love the product but the search is really basic. Can\'t filter by date, category, etc.',
    },
  ];
  
  return (
    <div className="flex h-screen bg-[#05050A] overflow-hidden">
      <Sidebar />
      
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-5xl mx-auto px-8 py-12">
          <div className="mb-8">
            <h1 className="text-3xl text-white mb-3">Reddit</h1>
            <p className="text-gray-400">Community feedback and discussions</p>
          </div>
          
          <div className="space-y-4">
            {posts.map((post, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-purple-500/30 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30">
                    <MessageSquare className="w-6 h-6 text-purple-400" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h3 className="text-xl text-white mb-1">{post.title}</h3>
                        <span className="text-sm text-purple-400">{post.subreddit}</span>
                      </div>
                      <span
                        className={`
                          px-3 py-1 rounded-md text-sm font-medium whitespace-nowrap ml-4
                          ${post.sentiment === 'negative' 
                            ? 'bg-red-500/20 text-red-300 border border-red-500/30'
                            : post.sentiment === 'neutral'
                            ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                            : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                          }
                        `}
                      >
                        {post.sentiment}
                      </span>
                    </div>
                    
                    <p className="text-gray-400 mb-3">{post.excerpt}</p>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1.5">
                        <ThumbsUp className="w-4 h-4" />
                        {post.upvotes} upvotes
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MessageSquare className="w-4 h-4" />
                        {post.comments} comments
                      </span>
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
