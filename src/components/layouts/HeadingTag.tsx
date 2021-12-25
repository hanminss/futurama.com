import Head from "next/head";
import { POSTER_URL } from "../../constants";
import ICON from "../../images/icon.png";
export const HeadingTag = () => {
  return (
    <Head>
      <title>FUTURAMA ARCHIVE</title>
      <meta charSet="utf-8" />
      <meta name="keyword" content="futurama, Jhon, sample apis" />
      <meta name="description" content="Jhon's study 3rd assignment" />
      <meta name="author" content="hanminsss" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Futurama archive" />
      <meta property="og:description" content="next-js study: 3rd assignment" />
      <meta property="og:image" content={POSTER_URL} />
      <link rel="shortcut icon" href={ICON.src} />
    </Head>
  );
};
