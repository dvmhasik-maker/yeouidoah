# yeouidoah

여의도 동물병원 홈페이지 (www.yeouidoah.com). Wix에서 Astro + Cloudflare Pages로 이전 중.

## Stack

- [Astro](https://astro.build) (static site)
- [Cloudflare Pages](https://pages.cloudflare.com) (hosting)

## Development

```sh
npm install
npm run dev       # http://localhost:4321
```

## Build & Deploy

```sh
npm run build      # outputs to ./dist
```

Cloudflare Pages project settings:

- Build command: `npm run build`
- Build output directory: `dist`
