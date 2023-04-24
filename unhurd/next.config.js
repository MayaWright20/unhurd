/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  il8n:{
  locales: ['en', 'fr'],
  defaultLocale: 'en',
},
  images: {
    domains: ['i.scdn.co', 'uploads-ssl.webflow.com'],
}
}

module.exports = nextConfig
