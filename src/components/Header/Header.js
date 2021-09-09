import styled from 'styled-components'
import logo from '../../assets/logo.png'
import Headroom from 'react-headroom'
import Wrapper from './Wrapper/Wrapper'
import Button from '../ui/Button/Button'
import Browse from './Browse/Browse'
import Search from './Search/Search'

const StyledHeader = styled.header``
const Header = () => {
	return (
		<Headroom>
			<StyledHeader className="bg-black text-white">
				<Wrapper>
					<div className="flex items-center gap-8">
						<img src={logo} className="w-40" alt="" />
						<Browse />
                        <Search />
					</div>
					<Button title="sign in" />
				</Wrapper>
			</StyledHeader>
		</Headroom>
	)
}
export default Header
