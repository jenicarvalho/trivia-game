import { Container } from './Button.styles'

interface Props {
  children: string,
  answer?: boolean,
  onClick?: any
}

const Button = (props: Props) => {
  const { children, answer, ...rest } = props
  return   <Container answer={answer} {...rest}>{children}</Container>
}

export default Button