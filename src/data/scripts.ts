export interface Script {
  id: string;
  name: string;
  rating: number;
  downloads: string;
  loadstring: string;
  description: string;
  features: string[];
  author: string;
  lastUpdated: string;
}

export const scripts: Script[] = [
  { 
    id: 'admin-commands',
    name: 'Admin Commands', 
    rating: 4.9, 
    downloads: '12k+',
    loadstring: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/CMD-X/CMD-X/master/Source"))()',
    description: 'Powerful admin commands for game manipulation and control',
    features: [
      'Server-side command execution',
      'Player management tools',
      'Environment manipulation',
      'Advanced user interface'
    ],
    author: 'CMD-X Team',
    lastUpdated: '2024-03-15'
  },
  { 
    id: 'infinite-yield',
    name: 'Infinite Yield', 
    rating: 4.8, 
    downloads: '50k+',
    loadstring: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/EdgeIY/infiniteyield/master/source"))()',
    description: 'Feature-rich admin command suite with extensive functionality',
    features: [
      'Over 300+ commands',
      'Custom command support',
      'Plugin system',
      'Regular updates'
    ],
    author: 'Edge Team',
    lastUpdated: '2024-03-10'
  },
  { 
    id: 'dark-dex',
    name: 'Dark Dex', 
    rating: 4.7, 
    downloads: '30k+',
    loadstring: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/Babyhamsta/RBLX_Scripts/main/Universal/BypassedDarkDex.lua"))()',
    description: 'Advanced game explorer and debugger',
    features: [
      'Full game hierarchy view',
      'Property editor',
      'Script viewer',
      'Instance explorer'
    ],
    author: 'Moon Team',
    lastUpdated: '2024-03-01'
  },
];