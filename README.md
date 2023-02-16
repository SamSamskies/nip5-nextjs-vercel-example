# nip5-nextjs-vercel-example

This is a basic example of how to configure your Next.js app to be a NIP-05 server.

1. Create a `.well-known` folder in the `public` folder.
1. Create a `nostr.json` file in the `.well-known` folder. See [NIP-05 docs](https://github.com/nostr-protocol/nips/blob/master/05.md) for more details.
1. Enable CORS for the `nostr.json` file in the `next.config.js`.
1. Deploy the app to Vercel.
1. Test out your NIP-05s on https://nostrstuff.com.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
