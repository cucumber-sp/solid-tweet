import { type EnrichedTweet, formatNumber } from '../utils.js'

export const TweetReplies = (props: { tweet: EnrichedTweet }) => (
  <div class="tweet-s-replies">
    <a
      class="tweet-s-replies-link"
      href={props.tweet.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span class="tweet-s-replies-text">
        {props.tweet.conversation_count === 0
          ? 'Read more on X'
          : props.tweet.conversation_count === 1
          ? `Read ${formatNumber(props.tweet.conversation_count)} reply`
          : `Read ${formatNumber(props.tweet.conversation_count)} replies`}
      </span>
    </a>
  </div>
)
