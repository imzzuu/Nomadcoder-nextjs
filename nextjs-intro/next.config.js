/** @type {import('next').NextConfig} */

const API_KEY = process.env.API_KEY;

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    // redirect 시키기 (navigate 느낌)
    return [
      {
        // /contact 로 접근하면
        source: "/contact",
        // /form 으로 redirect
        destination: "/form",
        // 영구 여부 (브라우저가 기억하는가 = history)
        permanent: false,
      },
      {
        //  /old-blog/1234/comments/1234
        source: "/old-blog/:path*",
        // /new-blog/1234/comments/1234  로 redirect
        destination: "/new-blog/:path*",
        permanent: false,
      },
    ];
  },
  // url 바꿔치기
  async rewrites() {
    return [
      {
        // fetch() 한 url (api 숨기기 위해 작성한 임의의 url)
        source: "/api/movies",
        // 실제 접근할 url
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
      {
        source: "/api/movies/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
      },
    ];
  },
};

module.exports = nextConfig;
