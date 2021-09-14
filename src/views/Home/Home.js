import styled from 'styled-components'
import Hero from './Hero/Hero'
import hero1 from '../../assets/hero/hero-1.jpg'
import hero1mob from '../../assets/hero/hero-1-mobile.jpg'
import hero2 from '../../assets/hero/hero-2.jpg'
import hero2mob from '../../assets/hero/hero-2-mobile.jpg'
import hero3 from '../../assets/hero/hero-3.jpg'
import hero3mob from '../../assets/hero/hero-3-mobile.jpg'
import hero4 from '../../assets/hero/hero-4.jpg'
import hero4mob from '../../assets/hero/hero-4-mobile.jpg'
import hero5 from '../../assets/hero/hero-5.jpg'
import hero5mob from '../../assets/hero/hero-5-mobile.jpg'
import hero6 from '../../assets/hero/hero-6.jpg'
import hero6mob from '../../assets/hero/hero-6-mobile.jpg'
import 'react-slideshow-image/dist/styles.css'
import { Fade } from 'react-slideshow-image'
import { GrFormPrevious, GrFormNext } from 'react-icons/gr'
import ContentNav from './ContentNav/ContentNav'

const StyledHome = styled.div`
	/* height: 100vh; */
	.react-slideshow-container {
		margin-top: -80px;
	}
	.indicators {
		display: flex;
		gap: .75rem;
		transform: translateY(-2rem);
		z-index: 10;
		position: relative;
	
	}
	.indicator {
		cursor: pointer;
		/* padding: 10px; */
		display: grid;
		place-items: center;
		width: 10px;
		height: 10px;
		text-align: center;
		/* border: 1px #666 solid; */
		background-color: #6d6d6d;
		border-radius: 99999px;
	}

	.indicator.active {
		background-color: #fff;
	}
	svg {
		cursor: pointer;
		@media (min-width: 768px) {
			font-size: 3rem;
		}
	}
	svg polyline {
		stroke: white;
	}
`

const properties = {
	duration: 5000,
	transitionDuration: 500,
	infinite: true,
	indicators: (i) => <div className="indicator text-white" />,
	prevArrow: (
		<div
			style={{ fontSize: '50px', marginRight: '-50px' }}
			className="bg-gray-800  transform translate-x-4 translate-y-9 opacity-70 rounded"
		>
			<GrFormPrevious />
		</div>
	),
	nextArrow: (
		<div
			className="bg-gray-800  transform -translate-x-4 translate-y-9 opacity-70 rounded"
			style={{ fontSize: '50px', marginLeft: '-50px' }}
		>
			<GrFormNext />
		</div>
	)
}

const Home = () => {
	const mainHeroes = [ hero1, hero2, hero3, hero4, hero5, hero6 ]
	const mobileHeroes = [ hero1mob, hero2mob, hero3mob, hero4mob, hero5mob, hero6mob ]
	const info = [
		[
			'Every series. Entire seasons.',
			'Watch award-winning original series, all commercial-free.',
			`Watch award-winning SHOWTIME original series, all commercial-free. Get new episodes when they first premiere or catch up on full seasons and complete series.`,
			'start your free trial'
		],
		[
			'the home of combat sports',
			'With over 40 live fight nights a year, go ringside with exclusive access to SHOWTIME Championship Boxing and Bellator MMA.',
			'With over 40 live fight nights a year, go ringside with exclusive access to SHOWTIME Championship Boxing and Bellator MMA.',
			'start your free trial'
		],
		[
			'Start Streaming Showtime Now',
			'Stream series, movies, docs and more. Free for 30 days and then only $10.99/mo.',
			'Stream series, movies, docs and more. Free for 30 days and then only $10.99/mo.',
			'try 30 days free'
		],
		[
			'Hit Movies, Docs, Sports and More',
			'There’s always something great to watch.',
			'There’s always something great to watch.',
			'start your free trial'
		],
		[
			'watch anywhere',
			'Stream live or on-demand, or download full episodes and movies to your mobile devices and watch offline. ',
			'Stream live or on-demand, or download full episodes and movies to your mobile devices and watch offline. ',
			'try 30 days free'
		],
		[
			'emmy nominees',
			'Watch 2021 nominees William H. Macy in Shameless, and VICE. ',
			'Watch 2021 nominees William H. Macy in Shameless, and VICE. ',
			'try 30 days free'
		]
	]

	return (
		<StyledHome>
			<Fade indicators {...properties}>
				{mainHeroes.map((mainhero, i) => (
					<Hero key={i} desktop={mainhero} mobile={mobileHeroes[i]} info={info[i]} />
				))}
			</Fade>
				<ContentNav />
		</StyledHome>
	)
}
export default Home
