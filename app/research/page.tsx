import type { Metadata } from "next";
import { AnimationWrapper } from "components/animation-wrapper";

export const metadata: Metadata = {
  title: "Research",
  description: "Here's a page that I use to make some tests...",
};

export default function ResearchPage() {
  return (
    <AnimationWrapper>
      <section>
        <h1 className="font-bold text-3xl font-serif mb-8">Uses</h1>
        <p className="text-neutral-700 dark:text-neutral-300 mt-2 mb-8">
          Here's a page that I use to make some tests...
        </p>
      </section>
    </AnimationWrapper>
  );
}
