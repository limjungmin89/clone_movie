import styled from 'styled-components'
import message from '../model/type/message'

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`

const Text = styled.span`
  color: ${(props) => props.color};
`
const Message = ({ text, color }: message) => (
  <Container>
    <Text color={color}>{text}</Text>
  </Container>
)

export default Message
