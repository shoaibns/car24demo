import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Car24 - Home</title>
        <meta
          name="description"
          content="Welcome to Car24, where you can buy and sell cars easily."
        />

        {/* OpenGraph Metadata */}
        <meta property="og:title" content="Car24 - Home" />
        <meta
          property="og:description"
          content="Buy and sell cars with ease at Car24."
        />
        <meta
          property="og:image"
          content="https://example.com/path/to/og-image.jpg"
        />
        <meta property="og:url" content="https://www.car24.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Car24 - Home" />
        <meta
          name="twitter:description"
          content="Buy and sell cars with ease at Car24."
        />
        <meta
          name="twitter:image"
          content="https://example.com/path/to/og-image.jpg"
        />

        {/* Other general meta tags */}
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Welcome to Car24!</h1>
    </div>
  );
}
