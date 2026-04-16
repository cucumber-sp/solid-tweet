import type { JSX } from 'solid-js'

export const Skeleton = (props: { style?: JSX.CSSProperties }) => (
  <div class="tweet-s-skeleton-bone" style={props.style} />
)
