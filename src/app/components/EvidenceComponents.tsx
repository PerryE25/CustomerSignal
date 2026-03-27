import { ExternalLink, Play } from 'lucide-react';

interface VideoClipProps {
  clipNumber: number;
  timestamp: string;
  thumbnail?: string;
}

export function VideoClip({ clipNumber, timestamp }: VideoClipProps) {
  return (
    <button className="relative group w-full bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-purple-500/50 transition-all">
      {/* Thumbnail */}
      <div className="aspect-video bg-gradient-to-br from-purple-900/40 to-blue-900/40 flex items-center justify-center">
        <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-all">
          <Play className="w-6 h-6 text-white ml-1" />
        </div>
      </div>
      
      {/* Info */}
      <div className="p-3 border-t border-white/10">
        <div className="flex items-center justify-between">
          <span className="text-sm text-white">Clip {clipNumber}</span>
          <span className="text-xs text-purple-400 font-medium">{timestamp}</span>
        </div>
      </div>
      
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:to-blue-500/10 transition-all pointer-events-none" />
    </button>
  );
}

interface RedditLinkProps {
  subreddit: string;
  title: string;
  url: string;
}

export function RedditLink({ subreddit, title, url }: RedditLinkProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-4 bg-white/5 border border-white/10 rounded-lg hover:border-purple-500/50 hover:bg-white/10 transition-all group"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs text-purple-400 font-medium">{subreddit}</span>
            <ExternalLink className="w-3 h-3 text-gray-500 group-hover:text-purple-400 transition-colors" />
          </div>
          <p className="text-sm text-gray-300 line-clamp-1">"{title}"</p>
        </div>
      </div>
    </a>
  );
}

interface AnalyticsStatProps {
  stat: string;
  description: string;
}

export function AnalyticsStat({ stat, description }: AnalyticsStatProps) {
  return (
    <div className="p-4 bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/30 rounded-lg">
      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-semibold text-red-400">{stat}</span>
        <span className="text-sm text-gray-400">{description}</span>
      </div>
    </div>
  );
}
