import { TweetContainer } from './tweet-container.js'
import { Skeleton } from './skeleton.js'

export const TweetSkeleton = () => (
  <TweetContainer class="tweet-s-skeleton">
    <Skeleton style={{ height: '3rem', 'margin-bottom': '0.75rem' }} />
    <Skeleton style={{ height: '6rem', margin: '0.5rem 0' }} />
    <div style={{ 'border-top': 'var(--tweet-border)', margin: '0.5rem 0' }} />
    <Skeleton style={{ height: '2rem' }} />
    <Skeleton style={{ height: '2rem', 'border-radius': '9999px', 'margin-top': '0.5rem' }} />
  </TweetContainer>
)
