import styled from 'styled-components'
import Hero from './Hero/Hero'
import Wrapper from './Wrapper/Wrapper'
const StyledHome = styled.div`
height: 100vh;
`
const Home = () => {
	return (
		<StyledHome>
			<Hero />
			<Wrapper>
				hi
			</Wrapper>
		</StyledHome>
	)
}
export default Home
