import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Here's small resume of my work and my life, hope you enjoy it!",
};

export default function AboutPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">About Me</h1>
      <p className="my-5 text-neutral-800 dark:text-neutral-200">
        Hey, I'm MΞCPERSPICACE.
      </p>
      <div className="prose prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200">
        <p>
          My story begins when my grandfather gave me my first computer and a
          Raspberry PI to learn electronics. Since that day, I have progressed a
          lot and now, I have reached a good level and I am fulfilled in what I
          do.
        </p>
        <hr />
        <p>
          Most of my work is available on my GitHub and I also work for clients.
          I master Python and Java as well as C and C++ for electronics (even
          the Raspberry is programmed in Python), I'm learning databases like
          MySQL and MongoDB for my projects.
        </p>
        <p>
          I also invest in crypto-currencies, my favorite is EGLD, but I also
          like Ethereum and Solana because they are programmable blockchains.
          I'm always available and in a good mood...
        </p>
      </div>
    </section>
  );
}
