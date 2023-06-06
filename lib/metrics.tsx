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

export const getStarCount = cache(async () => {
  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
    baseUrl: 'https://api.github.com'
  });

  const req = await octokit.request("GET /repos/{owner}/{repo}", {
    owner: "mecperspicace",
    repo: "nextjs-portfolio",
  });

  var star = req.data.stargazers_count

  return Number(star);
});

export const getMultiversXAssets = cache(async () => {
  
  const response = await fetch("https://api.multiversx.com/accounts/erd19jcvvj7v7re6pnmypjds2yvlzrwdvp0l8lxr5qn2mdlns7jt8xrqtccly5/delegation-legacy");
  const data = await response.json()

  var total = Number(data.userActiveStake) + Number(data.claimableRewards)

  return Number(total/1000000000000000000);
})
