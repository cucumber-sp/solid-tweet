import type { JSX } from 'solid-js'

type Props = {
  children: JSX.Element
  href: string
}

export const TweetLink = (props: Props) => (
  <a href={props.href} class="tweet-s-link" target="_blank" rel="noopener noreferrer nofollow">
    {props.children}
  </a>
)
