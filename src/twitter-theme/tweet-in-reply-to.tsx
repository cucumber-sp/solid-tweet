import type { EnrichedTweet } from '../utils.js'

export const TweetInReplyTo = (props: { tweet: EnrichedTweet }) => (
  <a
    href={props.tweet.in_reply_to_url}
    class="tweet-s-in-reply-to"
    target="_blank"
    rel="noopener noreferrer"
  >
    Replying to @{props.tweet.in_reply_to_screen_name}
  </a>
)
