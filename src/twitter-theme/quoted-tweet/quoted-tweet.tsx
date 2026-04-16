import type { EnrichedQuotedTweet } from '../../utils.js'
import type { TwitterComponents } from '../types.js'
import { QuotedTweetContainer } from './quoted-tweet-container.js'
import { QuotedTweetHeader } from './quoted-tweet-header.js'
import { QuotedTweetBody } from './quoted-tweet-body.js'
import { TweetMedia } from '../tweet-media.js'

type Props = { tweet: EnrichedQuotedTweet; components?: TwitterComponents }

export const QuotedTweet = (props: Props) => (
  <QuotedTweetContainer tweet={props.tweet}>
    <QuotedTweetHeader tweet={props.tweet} components={props.components} />
    <QuotedTweetBody tweet={props.tweet} />
    {props.tweet.mediaDetails?.length ? (
      <TweetMedia quoted tweet={props.tweet} />
    ) : null}
  </QuotedTweetContainer>
)
