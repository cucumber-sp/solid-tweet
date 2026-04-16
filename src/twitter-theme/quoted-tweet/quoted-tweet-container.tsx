import type { JSX } from 'solid-js'
import type { EnrichedQuotedTweet } from '../../utils.js'

type Props = { tweet: EnrichedQuotedTweet; children: JSX.Element }

export const QuotedTweetContainer = (props: Props) => (
  <div
    class="tweet-s-quoted-container"
    onClick={(e) => {
      e.preventDefault()
      window.open(props.tweet.url, '_blank')
    }}
  >
    <article class="tweet-s-quoted-article">{props.children}</article>
  </div>
)
