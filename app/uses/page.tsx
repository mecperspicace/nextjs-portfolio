import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Uses",
  description:
    "Here's what tech I'm currently using for coding, videos, and music.",
};

export default function UsesPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif mb-8">Uses</h1>
      <p className="text-neutral-700 dark:text-neutral-300 mt-2 mb-8">
        Here's what tech I'm currently using for coding, gaming, and study.
      </p>
      <div className="prose prose-neutral dark:prose-invert">
        <h3 id="computer-office">Computer / Office</h3>
        <ul>
          <li>16&quot; Macbook Pro (2020)</li>
          <li>31.5&quot; LG UltraFine 32UN880</li>
          <li>Logitech MX Master 3 Mouse</li>
          <li>Apple Magic Keyboard</li>
          <li>Focal XS 2.1 w/ Subwoofer</li>
          <li>Autonomous SmartDesk 2</li>
          <li>Autonomous ErgoChair 2</li>
        </ul>
      </div>
    </section>
  );
}
