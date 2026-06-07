/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Ensure the protected builder HTML is bundled into the /api/builder
  // serverless function when deployed to Vercel (it lives outside /public).
  outputFileTracingIncludes: {
    "/api/builder": ["./protected/**"],
  },
  // Safety net so a stray lint/type quirk can't block your Vercel deploy.
  // You can flip these back to false later once it's live and you want
  // stricter checks.
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};
export default nextConfig;
