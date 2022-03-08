import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Loader from '../components/Loader'
import { Helmet } from 'react-helmet'
import Star from '../components/Star'

import { movieDetail } from '../query/movieQuery'

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
`

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props: any) => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`

const Content = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  z-index: 1;
  height: 100%;
  padding: 30px;
`

const Cover = styled.div`
  width: 30%;
  background-image: url(${(props: any) => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 100%;
  border-radius: 5px;
`

const Data = styled.div`
  margin-top: 15%;
  width: 70%;
  margin-left: 30px;
`

const Title = styled.span`
  font-size: 32px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 3px;
`

const ItemContainer = styled.div`
  margin: 20px 0;
`

const Item = styled.span``

const Divider = styled.span`
  margin: 0 10px;
`

const Overview = styled.p`
  font-size: 15px;
  opacity: 0.7;
  line-height: 1.5;
  width: 50%;
  letter-spacing: 1px;
`

const Detail = () => {
  const id = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const [result, setResult] = useState({})
  const getMovies = async () => {
    const { data: result } = await movieDetail(Number(id))
    console.log(result)
    setResult(result)
  }
  return (
    <>
      {isLoading === true ? (
        <>
          <Helmet>
            <title>Loading</title>
          </Helmet>
          <Loader />
        </>
      ) : (
        <>
          <Container>
            {/* <Helmet>
              <title>{result.original_title ? result.original_title : result.original_name}</title>
            </Helmet>
            <Backdrop bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`} />
            <Content>
              <Cover
                bgImage={result.poster_path ? `https://image.tmdb.org/t/p/original${result.poster_path}` : noPoster}
              />
              <Data>
                <Title>{result.original_title ? result.original_title : result.original_name}</Title>
                <ItemContainer>
                  <Item>
                    {result.genres &&
                      result.genres.map((genre, index) =>
                        index === result.genres.length - 1 ? genre.name : `${genre.name} / `,
                      )}
                  </Item>
                  <Divider>•</Divider>
                  <Item>
                    📅
                    {result.release_date ? result.release_date.substring(0, 4) : result.first_air_date.substring(0, 4)}
                  </Item>
                  <Divider>•</Divider>
                  <Item>⏱{result.runtime ? result.runtime : result.episode_run_time[0]} min</Item>
                  <Divider>•</Divider>
                  <Item>
                    <Star rating={result.vote_average / 2} /> ( {result.vote_average} )
                  </Item>
                </ItemContainer>
                <Overview>{result.overview}</Overview>
              </Data>
            </Content> */}
          </Container>
        </>
      )}
    </>
  )
}

export default Detail
