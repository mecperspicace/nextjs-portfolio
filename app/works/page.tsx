import type { Metadata } from "next";
import { AnimationWrapper } from "components/animation-wrapper";

export const metadata: Metadata = {
  title: "Works",
  description: "Here's my brand new projects section...",
};

export default async function WorksPage() {
  return (
    <AnimationWrapper>
      <section>
        <h1 className="font-bold text-3xl font-serif mb-5">Works</h1>
        <div className="prose prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200">
          <p>The works section will be available soon...</p>
        </div>
      </section>
    </AnimationWrapper>
  );
}
