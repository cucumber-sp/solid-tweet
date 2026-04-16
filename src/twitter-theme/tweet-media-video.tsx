import { createSignal, Show } from 'solid-js'
import type { MediaAnimatedGif, MediaVideo } from '../api/index.js'
import {
  type EnrichedQuotedTweet,
  type EnrichedTweet,
  getMediaUrl,
  getMp4Video,
} from '../utils.js'

type Props = {
  tweet: EnrichedTweet | EnrichedQuotedTweet
  media: MediaAnimatedGif | MediaVideo
}

export const TweetMediaVideo = (props: Props) => {
  const [playButton, setPlayButton] = createSignal(true)
  const [isPlaying, setIsPlaying] = createSignal(false)
  const [ended, setEnded] = createSignal(false)
  const mp4Video = () => getMp4Video(props.media)
  let timeout = 0

  return (
    <>
      <video
        class="tweet-s-media-image"
        poster={getMediaUrl(props.media, 'small')}
        controls={!playButton()}
        playsinline
        preload="none"
        tabIndex={playButton() ? -1 : 0}
        onPlay={() => {
          if (timeout) window.clearTimeout(timeout)
          if (!isPlaying()) setIsPlaying(true)
          if (ended()) setEnded(false)
        }}
        onPause={() => {
          if (timeout) window.clearTimeout(timeout)
          timeout = window.setTimeout(() => {
            if (isPlaying()) setIsPlaying(false)
            timeout = 0
          }, 100)
        }}
        onEnded={() => setEnded(true)}
      >
        <source src={mp4Video().url} type={mp4Video().content_type} />
      </video>

      <Show when={playButton()}>
        <button
          type="button"
          class="tweet-s-video-button"
          aria-label="View video on X"
          onClick={(e) => {
            const video = e.currentTarget.previousSibling as HTMLMediaElement
            e.preventDefault()
            setPlayButton(false)
            video.load()
            video
              .play()
              .then(() => {
                setIsPlaying(true)
                video.focus()
              })
              .catch((error) => {
                console.error('Error playing video:', error)
                setPlayButton(true)
                setIsPlaying(false)
              })
          }}
        >
          <svg viewBox="0 0 24 24" class="tweet-s-video-button-icon" aria-hidden="true">
            <g>
              <path d="M21 12L4 2v20l17-10z"></path>
            </g>
          </svg>
        </button>
      </Show>

      <Show when={!isPlaying() && !ended()}>
        <div class="tweet-s-video-watch">
          <a
            href={props.tweet.url}
            class="tweet-s-video-anchor"
            target="_blank"
            rel="noopener noreferrer"
          >
            {playButton() ? 'Watch on X' : 'Continue watching on X'}
          </a>
        </div>
      </Show>

      <Show when={ended()}>
        <a
          href={props.tweet.url}
          class="tweet-s-video-anchor tweet-s-video-replies"
          target="_blank"
          rel="noopener noreferrer"
        >
          View replies
        </a>
      </Show>
    </>
  )
}
