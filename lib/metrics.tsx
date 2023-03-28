import "server-only";

import { Octokit } from "@octokit/rest";
import { cache } from "react";

export async function getBlogViews() {
  const apiURL =
    "https://api.countapi.xyz/hit/mecperspicace.xyz/4be9cecc-f714-4ce4-b9e4-f5e50e5d1478";

  const response = await fetch(apiURL)
  const responseData = await response.json()

  return responseData.value
} 

export async function getTweetCount() {
  if (!process.env.TWITTER_API_TOKEN) {
    return 0;
  }

  const response = await fetch(
    `https://api.twitter.com/2/users/by/username/mecperspicace?user.fields=public_metrics`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TWITTER_API_TOKEN}`,
      },
    }
  );

  const { data } = await response.json();
  return Number(data.public_metrics.tweet_count);
}

export const getStarCount = cache(async () => {
  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
  });

  const req = await octokit.request("GET /repos/{owner}/{repo}", {
    owner: "mecperspicace",
    repo: "nextjs-portfolio",
  });

  return req.data.stargazers_count;
});
