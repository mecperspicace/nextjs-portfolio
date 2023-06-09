import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getBlogViews, getStarCount, getMultiversXAssets } from "lib/metrics";
import { ArrowIcon, GitHubIcon, ViewsIcon } from "components/icons";
import { name, about, bio, avatar } from "lib/info";
import { AnimationWrapper } from "components/animation-wrapper";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to the home page...",
};

export default async function HomePage() {
  let starCount, views, assets;

  try {
    starCount = await getStarCount();
    // views = await getBlogViews();
    assets = await getMultiversXAssets();
  } catch (error) {
    console.error(error);
  }

  return (
    <AnimationWrapper>
      <section>
        <h1 className="font-bold text-3xl font-serif">{name}</h1>
        <p className="my-5 max-w-[460px] text-neutral-800 dark:text-neutral-200">
          {about()}
        </p>
        <div className="flex items-start md:items-center my-8 flex-col md:flex-row">
          <Image
            alt={name}
            className="rounded-full grayscale"
            src={avatar}
            placeholder="blur"
            width={100}
            priority
          />
          <div className="mt-8 md:mt-0 ml-0 md:ml-6 space-y-2 text-neutral-500 dark:text-neutral-400">
            {/* <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/mecperspicace"
            className="flex items-center gap-2"
          >
            <TwitterIcon />

            {`${tweetCount.toLocaleString()} tweets all time`}
          </a> */}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/mecperspicace/nextjs-portfolio"
              className="flex items-center gap-2"
            >
              <GitHubIcon />
              {`${starCount.toLocaleString()} stars on this repo`}
            </a>
            {/* <Link href="/blog" className="flex items-center">
            <ViewsIcon />
            {`${views.toLocaleString()} blog views all time`}
          </Link> */}
            <Link
              href="https://explorer.multiversx.com/accounts/erd19jcvvj7v7re6pnmypjds2yvlzrwdvp0l8lxr5qn2mdlns7jt8xrqtccly5"
              className="flex items-center"
            >
              <ViewsIcon />
              {`${assets.toLocaleString()} $EGLD staked`}
            </Link>
          </div>
        </div>
        <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
          {bio()}
        </p>
        <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-500 dark:text-neutral-400">
          <li>
            <a
              className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
              rel="noopener noreferrer"
              target="_blank"
              href="https://twitter.com/mecperspicace"
            >
              <ArrowIcon />
              <p className="h-7">follow me on twitter</p>
            </a>
          </li>
          <li>
            <a
              className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
              rel="noopener noreferrer"
              href="mailto:mecperspicace@proton.me"
            >
              <ArrowIcon />
              <p className="h-7">get in touch</p>
            </a>
          </li>
        </ul>
      </section>
    </AnimationWrapper>
  );
}
