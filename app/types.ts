export type CoursesProps = {
  content: Course[];
};

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

export type Person = {
  name: string;
  number: string;
};

export type People = {
  filteredPeople: Person[];
};
