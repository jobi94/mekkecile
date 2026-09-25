export interface Testimonial {
  quote: string;
  author: string;
  institution: string;
}

// Empty until the user supplies real, permitted references ({{REFERENCES}}).
// The "Reference" section hides itself automatically when this array is empty.
export const testimonials: Testimonial[] = [];
