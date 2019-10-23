module.exports = {
  exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/balance': { page: '/balance' },
      '/contact': { page: '/contact' }
    }
  },
}
