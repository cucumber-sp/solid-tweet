import { TweetContainer } from './tweet-container.js'

type Props = { error?: any }

export const TweetNotFound = (_props: Props) => (
  <TweetContainer>
    <div class="tweet-s-not-found">
      <h3>Tweet not found</h3>
      <p>The embedded tweet could not be found…</p>
    </div>
  </TweetContainer>
)
