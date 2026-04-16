import { For, Show } from 'solid-js'
import {
  type EnrichedTweet,
  type EnrichedQuotedTweet,
  getMediaUrl,
} from '../utils.js'
import type { MediaDetails } from '../api/index.js'
import type { TwitterComponents } from './types.js'
import { TweetMediaVideo } from './tweet-media-video.js'
import { MediaImg } from './media-img.js'

const getSkeletonStyle = (media: MediaDetails, itemCount: number) => {
  let paddingBottom = 56.25
  if (itemCount === 1)
    paddingBottom =
      (100 / media.original_info.width) * media.original_info.height
  if (itemCount === 2) paddingBottom = paddingBottom * 2
  return {
    width: media.type === 'photo' ? undefined : 'unset',
    'padding-bottom': `${paddingBottom}%`,
  }
}

type Props = {
  tweet: EnrichedTweet | EnrichedQuotedTweet
  components?: TwitterComponents
  quoted?: boolean
}

export const TweetMedia = (props: Props) => {
  const length = () => props.tweet.mediaDetails?.length ?? 0
  const Img = () => props.components?.MediaImg ?? MediaImg

  return (
    <div class={'tweet-s-media' + (props.quoted ? '' : ' tweet-s-media-rounded')}>
      <div
        class={
          'tweet-s-media-wrapper' +
          (length() > 1 ? ' tweet-s-media-grid-2col' : '') +
          (length() === 3 ? ' tweet-s-media-grid-3' : '') +
          (length() > 4 ? ' tweet-s-media-grid-2x2' : '')
        }
      >
        <For each={props.tweet.mediaDetails}>
          {(media) => (
            <>
              {media.type === 'photo' ? (
                <a
                  href={props.tweet.url}
                  class="tweet-s-media-container tweet-s-media-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    class="tweet-s-media-skeleton"
                    style={getSkeletonStyle(media, length())}
                  />
                  {(() => {
                    const I = Img()
                    return (
                      <I
                        src={getMediaUrl(media, 'small')}
                        alt={media.ext_alt_text || 'Image'}
                        class="tweet-s-media-image"
                        draggable
                      />
                    )
                  })()}
                </a>
              ) : (
                <div class="tweet-s-media-container">
                  <div
                    class="tweet-s-media-skeleton"
                    style={getSkeletonStyle(media, length())}
                  />
                  <TweetMediaVideo tweet={props.tweet} media={media as any} />
                </div>
              )}
            </>
          )}
        </For>
      </div>
    </div>
  )
}
