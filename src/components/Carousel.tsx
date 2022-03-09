import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'

const Img = styled.img`
  background-image: url(${(props: any) => props.bgUrl});
  display: block;
  /* height: 460px; */
  height: 18%;
  border-radius: 15px;
  justify-content: center;
  margin: 0px auto;
  filter: brightness(70%);
`

const CarouselDiv = styled.div`
  margin: 40px 20px;
  display: flex;
  justify-content: center; /* 주 축의 방향에 따라 아이템을 정렬 */
  align-items: center; /* 주 축을 교차하는 교차축을 따라 아이템을 정렬 */
  &:hover {
    ${Img} {
      filter: brightness(100%);
    }
  }
`

type propTypes = {
  nowPlaying: Array<object>
  isMovie: boolean
}

const Carousel = ({ nowPlaying, isMovie }: propTypes) => {
  const settings = {
    dots: false, // 슬라이드 밑에 점 여부
    infinite: true, // 무한반복
    speed: 1000,
    autoplay: true, // 자동 플레이
    autoplaySpeed: 2000, // 슬라이드 속도
    slidesToShow: 4, // 4장씩 보이게
    slidesToScroll: 1, // 1장씩 뒤로 넘어가게
    centerMode: true,
    centerPadding: '0px', // 슬라이드 끝쪽 padding 0px
  }
  return (
    <Slider {...settings}>
      {nowPlaying.map((movie: any, i: any) => (
        <Link to={isMovie ? `/movie/${movie.id}` : `/show/${movie.id}`}>
          {' '}
          <CarouselDiv key={i}>
            <Img key={i} src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} />
          </CarouselDiv>
        </Link>
      ))}
    </Slider>
  )
}

export default Carousel
