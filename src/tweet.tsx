import { createResource, Show, Suspense } from 'solid-js'
import type { JSX } from 'solid-js'
import { type Tweet as TweetData, TwitterApiError } from './api/index.js'
import type { TwitterComponents } from './twitter-theme/types.js'
import {
  EmbeddedTweet,
  TweetNotFound,
  TweetSkeleton,
} from './twitter-theme/components.js'

const SYNDICATION_HOST = 'https://react-tweet.vercel.app'

async function fetchTweetClient(
  id: string,
  apiUrl?: string,
  fetchOptions?: RequestInit
): Promise<TweetData | undefined> {
  const url = apiUrl || `${SYNDICATION_HOST}/api/tweet/${id}`
  const res = await fetch(url, fetchOptions)
  const json = await res.json()

  if (res.ok) return json.data ?? undefined

  throw new TwitterApiError({
    message: `Failed to fetch tweet at "${url}" with "${res.status}".`,
    data: json,
    status: res.status,
  })
}

export type TweetProps = {
  id: string
  apiUrl?: string
  fallback?: JSX.Element
  components?: TwitterComponents
  fetchOptions?: RequestInit
  onError?: (error: any) => any
}

export const Tweet = (props: TweetProps) => {
  const [tweet] = createResource(
    () => props.id,
    async (id) => {
      if (!id) return undefined
      try {
        return await fetchTweetClient(id, props.apiUrl, props.fetchOptions)
      } catch (err) {
        if (props.onError) {
          props.onError(err)
        } else {
          console.error(err)
        }
        return undefined
      }
    }
  )

  return (
    <Suspense fallback={props.fallback ?? <TweetSkeleton />}>
      <Show
        when={!tweet.loading}
        fallback={props.fallback ?? <TweetSkeleton />}
      >
        <Show
          when={tweet()}
          fallback={(() => {
            const NotFound = props.components?.TweetNotFound || TweetNotFound
            return <NotFound />
          })()}
        >
          {(data) => (
            <EmbeddedTweet tweet={data()} components={props.components} />
          )}
        </Show>
      </Show>
    </Suspense>
  )
}
