const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Kylie",
    image: "/notion-avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Postdoctoral Researcher",
    bio: "Nothing",
    email: "momocyj@gmail.com",
    linkedin: "Yoonjeong Choi",
    github: "kylie0914",
    instagram: "",
  },
  projects: [
    {
      name: "morethan-log",
      href: "https://github.com/kylie0914/dev-blog",
    },
	{
      name: "EV biomarker analysis",
      href: "https://github.com/kylie0914/SpinEx", // 너의 실제 프로젝트 GitHub 주소
    },
  ],
  // blog setting (required)
  blog: {
    title: "SangKun’s Dev & Research Log",
    description: "Study recording",
    scheme: "dark", // 'light' | 'dark' | 'system'
  },

  // CONFIG configration (required)
  link: "https://dev-blog-nu-blond.vercel.app",
  since: 2025, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "kylie0914/dev-blog",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
