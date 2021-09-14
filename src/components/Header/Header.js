import styled from 'styled-components'
import logo from '../../assets/logo.png'
import Headroom from 'react-headroom'
import Wrapper from './Wrapper/Wrapper'
import Button from '../ui/Button/Button'
import Browse from './Browse/Browse'
import Search from './Search/Search'
import { useState, useRef, useEffect } from 'react'
import Menu from './Browse/Menu/Menu'
import useOnClickOutside from 'use-onclickoutside'
import Overlay from './Browse/Menu/Overlay/Overlay'

const StyledHeader = styled.header`
	transition: background-color 50ms;
	@media (min-width: 1024px) {
	transition: background-color 550ms;
		
	}
	/* background-color: transparent; */
	/* display: none; */
`
const Header = () => {
	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 80) {
				document.getElementById('myHeader').classList.remove('bg-transparent')
				document.getElementById('myHeader').classList.add('bg-black')
			} else {
				document.getElementById('myHeader').classList.remove('bg-black')
				document.getElementById('myHeader').classList.add('bg-transparent')
			}
		})
	})
	const [ isOpen, setIsOpen ] = useState(false)
	const handleOpen = () => {
		setIsOpen(!isOpen)
		document.getElementById('myHeader').classList.toggle('bg-black')
		document.body.classList.toggle('open-modal')
	}
	const handleClose = () => {
		setIsOpen(false)
		document.getElementById('myHeader').classList.remove('bg-black')
		document.body.classList.remove('open-modal')
	}
	const menuRef = useRef()
	useOnClickOutside(menuRef, () => setIsOpen(false))
	return (
		<Headroom>
			<StyledHeader id="myHeader" className="bg-transparent text-white">
				<Wrapper>
					<div className="flex items-center gap-2 md:gap-4 lg:gap-8">
						<div ref={menuRef}>
							<Browse open={isOpen} click={handleOpen} />
							<Menu open={isOpen} close={handleClose} />
							<Overlay open={isOpen} close={handleClose} />
						</div>
						<img src={logo} className="w-32 md:w-40 xl:-ml-8" alt="" />
						<Search />
					</div>
					<Button title="sign in" />
				</Wrapper>
			</StyledHeader>
		</Headroom>
	)
}
export default Header
