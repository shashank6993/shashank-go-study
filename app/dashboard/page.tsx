"use client";

import { Header } from "@/components/header";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState, useEffect } from "react";
import {
  ArrowUp,
  ArrowDown,
  SortAscending,
  Atom,
  Calculator,
  Ruler,
  Compass,
  Lightning,
  Gauge,
  Scales,
  Waves,
  Lightbulb,
  Magnet,
  Flask,
  Thermometer,
  Infinity,
  Pi,
  TestTube,
} from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  useChapters,
  useFilteredChapters,
  useUniqueValues,
} from "@/hooks/useChapters";
import Image from "next/image";

// Function to get a random icon for a chapter
const getRandomIcon = (chapterName: string) => {
  const icons = [
    Ruler,
    Compass,
    Lightning,
    Gauge,
    Scales,
    Waves,
    Lightbulb,
    Magnet,
    Flask,
    Thermometer,
    TestTube,
    Infinity,
    Pi,
  ];

  const hash = chapterName
    .split("")
    .reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const IconComponent = icons[hash % icons.length];
  return <IconComponent size={20} weight="duotone" />;
};

export default function Dashboard() {
  const [activeSubject, setActiveSubject] = useState("Physics");
  const [weakChaptersOnly, setWeakChaptersOnly] = useState(false);
  const [notStartedOnly, setNotStartedOnly] = useState(false);
  const [selectedClasses, setSelectedClasses] = useState<string[]>([]);
  const [selectedUnits, setSelectedUnits] = useState<string[]>([]);
  const [sortAscending, setSortAscending] = useState(true);

  // Fetch chapter data using TanStack Query
  const { data: chaptersData = [], isLoading, error } = useChapters();

  // Get filtered chapters based on active filters
  const filteredChapters = useFilteredChapters(
    chaptersData,
    activeSubject,
    weakChaptersOnly,
    notStartedOnly,
    selectedClasses,
    selectedUnits,
    sortAscending
  );

  // Get unique classes and units for the active subject
  const { uniqueClasses, uniqueUnits } = useUniqueValues(
    chaptersData,
    activeSubject
  );

  // Count chapters
  const chapterCount = filteredChapters.length;

  // Reset filters when subject changes
  useEffect(() => {
    setSelectedClasses([]);
    setSelectedUnits([]);
  }, [activeSubject]);

  // Debugging: Log activeSubject changes
  useEffect(() => {
    console.log("Active Subject Changed:", activeSubject);
  }, [activeSubject]);

  return (
    <div className="min-h-screen dark:bg-[#222E3F] flex flex-col bg-background text-foreground">
      <Header />

      <main className="flex-1 dark:bg-[#222E3F] container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar - Hidden on mobile, visible on desktop */}
          <div className="hidden dark:bg-[#222E3F] lg:block w-64 space-y-4">
            <div className="bg-card dark:bg-[#222E3F] rounded-lg border shadow-sm p-4">
              <div className="flex items-center gap-2 mb-2 justify-center">
                <Image
                  src="/nta.png"
                  alt="India Flag"
                  width={24}
                  height={24}
                  className="inline-block"
                />
                <h2 className="font-bold text-lg">JEE Main</h2>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                2025 - 2009 | 173 Papers | 15825 Qs
              </p>

              <div className="space-y-2">
                <div
                  className={`flex items-center gap-3 p-2 rounded-md cursor-pointer transition-colors ${
                    activeSubject === "Physics"
                      ? "bg-black text-white"
                      : "hover:bg-secondary/50"
                  }`}
                  onClick={() => setActiveSubject("Physics")}
                >
                  <div className="bg-orange-500 text-white rounded-full p-1">
                    <Atom size={20} weight="fill" />
                  </div>
                  <span className="flex-1 font-medium">Physics PYQs</span>
                  <Button variant="ghost" size="icon" className="h-6 w-6">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 11L10 7.5L6 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Button>
                </div>

                <div
                  className={`flex items-center gap-3 p-2 rounded-md cursor-pointer transition-colors ${
                    activeSubject === "Chemistry"
                      ? "bg-black text-white"
                      : "hover:bg-secondary/50"
                  }`}
                  onClick={() => setActiveSubject("Chemistry")}
                >
                  <div className="bg-green-500 text-white rounded-full p-1">
                    <Flask size={20} weight="fill" />
                  </div>
                  <span className="flex-1 font-medium">Chemistry PYQs</span>
                  <Button variant="ghost" size="icon" className="h-6 w-6">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 11L10 7.5L6 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Button>
                </div>

                <div
                  className={`flex items-center gap-3 p-2 rounded-md cursor-pointer transition-colors ${
                    activeSubject === "Mathematics"
                      ? "bg-black text-white"
                      : "hover:bg-secondary/50"
                  }`}
                  onClick={() => setActiveSubject("Mathematics")}
                >
                  <div className="bg-gray-700 text-white rounded-full p-1">
                    <Calculator size={20} weight="fill" />
                  </div>
                  <span className="flex-1 font-medium">Mathematics PYQs</span>
                  <Button variant="ghost" size="icon" className="h-6 w-6">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 11L10 7.5L6 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1">
            <div className="bg-card dark:bg-[#222E3F] rounded-lg border shadow-sm p-4">
              <div className="flex flex-col items-center mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className={`text-white rounded-full p-1 ${
                      activeSubject === "Physics"
                        ? "bg-orange-500"
                        : activeSubject === "Chemistry"
                        ? "bg-green-500"
                        : "bg-gray-700"
                    }`}
                  >
                    {activeSubject === "Physics" && (
                      <Atom size={20} weight="fill" />
                    )}
                    {activeSubject === "Chemistry" && (
                      <Flask size={20} weight="fill" />
                    )}
                    {activeSubject === "Mathematics" && (
                      <Calculator size={20} weight="fill" />
                    )}
                  </div>
                  <h2 className="font-bold text-lg">{activeSubject} PYQs</h2>
                </div>
                <p className="text-sm text-muted-foreground">
                  Chapter-wise Collection of {activeSubject} PYQs
                </p>
              </div>

              {/* Mobile subject tabs (visible on small screens) */}
              <div className="lg:hidden mb-6">
                <Tabs
                  value={activeSubject}
                  onValueChange={(value) => {
                    console.log("Tab changed to:", value);
                    setActiveSubject(value);
                  }}
                  className="w-full"
                >
                  <TabsList className="flex overflow-x-auto w-full space-x-2 border-b border-gray-200 dark:border-gray-700 pb-2">
                    <TabsTrigger
                      value="Physics"
                      className={`flex-shrink-0 px-4 py-2 text-sm font-medium transition-colors duration-200 border-b-2 ${
                        activeSubject === "Physics"
                          ? "border-orange-500 text-orange-500"
                          : "border-transparent text-gray-500 hover:text-gray-700"
                      } data-[state=active]:border-orange-500 data-[state=active]:text-orange-500`}
                    >
                      Physics
                    </TabsTrigger>
                    <TabsTrigger
                      value="Chemistry"
                      className={`flex-shrink-0 px-4 py-2 text-sm font-medium transition-colors duration-200 border-b-2 ${
                        activeSubject === "Chemistry"
                          ? "border-green-500 text-green-500"
                          : "border-transparent text-gray-500 hover:text-gray-700"
                      } data-[state=active]:border-green-500 data-[state=active]:text-green-500`}
                    >
                      Chemistry
                    </TabsTrigger>
                    <TabsTrigger
                      value="Mathematics"
                      className={`flex-shrink-0 px-4 py-2 text-sm font-medium transition-colors duration-200 border-b-2 ${
                        activeSubject === "Mathematics"
                          ? "border-gray-700 text-gray-700"
                          : "border-transparent text-gray-500 hover:text-gray-700"
                      } data-[state=active]:border-gray-700 data-[state=active]:text-gray-700`}
                    >
                      Mathematics
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-2 mb-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 border rounded-md"
                    >
                      Class{" "}
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-2 h-4 w-4"
                      >
                        <path
                          d="M4 6L7.5 10L11 6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    {uniqueClasses.map((className) => (
                      <DropdownMenuCheckboxItem
                        key={className}
                        checked={selectedClasses.includes(className)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedClasses([...selectedClasses, className]);
                          } else {
                            setSelectedClasses(
                              selectedClasses.filter((c) => c !== className)
                            );
                          }
                        }}
                      >
                        {className}
                      </DropdownMenuCheckboxItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 border rounded-md"
                    >
                      Units{" "}
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-2 h-4 w-4"
                      >
                        <path
                          d="M4 6L7.5 10L11 6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    {uniqueUnits.map((unit) => (
                      <DropdownMenuCheckboxItem
                        key={unit}
                        checked={selectedUnits.includes(unit)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedUnits([...selectedUnits, unit]);
                          } else {
                            setSelectedUnits(
                              selectedUnits.filter((u) => u !== unit)
                            );
                          }
                        }}
                      >
                        {unit}
                      </DropdownMenuCheckboxItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>

                <Toggle
                  pressed={notStartedOnly}
                  onPressedChange={setNotStartedOnly}
                  variant="outline"
                  size="sm"
                  className="h-8 border rounded-md"
                >
                  Not Started
                </Toggle>

                <Toggle
                  pressed={weakChaptersOnly}
                  onPressedChange={setWeakChaptersOnly}
                  variant="outline"
                  size="sm"
                  className="h-8 border rounded-md data-[state=on]:bg-orange-500 data-[state=on]:text-white"
                >
                  Weak Chapters
                </Toggle>
              </div>

              {/* Chapter count and sort */}
              <div className="flex justify-between items-center mb-4">
                <div className="text-sm text-muted-foreground">
                  Showing all chapters ({chapterCount})
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 flex items-center gap-1 text-blue-600"
                  onClick={() => setSortAscending(!sortAscending)}
                >
                  <SortAscending size={16} />
                  <span className="hidden sm:inline">Sort</span>
                </Button>
              </div>

              {/* Loading state */}
              {isLoading && (
                <div className="py-8 text-center">
                  <p className="text-muted-foreground">Loading chapters...</p>
                </div>
              )}

              {/* Error state */}
              {error && (
                <div className="py-8 text-center">
                  <p className="text-destructive">
                    Failed to load chapter data
                  </p>
                </div>
              )}

              {/* Empty state */}
              {!isLoading && !error && filteredChapters.length === 0 && (
                <div className="py-8 text-center">
                  <p className="text-muted-foreground">
                    No chapters match your filters
                  </p>
                </div>
              )}

              {/* Chapter list */}
              {!isLoading && !error && (
                <div className="space-y-2">
                  {filteredChapters.map((chapter, index) => {
                    const questions2025 =
                      chapter.yearWiseQuestionCount["2025"] || 0;
                    const questions2024 =
                      chapter.yearWiseQuestionCount["2024"] || 0;
                    const totalQuestions = Object.values(
                      chapter.yearWiseQuestionCount
                    ).reduce((sum, count) => sum + count, 0);
                    const hasIncrease = questions2025 > questions2024;

                    return (
                      <div key={index} className="border rounded-md p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3 flex-1">
                            <div className="text-primary">
                              {getRandomIcon(chapter.chapter)}
                            </div>
                            <div className="flex-1 flex items-center justify-between">
                              <h3 className="font-medium">{chapter.chapter}</h3>
                              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                <span className="flex items-center">
                                  2025: {questions2025}Qs{" "}
                                  {questions2025 > 0 &&
                                    (hasIncrease ? (
                                      <ArrowUp
                                        size={12}
                                        weight="bold"
                                        className="text-green-500 ml-1"
                                      />
                                    ) : (
                                      <ArrowDown
                                        size={12}
                                        weight="bold"
                                        className="text-red-500 ml-1"
                                      />
                                    ))}
                                </span>
                                <span className="hidden xs:inline">|</span>
                                <span>2024: {questions2024}Qs</span>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm gap-3">
                              <span className="p-3">|</span>
                              {chapter.questionSolved}/{totalQuestions} Qs
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
