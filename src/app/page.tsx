import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export default async function IndexPage() {
  return (
    <>
      <header className="flex h-24 items-center justify-center">
        <div className="flex w-full max-w-5xl items-center justify-between">
          <div>
            <h1 className="text-xl">Next.js</h1>
          </div>
          <ThemeToggle />
        </div>
      </header>
      <main className="flex flex-col items-center justify-between p-24">
        <div className="z-10 flex w-full max-w-5xl flex-col items-center justify-between font-mono text-sm">
          <h1>Hello, Next js & Shadcn UI & Next Auth</h1>
          <br />
          <Button>Start</Button>
        </div>
      </main>
    </>
  );
}
