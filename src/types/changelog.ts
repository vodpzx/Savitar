export type ChangeType = 'feature' | 'security' | 'performance' | 'fix' | 'improvement';

export interface Change {
  type: ChangeType;
  description: string;
}

export interface ChangelogEntry {
  version: string;
  date: string;
  changes: Change[];
}