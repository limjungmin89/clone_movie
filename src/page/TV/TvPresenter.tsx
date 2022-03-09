import { Helmet, HelmetProvider } from 'react-helmet-async'

// components
import Carousel from 'components/Carousel'
import Container from 'components/Container'
import Loader from 'components/Loader'
import Poster from 'components/Poster'
import Section from 'components/Section'
import Title from 'components/Title'
import Error from 'components/Message'

//model
import Props from 'model/type/props'
import data from 'model/type/data'

const TvPresenter = ({ topRated, popular, airingToday, error, loading }: Props) => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>TV | LIMflix</title>
        </Helmet>
      </HelmetProvider>
      {loading === true ? (
        <Loader />
      ) : (
        <Container>
          <Title>Top Shows</Title>
          {topRated && topRated.length > 0 && <Carousel nowPlaying={topRated} isMovie={false} />}
          {popular && popular.length > 0 && (
            <Section title="Popular Shows">
              {popular.map((data: data) => (
                <Poster
                  key={data.id}
                  id={data.id}
                  imageUrl={data.poster_path}
                  title={data.original_name}
                  rating={data.vote_average}
                  year={data.first_air_date.substring(0, 4)}
                />
              ))}
            </Section>
          )}
          {popular && popular.length > 0 && (
            <Section title="Airing Today Shows">
              {popular.map((data: data) => (
                <Poster
                  key={data.id}
                  id={data.id}
                  imageUrl={data.poster_path}
                  title={data.original_name}
                  rating={data.vote_average}
                  year={data.first_air_date.substring(0, 4)}
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

export default TvPresenter
