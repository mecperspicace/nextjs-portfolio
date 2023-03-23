import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Uses",
  description:
    "Here's what tech I'm currently using for coding, gaming, and study.",
};

export default function UsesPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif mb-8">Uses</h1>
      <p className="text-neutral-700 dark:text-neutral-300 mt-2 mb-8">
        Here's what tech I'm currently using for coding, gaming, and study.
      </p>
      <div className="prose prose-neutral dark:prose-invert">
        <h3 id="computer-office">Computer / Setup</h3>
        <ul>
          <li>Custom PC Build</li>
          <li>MSI 21:9 200Hz</li>
          <li>Glorious Model O</li>
          <li>Ducky One 2 Mini</li>
          <li>Razer Seiren Mini</li>
          <li>Razer Kraken v2</li>
          <li>Raspberry PI 4 w/Fan</li>
        </ul>
      </div>
    </section>
  );
}
