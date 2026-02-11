export interface WorkExperienceEntry {
  title: string;
  tagline: string;
  dateRange: string;
  bullets: string[];
}

export interface WorkExperienceEntryProps {
  entry: WorkExperienceEntry;
  isLast?: boolean;
}
