import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>NIP-05 Next.js Vercel Example</title>
        <meta
          name="description"
          content="Example Next.js app that is a NIP-05 server."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ol>
          <li>
            Create a folder named <code>.well-known</code> in the{" "}
            <code>public</code> folder.
          </li>
          <li>
            Create a <code>nostr.json</code> file in the{" "}
            <code>.well-known</code> folder.{" "}
            <a
              href="https://github.com/nostr-protocol/nips/blob/master/05.md"
              target="_blank"
              rel="noreferrer"
            >
              See NIP-05 docs
            </a>{" "}
            for more info.
          </li>
          <li>
            Enable CORS for <code>nostr.json</code> file in the{" "}
            <code>next.config.js</code>.
          </li>
          <li>Deploy the app to Vercel.</li>
          <li>
            Test out your NIP-05s on{" "}
            <a href="https://nostrstuff.com" target="_blank" rel="noreferrer">
              https://nostrstuff.com
            </a>
            .
          </li>
        </ol>
      </main>
    </>
  );
}
