/** @type {import('next').NextConfig} */

const branchName = process.env.BRANCH_NAME ? "/" + process.env.BRANCH_NAME : "";

const nextConfig = {
    reactStrictMode: true,
    assetPrefix: branchName,
    basePath: branchName,
};

module.exports = {
  basePath: process.env.GITHUB_ACTIONS ? "/yudai04.dev" : "",
  trailingSlash: true,
  assetPrefix: '/',
};
