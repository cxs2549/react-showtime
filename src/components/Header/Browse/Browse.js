import {Squash as Hamburger} from 'hamburger-react'
import styled from 'styled-components'
const StyledBrowse = styled.div`
    position: relative;
    z-index: 10;
`
const Browse = ({open, click}) => {
	return (
		<StyledBrowse className=" uppercase font-medium  py-2 xl:hidden">
			<Hamburger toggled={open} toggle={click} />
		</StyledBrowse>
	)
}
export default Browse
