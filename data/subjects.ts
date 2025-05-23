import { Subject } from '@/components/SubjectCard';

export const subjects: Subject[] = [
  {
    id: 'math',
    name: 'Mathematics',
    nameHindi: 'गणित',
    color: '#3B82F6', // Blue
    icon: 'math',
  },
  {
    id: 'science',
    name: 'Science',
    nameHindi: 'विज्ञान',
    color: '#10B981', // Green
    icon: 'science',
  },
  {
    id: 'physics',
    name: 'Physics',
    nameHindi: 'भौतिक विज्ञान',
    color: '#6366F1', // Indigo
    icon: 'physics',
  },
  {
    id: 'chemistry',
    name: 'Chemistry',
    nameHindi: 'रसायन विज्ञान',
    color: '#F59E0B', // Amber
    icon: 'science',
  },
  {
    id: 'biology',
    name: 'Biology',
    nameHindi: 'जीव विज्ञान',
    color: '#84CC16', // Lime
    icon: 'science',
  },
  {
    id: 'geography',
    name: 'Geography',
    nameHindi: 'भूगोल',
    color: '#8B5CF6', // Violet
    icon: 'geography',
  },
];

export const getSubject = (id: string): Subject | undefined => {
  return subjects.find(subject => subject.id === id);
};