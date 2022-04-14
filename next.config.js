/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "cdn.vox-cdn.com",
      "static01.nyt.com",
      "media.wired.com",
      "a.fsdn.com",
      "www.reuters.com",
      "s.yimg.com",
      "www.cnet.com",
      "i.insider.com",
      "images.hindustantimes.com",
      "cdn.arstechnica.net",
    ],
  },
};

module.exports = nextConfig;
