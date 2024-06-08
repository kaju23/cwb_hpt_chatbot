import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="HPT Assistant" key="title" />
        <meta
          property="og:description"
          content="Chatbot to act as assistant for HPT employees"
          key="description"
        />
        <meta
          property="og:image"
          content="/og.png"
        />
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
