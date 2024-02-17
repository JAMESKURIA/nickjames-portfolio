import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  const meta = {
    title: 'James Kuria Chege Peronal Portfolio Website',
    description:
      'My name is James Kuria Chege and I am a software engineer who enjoys building tech solutions for businesses and individuals. Check out my portfolio for more information about me and my work. Hire me for your next project and let me help you bring your ideas to life',
    image: 'https://assets.vercel.com/image/upload/q_auto/front/vercel/dps.png'
  }

  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@nickjames_dev" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        <link rel="icon" href="/kc-logo-light.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
