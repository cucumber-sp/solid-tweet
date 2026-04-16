# solid-tweet

Embed tweets in your Solid.js app. No iframe, no extra JS — just a clean, styled tweet component.

A Solid.js port of [react-tweet](https://github.com/vercel/react-tweet).

## Install

```bash
bun add solid-tweet solid-js
# or
npm install solid-tweet solid-js
```

## Usage

```tsx
import { Tweet } from 'solid-tweet'
import 'solid-tweet/solid-tweet.css'

function App() {
  return <Tweet id="1628832338187636740" />
}
```

That's it. The component fetches the tweet from Twitter's syndication API and renders it with the same styling as an embedded tweet.

## Props

| Prop | Type | Description |
|------|------|-------------|
| `id` | `string` | **Required.** The tweet ID. |
| `fallback` | `JSX.Element` | Custom loading skeleton. |
| `components` | `TwitterComponents` | Override sub-components (avatar img, media img, not-found). |
| `fetchOptions` | `RequestInit` | Custom fetch options for the API call. |
| `onError` | `(error: any) => any` | Error handler. |

## Theming

The CSS supports light/dark mode automatically via `prefers-color-scheme`. You can also force a theme:

```html
<!-- Force dark -->
<div data-theme="dark">
  <Tweet id="..." />
</div>

<!-- Or use classes -->
<div class="dark">
  <Tweet id="..." />
</div>
```

## Custom components

You can override the image components for optimization (e.g., with your framework's `<Image>` component):

```tsx
<Tweet
  id="1628832338187636740"
  components={{
    AvatarImg: (props) => <img {...props} loading="lazy" />,
    MediaImg: (props) => <img {...props} loading="lazy" />,
  }}
/>
```

## API

You can also use the tweet fetching API directly:

```ts
import { getTweet, fetchTweet } from 'solid-tweet/api'

const tweet = await getTweet('1628832338187636740')
```

## Credits

Based on [react-tweet](https://github.com/vercel/react-tweet) by Vercel.

## License

MIT
