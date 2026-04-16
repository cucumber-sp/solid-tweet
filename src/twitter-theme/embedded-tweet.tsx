import { createMemo, Show } from 'solid-js'
import type { Tweet } from '../api/index.js'
import type { TwitterComponents } from './types.js'
import { TweetContainer } from './tweet-container.js'
import { TweetHeader } from './tweet-header.js'
import { TweetInReplyTo } from './tweet-in-reply-to.js'
import { TweetBody } from './tweet-body.js'
import { TweetMedia } from './tweet-media.js'
import { TweetInfo } from './tweet-info.js'
import { TweetActions } from './tweet-actions.js'
import { TweetReplies } from './tweet-replies.js'
import { QuotedTweet } from './quoted-tweet/index.js'
import { enrichTweet } from '../utils.js'

type Props = {
  tweet: Tweet
  components?: Omit<TwitterComponents, 'TweetNotFound'>
}

export const EmbeddedTweet = (props: Props) => {
  const tweet = createMemo(() => enrichTweet(props.tweet))

  return (
    <TweetContainer>
      <TweetHeader tweet={tweet()} components={props.components} />
      <Show when={tweet().in_reply_to_status_id_str}>
        <TweetInReplyTo tweet={tweet()} />
      </Show>
      <TweetBody tweet={tweet()} />
      <Show when={tweet().mediaDetails?.length}>
        <TweetMedia tweet={tweet()} components={props.components} />
      </Show>
      <Show when={tweet().quoted_tweet}>
        <QuotedTweet tweet={tweet().quoted_tweet!} components={props.components} />
      </Show>
      <TweetInfo tweet={tweet()} />
      <TweetActions tweet={tweet()} />
      <TweetReplies tweet={tweet()} />
    </TweetContainer>
  )
}
