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

  console.log(process.env.GITHUB_TOKEN)

  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
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

  const response2 = await fetch("https://api.multiversx.com/accounts/erd19jcvvj7v7re6pnmypjds2yvlzrwdvp0l8lxr5qn2mdlns7jt8xrqtccly5/delegation");
  const data2 = await response2.json()

  const total = Number(data.userActiveStake) + Number(data.claimableRewards) + Number(data2[0].userActiveStake) + Number(data2[0].claimableRewards)

  return total / 1000000000000000000;
})
