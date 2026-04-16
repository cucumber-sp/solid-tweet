import type { Component } from 'solid-js'

export type TwitterComponents = {
  TweetNotFound?: Component<{ error?: any }>
  AvatarImg?: Component<{
    src: string
    alt: string
    width: number
    height: number
  }>
  MediaImg?: Component<{
    src: string
    alt: string
    class?: string
    draggable?: boolean
  }>
}
