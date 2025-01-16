import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['s3-bucket-my-chatbot-saas.s3.ap-southeast-1.amazonaws.com','v0.blob.com', 'hebbkx1anhila5yf.public.blob.vercel-storage.com'],
  },
};

export default nextConfig;
