import type { EnrichedTweet } from '../utils.js'
import { formatDate } from '../date-utils.js'

export const TweetInfoCreatedAt = (props: { tweet: EnrichedTweet }) => {
  const createdAt = () => new Date(props.tweet.created_at)
  const formatted = () => formatDate(createdAt())

  return (
    <a
      class="tweet-s-info-time"
      href={props.tweet.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={formatted()}
    >
      <time dateTime={createdAt().toISOString()}>{formatted()}</time>
    </a>
  )
}
