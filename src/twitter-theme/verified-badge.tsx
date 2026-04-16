import { Show } from 'solid-js'
import type { TweetUser } from '../api/index.js'
import { Verified, VerifiedBusiness, VerifiedGovernment } from './icons/index.js'

type Props = {
  user: TweetUser
  class?: string
}

export const VerifiedBadge = (props: Props) => {
  const verified = () =>
    props.user.verified || props.user.is_blue_verified || props.user.verified_type

  const icon = () => {
    switch (props.user.verified_type) {
      case 'Government':
        return <VerifiedGovernment />
      case 'Business':
        return <VerifiedBusiness />
      default:
        return <Verified />
    }
  }

  const iconClass = () => {
    if (!props.user.is_blue_verified) return 'tweet-s-verified-old'
    switch (props.user.verified_type) {
      case 'Government':
        return 'tweet-s-verified-government'
      case 'Business':
        return undefined
      default:
        return 'tweet-s-verified-blue'
    }
  }

  return (
    <Show when={verified()}>
      <div class={[props.class, iconClass()].filter(Boolean).join(' ')}>
        {icon()}
      </div>
    </Show>
  )
}
