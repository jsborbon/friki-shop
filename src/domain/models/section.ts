/**
 * Section-related type definitions
 */

// Section Model (matches the Prisma `section` table)
export interface Section {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}
