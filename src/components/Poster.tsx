import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Star from './Star'
import poster from '../model/type/poster'

const Container = styled.div`
  font-size: 15px;
`
type propType = {
  bgUrl: string
}

const Image = styled.div`
  background-image: url(${(props: propType) => props.bgUrl});
  height: 180px;
  background-size: cover;
  border-radius: 4px;
  background-position: center center;
  transition: opacity 0.1s linear;
`

const Rating = styled.span`
  bottom: 5px;
  right: 5px;
  position: absolute;
  opacity: 0;
  transition: opacity 0.1s linear;
`

const ImageContainer = styled.div`
  margin-bottom: 5px;
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
    ${Rating} {
      opacity: 1;
    }
  }
`

const Title = styled.span`
  display: block;
  margin-bottom: 3px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const Year = styled.span`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.5);
`
const Poster = ({ id, imageUrl, title, rating, year, isMovie = false }: poster) => (
  <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
    <Container>
      <ImageContainer>
        <Image
          bgUrl={imageUrl ? `https://image.tmdb.org/t/p/w300${imageUrl}` : require('../assets/noPosterSmall.png')}
        />
        <Rating>
          <span role="img" aria-label="rating">
            <Star rating={rating / 2} />
          </span>
          {rating}/10
        </Rating>
      </ImageContainer>
      <Title>{title.length > 18 ? `${title.substring(0, 18)}...` : title}</Title>
      <Year>{year}</Year>
    </Container>
  </Link>
)

export default Poster
