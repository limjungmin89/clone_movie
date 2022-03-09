import { Helmet, HelmetProvider } from 'react-helmet-async'

// components
import Section from 'components/Section'
import Loader from 'components/Loader'
import Error from 'components/Message'
import Poster from 'components/Poster'
import Carousel from 'components/Carousel'
import Container from 'components/Container'
import Title from 'components/Title'

//model
import movie from 'model/type/data'
import props from 'model/type/props'

const HomePresenter = ({ nowPlaying, popular, upcoming, loading, error }: props) => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Movies | LIMflix</title>
        </Helmet>
      </HelmetProvider>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          <Title>Now Playing</Title>
          <Carousel nowPlaying={nowPlaying !== undefined ? nowPlaying : []} isMovie={true} />

          {upcoming && upcoming.length > 0 && (
            <Section title="Upcoming Movies">
              {upcoming.map((movie: movie) => (
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
            <Section title="Popular Movies">
              {popular.map((movie: movie) => (
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
          {error && <Error color="e74c3c" text={error} />}
        </Container>
      )}
    </>
  )
}

export default HomePresenter
