import { For } from 'solid-js'
import type { EnrichedQuotedTweet } from '../../utils.js'

type Props = { tweet: EnrichedQuotedTweet }

export const QuotedTweetBody = (props: Props) => (
  <p class="tweet-s-quoted-body" lang={props.tweet.lang} dir="auto">
    <For each={props.tweet.entities}>
      {(item) => <span innerHTML={item.text} />}
    </For>
  </p>
)
