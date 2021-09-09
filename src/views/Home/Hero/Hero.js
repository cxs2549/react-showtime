import styled from 'styled-components'
import hero1 from '../../../assets/hero/hero-1-mobile.jpg'
import hero1b from '../../../assets/hero/hero-1.jpg'
const StyledHero = styled.div`
	height: 50vh;
	width: 100%;
	background-image: url(${hero1});
	background-repeat: no-repeat;
	background-size: cover;
	@media (min-width: 768px) {
	background-image: url(${hero1b});
	height: 60vh;
	}
	@media (min-width: 1280px) {
		height: 75vh;
	}
`
const Hero = () => {
	return (
		<StyledHero>
			
		</StyledHero>
	)
}
export default Hero
