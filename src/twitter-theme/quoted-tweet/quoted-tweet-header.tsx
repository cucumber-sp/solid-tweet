import type { EnrichedQuotedTweet } from '../../utils.js'
import type { TwitterComponents } from '../types.js'
import { AvatarImg } from '../avatar-img.js'
import { VerifiedBadge } from '../verified-badge.js'
import { HighlightedLabel } from '../highlighted-label.js'

type Props = { tweet: EnrichedQuotedTweet; components?: TwitterComponents }

export const QuotedTweetHeader = (props: Props) => {
  const user = () => props.tweet.user
  const Img = () => props.components?.AvatarImg ?? AvatarImg

  return (
    <div class="tweet-s-quoted-header">
      <a
        href={props.tweet.url}
        class="tweet-s-quoted-avatar"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          class={
            'tweet-s-quoted-avatar-overflow' +
            (user().profile_image_shape === 'Square' ? ' tweet-s-quoted-avatar-square' : '')
          }
        >
          {(() => {
            const I = Img()
            return (
              <I
                src={user().profile_image_url_https}
                alt={user().name}
                width={20}
                height={20}
              />
            )
          })()}
        </div>
      </a>
      <div class="tweet-s-quoted-author">
        <div class="tweet-s-quoted-author-text">
          <span title={user().name}>{user().name}</span>
        </div>
        <VerifiedBadge user={user()} />
        <HighlightedLabel user={user()} />
        <div class="tweet-s-quoted-username">
          <span title={`@${user().screen_name}`}>@{user().screen_name}</span>
        </div>
      </div>
    </div>
  )
}
