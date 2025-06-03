"use client";

import { Header } from "@/components/header";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen dark:bg-[#222E3F] flex flex-col bg-background text-foreground">
      <Header />

      <main className="flex-1 dark:bg-[#222E3F] container mx-auto px-4 py-6">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center py-12">
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/nta.png"
              alt="JEE Main Logo"
              width={48}
              height={48}
              className="inline-block"
            />
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
              Welcome to JEE Main Prep
            </h1>
          </div>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl">
            Your ultimate platform for JEE Main preparation. Access chapter-wise
            past year questions (PYQs) from 2025 to 2009, covering 173 papers
            and 15,825 questions.
          </p>

          {/* Call-to-Action based on authentication state */}
          <SignedIn>
            <Link href="/dashboard">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Go to Dashboard
              </Button>
            </Link>
          </SignedIn>

          <SignedOut>
            <div className="flex flex-col sm:flex-row gap-4">
              <SignInButton mode="modal">
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white"
                >
                  Sign In
                </Button>
              </SignInButton>
              <SignUpButton mode="modal">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-orange-500 text-orange-500 hover:bg-orange-50"
                >
                  Sign Up
                </Button>
              </SignUpButton>
            </div>
          </SignedOut>
        </section>

        {/* Optional: Features Section */}
        <section className="py-12">
          <h2 className="text-2xl font-semibold text-center mb-8">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-card dark:bg-[#222E3F] rounded-lg border shadow-sm p-6 text-center">
              <h3 className="text-lg font-medium mb-2">Comprehensive PYQs</h3>
              <p className="text-sm text-muted-foreground">
                Access 15,825 questions across Physics, Chemistry, and
                Mathematics.
              </p>
            </div>
            <div className="bg-card dark:bg-[#222E3F] rounded-lg border shadow-sm p-6 text-center">
              <h3 className="text-lg font-medium mb-2">Year-wise Analysis</h3>
              <p className="text-sm text-muted-foreground">
                Track question trends from 2025 to 2009.
              </p>
            </div>
            <div className="bg-card dark:bg-[#222E3F] rounded-lg border shadow-sm p-6 text-center">
              <h3 className="text-lg font-medium mb-2">Filter & Sort</h3>
              <p className="text-sm text-muted-foreground">
                Customize your study with filters for weak chapters and more.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-card dark:bg-[#222E3F] py-4 text-center text-sm text-muted-foreground border-t">
        <p>&copy; 2025 JEE Main Prep. All rights reserved.</p>
      </footer>
    </div>
  );
}
