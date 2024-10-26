import { cn } from "@/lib/utils";

export function Title({ children }: { children: React.ReactNode }) {
  return (
    <h2 className={cn("text-3xl font-bold text-yellow-400 mb-4")}>
      {children}
    </h2>
  );
}
