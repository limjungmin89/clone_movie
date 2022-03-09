import React from 'react'
import styled from 'styled-components'

const Container = styled.span`
  font-size: 13px;
  letter-spacing: 0.1em;
  color: goldenrod;
`

type propType = {
  rating: number
}

const Star = ({ rating }: propType) => {
  let ratingStar = ''
  let star = '★'
  for (let i = 1; i <= rating; i++) {
    ratingStar += star
  }
  if (`${rating}`.split('.').length > 1) {
    ratingStar += '☆'
  }

  return <Container>{ratingStar}</Container>
}

export default Star
