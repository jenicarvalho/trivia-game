import { ButtonLink, ButtonStyled } from './Button.styles'

interface Props {
  children: string,
  link?: string | undefined
}

const Button = (props: Props) => {
  const { link, children } = props
  return (
    <>
      { link ? 
      <ButtonLink to={link}>{children}</ButtonLink>
      :
      <ButtonStyled>{children}</ButtonStyled>
      }
    </>
  )
}

export default Button;