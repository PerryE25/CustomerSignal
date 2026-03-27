import { BarChart3, MessageSquare, Search } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface FeatureCardProps {
  feature: string;
  impact: string;
  source: string;
  tags?: string[];
  icon?: 'chart' | 'message' | 'search';
  imageUrl?: string;
}

export function FeatureCard({ feature, impact, source, tags, icon = 'chart', imageUrl }: FeatureCardProps) {
  const iconMap = {
    chart: BarChart3,
    message: MessageSquare,
    search: Search,
  };
  
  const Icon = iconMap[icon];
  
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-purple-500/30 transition-all duration-200 group cursor-pointer">
      {/* Image Preview */}
      {imageUrl && (
        <div className="relative w-full h-48 bg-gradient-to-br from-purple-900/20 to-blue-900/20 overflow-hidden">
          <ImageWithFallback 
            src={imageUrl}
            alt={feature}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      
      {/* Content */}
      <div className="p-5">
        <div className="flex items-start gap-3 mb-3">
          <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30">
            <Icon className="w-4 h-4 text-purple-400" />
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="text-white font-semibold mb-1">
              {feature}
            </h3>
            <span className="text-sm text-emerald-400 font-medium">{impact}</span>
          </div>
        </div>
        
        <p className="text-xs text-gray-400 mb-3">
          {source}
        </p>
        
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag, index) => (
              <span
                key={index}
                className={`
                  inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium
                  ${tag === 'High Impact' 
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                    : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                  }
                `}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}