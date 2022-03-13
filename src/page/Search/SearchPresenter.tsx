import Loader from 'components/Loader'
import Message from 'components/Message'
import Poster from 'components/Poster'
import Section from 'components/Section'
import dataInfo from 'model/type/data'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

type prop = {
  bgColor: string
}
const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
`

const Form = styled.form`
  /* margin-bottom: 50px; */
  width: 100%;
  margin: 50px 0px;
`
const Input = styled.input`
  all: unset;
  font-size: 28px;
  width: 60%;
`

const Recommend = styled.div`
  display: flex;
  margin-bottom: 30px;
`

const Title = styled.h2`
  margin: 40px 0px;
  font-size: 24px;
  font-weight: 600;
`

const Span = styled.span`
  font-family: 'Netflix Sans', sans-serif;
  margin: 20px 10px;
  padding: 5px 12px 7px 12px;
  font-size: 15px;
  background-color: ${(props: prop) => props.bgColor};
  border-radius: 15px;
  text-align: center;
  filter: brightness(80%);
  color: white;
  &:hover {
    filter: brightness(100%);
  }
`
type props = {
  movieResults: Array<dataInfo>
  tvResults: Array<dataInfo>
  searchTerm: string
  loading: boolean
  error: string
  handleSubmit: React.FormEventHandler<HTMLFormElement>
  updateTerm: React.ChangeEventHandler<HTMLInputElement>
  movieTrend: any
  tvTrend: any
}

const SearchPresenter = ({
  movieResults,
  tvResults,
  searchTerm,
  loading,
  error,
  handleSubmit,
  updateTerm,
  movieTrend,
  tvTrend,
}: props) => {
  return (
    <Container>
      <HelmetProvider>
        <Helmet>
          <title>Search | LIMflix</title>
        </Helmet>
      </HelmetProvider>
      <Form onSubmit={handleSubmit}>
        <Input placeholder="Search Movies of TV Show..." value={searchTerm} onChange={updateTerm}></Input>
      </Form>
      <Title>🎞 This Week's Top 5 Movies</Title>
      {movieTrend && movieTrend.length > 0 && (
        <Recommend>
          {movieTrend.map((movie: dataInfo) => (
            <Link to={`/movie/${movie.id}`}>
              <Span bgColor="#7941e5">{movie.title}</Span>
            </Link>
          ))}
        </Recommend>
      )}
      <Title>This Week's Top 5 TV Shows</Title>
      {tvTrend && tvTrend.length > 0 && (
        <Recommend>
          {tvTrend.map((tv: any) => (
            <Link to={`/show/${tv.id}`}>
              <Span bgColor="#4287f5">{tv.original_name}</Span>
            </Link>
          ))}
        </Recommend>
      )}

      {loading ? (
        <Loader />
      ) : (
        <>
          {movieResults && movieResults.length > 0 && (
            <Section title="Movie result">
              {movieResults.map((movie: dataInfo) => (
                <Poster
                  key={movie.id}
                  id={movie.id}
                  imageUrl={movie.poster_path}
                  title={movie.original_title}
                  rating={movie.vote_average}
                  year={movie.release_date !== undefined ? movie.release_date.substring(0, 4) : undefined}
                  isMovie={true}
                />
              ))}
            </Section>
          )}
          {tvResults && tvResults.length > 0 && (
            <Section title="TV Show result">
              {tvResults.map((show: dataInfo) => (
                <Poster
                  key={show.id}
                  id={show.id}
                  imageUrl={show.poster_path}
                  title={show.original_name}
                  rating={show.vote_average}
                  year={show.first_air_date !== undefined ? show.first_air_date.substring(0, 4) : undefined}
                />
              ))}
            </Section>
          )}
        </>
      )}
      {error && <Message color="#e74c3c" text={error} />}
      {tvResults && movieResults && tvResults.length === 0 && movieResults.length === 0 && (
        <Message text={`Nothing found`} color="95a5a6" />
      )}
    </Container>
  )
}

export default SearchPresenter
