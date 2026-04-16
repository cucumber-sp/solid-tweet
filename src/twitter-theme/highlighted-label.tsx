import { Show } from 'solid-js'
import type { TweetUser } from '../api/index.js'

type Props = {
  user: TweetUser
  class?: string
}

export const HighlightedLabel = (props: Props) => {
  const url = () => props.user.highlighted_label?.badge?.url

  return (
    <Show when={url()}>
      {(badgeUrl) => (
        <div class={'tweet-s-highlighted-label' + (props.class ? ' ' + props.class : '')}>
          <img src={badgeUrl()} alt={props.user.highlighted_label!.description} />
        </div>
      )}
    </Show>
  )
}
