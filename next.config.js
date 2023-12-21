const hostnames = [
    'cdn.pixabay.com',
    'images.unsplash.com',
    'i0.wp.com',
    'images.squarespace-cdn.com'
]

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: hostnames.map(hostname => ({
            protocol: 'https',
            hostname
        }))
    }
}

module.exports = nextConfig
