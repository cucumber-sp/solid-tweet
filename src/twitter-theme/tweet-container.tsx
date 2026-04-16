import type { JSX } from 'solid-js'

type Props = { class?: string; children: JSX.Element }

export const TweetContainer = (props: Props) => (
  <div class={'solid-tweet-theme tweet-s-container' + (props.class ? ' ' + props.class : '')}>
    <article class="tweet-s-article">{props.children}</article>
  </div>
)
