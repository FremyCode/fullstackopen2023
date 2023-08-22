export type CourseContentProps = {
  name: string;
  id: number;
  parts: CourseContentItem[];
};

export type CourseContentItem = {
  id: number;
  name: string;
  exercises: number;
}
