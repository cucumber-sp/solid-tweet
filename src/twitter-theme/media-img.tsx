type MediaImgProps = {
  src: string
  alt: string
  class?: string
  draggable?: boolean
}

export const MediaImg = (props: MediaImgProps) => (
  <img src={props.src} alt={props.alt} class={props.class} draggable={props.draggable} />
)
