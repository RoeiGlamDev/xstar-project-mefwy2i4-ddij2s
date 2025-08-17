import { withSentryConfig } from '@sentry/nextjs';

const moduleExports = {
  reactStrictMode: true,
  images: {
    domains: ['example.com'], // Add your image domains here
  },
  webpack(config) {
    
    return config;
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
},
          {
            key: 'X-Frame-Options',
            value: 'DENY'
},
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
},
        ]
},
    ];
  }
};

const sentryWebpackPluginOptions = {
  silent: true, // Suppresses all logs
};

export default withSentryConfig(moduleExports, sentryWebpackPluginOptions);