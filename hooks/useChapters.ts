"use client";

import { useQuery } from "@tanstack/react-query";

export interface Chapter {
  subject: string;
  chapter: string;
  class: string;
  unit: string;
  yearWiseQuestionCount: {
    [year: string]: number;
  };
  questionSolved: number;
  status: "Not Started" | "In Progress" | "Completed";
  isWeakChapter: boolean;
}

export const useChapters = () => {
  return useQuery<Chapter[]>({
    queryKey: ["chapters"],
    queryFn: async () => {
      const response = await fetch("/api/chapters");
      if (!response.ok) {
        throw new Error("Failed to fetch chapter data");
      }
      return response.json();
    },
  });
};

export const useFilteredChapters = (
  chapters: Chapter[] = [],
  activeSubject: string,
  weakChaptersOnly: boolean,
  notStartedOnly: boolean,
  selectedClasses: string[],
  selectedUnits: string[],
  sortAscending: boolean
) => {
  // Filter chapters based on active subject and filters
  let filteredChapters = chapters
    .filter((chapter) => chapter.subject === activeSubject)
    .filter((chapter) => !weakChaptersOnly || chapter.isWeakChapter)
    .filter((chapter) => !notStartedOnly || chapter.status === "Not Started")
    .filter(
      (chapter) =>
        selectedClasses.length === 0 || selectedClasses.includes(chapter.class)
    )
    .filter(
      (chapter) =>
        selectedUnits.length === 0 || selectedUnits.includes(chapter.unit)
    );

  // Sort chapters
  filteredChapters = [...filteredChapters].sort((a, b) => {
    if (sortAscending) {
      return a.chapter.localeCompare(b.chapter);
    } else {
      return b.chapter.localeCompare(a.chapter);
    }
  });

  return filteredChapters;
};

export const useUniqueValues = (chapters: Chapter[] = [], activeSubject: string) => {
  // Get unique classes and units for the active subject
  const uniqueClasses = Array.from(
    new Set(
      chapters
        .filter((chapter) => chapter.subject === activeSubject)
        .map((chapter) => chapter.class)
    )
  );

  const uniqueUnits = Array.from(
    new Set(
      chapters
        .filter((chapter) => chapter.subject === activeSubject)
        .map((chapter) => chapter.unit)
    )
  );

  return { uniqueClasses, uniqueUnits };
};
