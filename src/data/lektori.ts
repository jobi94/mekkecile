export interface Lecturer {
  name: string;
  role: string;
  qualifications: string[];
  photo?: string;
}

// Empty until the user supplies real lecturers ({{LECTURERS}}).
// The "Lektoři" section hides itself automatically when this array is empty.
export const lecturers: Lecturer[] = [];
