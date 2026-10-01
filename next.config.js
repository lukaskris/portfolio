const nextConfig = {
  // config options here
  // output: 'export'
  // VPS RAM is tight; keep the webpack build from exhausting it.
  experimental: {
    webpackMemoryOptimizations: true,
  },
};

module.exports = nextConfig;
