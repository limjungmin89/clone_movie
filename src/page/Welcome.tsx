import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Loader from '../components/Loader'
import Section from '../components/Section'
import Poster from '../components/Poster'
import Button from '../components/Button'
import { nowPlayingList, upcomingList, popularList } from '../query/movieQuery'

const Container = styled.div`
  padding: 20px;
`

const Movies = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [nowPlaying, setNowPlaying] = useState([])
  const [upcoming, setUpcoming] = useState([])
  const [popular, setPopular] = useState([])
  const getMovies = async () => {
    const { data: nowPlaying } = await nowPlayingList()
    setNowPlaying(nowPlaying.results)
    const { data: upcoming } = await upcomingList()
    setUpcoming(upcoming.results)
    const { data: popular } = await popularList()
    setPopular(popular)
    setLoading(false)
  }
  const goHome = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigate('/')
  }
  useEffect(() => {
    getMovies()
  }, [])
  return (
    <div>
      <Button onClick={goHome}>goHome</Button>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          {nowPlaying && nowPlaying.length > 0 && (
            <Section title="Now Playing">
              {nowPlaying.map((movie: any) => (
                <Poster
                  key={movie.id}
                  id={movie.id}
                  imageUrl={movie.poster_path}
                  title={movie.original_title}
                  rating={movie.vote_average}
                  year={movie.release_date.substring(0, 4)}
                  isMovie={true}
                />
              ))}
            </Section>
          )}
          {upcoming && upcoming.length > 0 && (
            <Section title="Upcoming Movies">
              {upcoming.map((movie: any) => (
                <Poster
                  key={movie.id}
                  id={movie.id}
                  imageUrl={movie.poster_path}
                  title={movie.original_title}
                  rating={movie.vote_average}
                  year={movie.release_date.substring(0, 4)}
                  isMovie={true}
                />
              ))}
            </Section>
          )}
          {popular && popular.length > 0 && (
            <Section title="Popular Movie">
              {popular.map((movie: any) => (
                <Poster
                  key={movie.id}
                  id={movie.id}
                  imageUrl={movie.poster_path}
                  title={movie.original_title}
                  rating={movie.vote_average}
                  year={movie.release_date?.substring(0, 4)}
                  isMovie={true}
                />
              ))}
            </Section>
          )}
        </Container>
      )}
    </div>
  )
}

export default Movies
