import styled from 'styled-components'
import Info from './Info/Info'

const StyledHero = styled.div`
	height: 35vh;
	width: 100%;
	background-image: url(${props => (props.mobile)});
	background-repeat: no-repeat;
	background-size: cover;
	margin-top: -80px;
	position: relative;
	@media (min-width: 450px) {
		height: 44vh;
	}
	@media (min-width: 540px) {
		height: 54vh;
	}
	@media (min-width: 640px) {
		height: 64vh;
	}
	@media (min-width: 768px) {
		background-image: url(${props => (props.desktop)});
		background-position: top right;
		height: 80vh;
		&::after {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background-image: linear-gradient(to right, black 1%, transparent 50%);
			z-index: 2;
		}
	}
	@media (min-width: 1024px) {
		&::after {
			background-image: linear-gradient(to top, black, transparent 12%);
		}
	}
	@media (min-width: 1280px) {
		height: 75vh;
		background-size: cover;
		background-position: top right;
	}
	transition: height 200ms;
`

const StyledOuter = styled.div`
	grid-template-columns: .75fr 1fr;
	@media (min-width: 768px) {
		grid-template-columns: 1fr 8fr;
		/* background-position: top 100px; */
	}
`
const Hero = ({desktop, mobile, info}) => {
	return (
		<div className="relative" id="outer">
			<StyledOuter className="md:grid relative">
				<StyledHero className="order-2  relative" desktop={desktop} mobile={mobile} />
				<div className="opacity-0" />
			</StyledOuter>
			<Info info={info} />
		</div>
	)
}
export default Hero
