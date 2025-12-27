import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Hide the X-Powered-By header to obscure tech stack
  poweredByHeader: false,

  // Security headers
  async headers() {
    return [
      {
        // Apply these headers to all routes
        source: '/:path*',
        headers: [
          // DNS Prefetch Control
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          // Strict Transport Security - Forces HTTPS
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          // Prevents clickjacking by disallowing iframes
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          // Prevents MIME type sniffing
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          // Referrer Policy - Controls referrer information
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          // Permissions Policy - Restricts browser features
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
          },
// Content Security Policy - Prevents XSS and other injection attacks
{
  key: 'Content-Security-Policy',
  value: [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval'",  // ← Added unsafe-inline and unsafe-eval
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: https:",
    "font-src 'self' data:",
    "connect-src 'self'",
    "frame-ancestors 'self'",
    "base-uri 'self'",
    "form-action 'self'",
  ].join('; ')
}
        ],
      },
    ];
  },
};

export default nextConfig;