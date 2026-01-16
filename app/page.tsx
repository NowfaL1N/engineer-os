import { FeatureCard } from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Code2,
  GraduationCap,
  Layout,
  Lightbulb,
  LineChart,
  Map,
  MessageSquare,
  Network,
  Rocket,
  School,
  Terminal,
  Trophy,
  UserCheck,
  Zap,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white px-6 py-24 text-center dark:bg-slate-950 sm:px-12 md:py-32">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 sm:text-5xl md:text-6xl">
              Engineering Student <br />
              <span className="text-blue-600 dark:text-blue-400">
                Guidance Platform
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400 sm:text-xl">
              From Beginner to Industry-Ready Engineer. Master your skills, ace
              your exams, and get career-ready with a complete roadmap.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/roadmaps">
              <Button size="lg" className="w-full sm:w-auto">
                Explore Roadmaps
              </Button>
            </Link>
            <Link href="/curriculum">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto"
              >
                View Curriculum
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-12">
        <div className="grid gap-12">
          {/* Learning & Skills */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
              Learning & Skills
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <FeatureCard
                title="Roadmaps"
                description="Step-by-step guides for Languages & Career paths."
                icon={Map}
                status="In Progress"
                href="/roadmaps"
              />
              <FeatureCard
                title="Coding Practice"
                description="Hands-on problems to sharpen your coding skills."
                icon={Terminal}
                status="Coming Soon"
                href="/practice"
              />
              <FeatureCard
                title="Curriculum Guidance"
                description="Semester-wise breakdown and study resources."
                icon={BookOpen}
                status="Coming Soon"
                href="/curriculum"
              />
              <FeatureCard
                title="Project Ideas"
                description="Mini to Major projects with source code ideas."
                icon={Lightbulb}
                status="Coming Soon"
                href="/projects"
              />
              <FeatureCard
                title="Skill Development"
                description="Future-proof skills including Soft Skills & management."
                icon={Zap}
                status="Coming Soon"
                href="/skills"
              />
            </div>
          </div>

          {/* Career & Growth */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
              Career & Growth
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <FeatureCard
                title="Interview Prep"
                description="Mock interviews, questions, and expert tips."
                icon={UserCheck}
                status="Coming Soon"
                href="/interview-prep"
              />
              <FeatureCard
                title="Resume Builder"
                description="Create ATS-friendly resumes that get you hired."
                icon={Layout}
                status="Coming Soon"
                href="/resume"
              />
              <FeatureCard
                title="Placements & Events"
                description="Latest drives, hackathons, and hiring events."
                icon={Rocket}
                status="Coming Soon"
                href="/placements"
              />
              <FeatureCard
                title="Internships"
                description="Find online & offline internship opportunities."
                icon={Network}
                status="Coming Soon"
                href="/internships"
              />
            </div>
          </div>

          {/* Education & Higher Studies */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
              Education & Higher Studies
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <FeatureCard
                title="Best Colleges"
                description="Top Engineering colleges in India and admissions."
                icon={School}
                status="Coming Soon"
                href="/colleges"
              />
              <FeatureCard
                title="Higher Studies"
                description="GATE, GRE, CAT and other exam guides."
                icon={GraduationCap}
                status="Coming Soon"
                href="/higher-studies"
              />
              <FeatureCard
                title="Exam Flowcharts"
                description="Visual preparation guides for major exams."
                icon={LineChart}
                status="Coming Soon"
                href="/exams"
              />
            </div>
          </div>

          {/* Intelligence & Updates */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
              Intelligence & Updates
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <FeatureCard
                title="AI Doubt Assistant"
                description="Instant answers to your engineering queries."
                icon={MessageSquare}
                status="Coming Soon"
                href="/ai-assistant"
              />
              <FeatureCard
                title="Tech Trends"
                description="Latest updates in the engineering world."
                icon={Trophy}
                status="Coming Soon"
                href="/updates"
              />
              <FeatureCard
                title="Course Recommender"
                description="AI-driven suggestions for valuable certifications."
                icon={Code2}
                status="Coming Soon"
                href="/courses"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
