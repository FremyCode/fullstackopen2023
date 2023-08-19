export type CourseContentProps = {
  content: CourseContentItem[];
};

export type CourseContentItem = {
  part: string;
  exercises: number;
};

export type FeedbackProps = {
  feedbackStats: FeedbackItem[]
}

export type FeedbackItem = {
  label: string;
  value: number;
}
