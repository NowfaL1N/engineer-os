import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    status?: "Coming Soon" | "In Progress" | "Live";
    href?: string;
}

export function FeatureCard({
    title,
    description,
    icon: Icon,
    status = "Coming Soon",
    href = "#",
}: FeatureCardProps) {
    return (
        <Link
            href={href}
            className="group block h-full rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-blue-500 hover:shadow-md dark:border-slate-800 dark:bg-slate-950 dark:hover:border-blue-500"
        >
            <div className="flex h-full flex-col">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                        <Icon className="h-5 w-5" />
                    </div>
                    <span
                        className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${status === "Live"
                                ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                                : status === "In Progress"
                                    ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                                    : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                            }`}
                    >
                        {status}
                    </span>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900 group-hover:text-blue-600 dark:text-slate-50 dark:group-hover:text-blue-400">
                    {title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                    {description}
                </p>
            </div>
        </Link>
    );
}
