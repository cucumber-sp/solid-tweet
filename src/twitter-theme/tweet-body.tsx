import { For, Switch, Match } from 'solid-js'
import type { EnrichedTweet } from '../utils.js'
import { TweetLink } from './tweet-link.js'

export const TweetBody = (props: { tweet: EnrichedTweet }) => (
  <p class="tweet-s-body" lang={props.tweet.lang} dir="auto">
    <For each={props.tweet.entities}>
      {(item) => (
        <Switch>
          <Match when={item.type === 'hashtag' || item.type === 'mention' || item.type === 'url' || item.type === 'symbol'}>
            <TweetLink href={(item as any).href}>{item.text}</TweetLink>
          </Match>
          <Match when={item.type === 'media'}>{null}</Match>
          <Match when={item.type === 'text'}>
            <span innerHTML={item.text} />
          </Match>
        </Switch>
      )}
    </For>
    {props.tweet.note_tweet ? <ShowMore tweet={props.tweet} /> : null}
  </p>
)

function ShowMore(props: { tweet: EnrichedTweet }) {
  return (
    <TweetLink href={props.tweet.url}>
      <span>&nbsp;</span>
      Show more
    </TweetLink>
  )
}
