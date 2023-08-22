export type CoursesProps = {
  content: Course[];
}

export type Course = {
  name: string;
  id: number;
  parts: Part[];
};

export type Part = {
  name: string;
  exercises: number;
  id: number;
};
