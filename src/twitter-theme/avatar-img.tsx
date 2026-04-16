type AvatarImgProps = {
  src: string
  alt: string
  width: number
  height: number
}

export const AvatarImg = (props: AvatarImgProps) => (
  <img src={props.src} alt={props.alt} width={props.width} height={props.height} />
)
