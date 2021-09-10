import styled from 'styled-components'

const StyledMenu = styled.div`
	position: fixed;
	top: 80px;
	left: ${(props) => (props.open ? 0 : '-100%')};
	width: 70%;
	max-width: 400px;
	height: 100vh;
	background-color: #000;
	transition: left 250ms ease-in-out;
	/* transition-delay: 200ms; */
	z-index: 10;
	/* opacity: .6; */
    svg {
        font-size: 2.7rem;
    }
`
const Menu = ({ open }) => {
	const links = [
		'home',
		'series',
		'movies',
		'sports',
		'comedy',
		'docs',
		'afterhours',
		'coming soon',
		'live TV',
		'collections'
	]
	return (
		<StyledMenu
			className="px-6 flex flex-col gap-4 uppercase font-medium py-8 text-xl"
			open={open}
		>
		
			{links.map((link, i) => (
				<div key={i}>
					<a href="/" className="opacity-80 hover:opacity-100">
						{link}
					</a>
				</div>
			))}
		</StyledMenu>
	)
}
export default Menu
