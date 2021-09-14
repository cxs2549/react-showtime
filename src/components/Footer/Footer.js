import logo from '../../assets/logo.png'
import styled from 'styled-components'
import Updates from './Updates/Updates'

const StyledFooter = styled.footer`
	background-color: #151515;
	color: whitesmoke;
	#acc {
		svg {
			&:first-child {
				font-size: 1.5rem;
			}
		}
	}
	#logo {
		position: relative;
		@media (min-width: 1280px) {
			&::after {
				content: '';
				position: absolute;
				left: 0;
				top: 0;
				width: 100%;
				height: 100%;
				background-color: #861657;
				background-image: linear-gradient(326deg, #861657 0%, #ffa69e 74%);
				opacity: .5;
			}
		}
	}
`
const Footer = () => {
	const accordions = [
		{
			title: 'help',

			links: [
				'help center',
				'supported devices',
				'purchased through optimum? Activate now',
				'purchased through paramount+? Activate now',
				`purchased through sam's club? Activate now`,
				'contact us'
			]
		},

		{
			title: 'legal',

			links: [
				'terms of use',
				'privacy',
				'video services policy',
				'closed captioning',
				'do not sell my personal information'
			]
		},
		{
			title: 'gifts',

			links: [ 'redeem gift' ]
		}
	]
	return (
		<StyledFooter className="px-5 sm:px-6 py-12 xl:px-0">
			<div id="wrapper" className="mx-auto xl:max-w-6xl grid xl:grid-cols-2 gap-x-4 gap-y-12">
				<Updates />
				{/* logo */}
				<div
					id="logo"
					className="flex items-center justify-center xl:row-start-1 xl:col-start-1 xl:bg-brandRed xl:rounded"
				>
					<img src={logo} className="w-40 xl:w-48 mx-auto " alt="" />
				</div>
				{/* accordions */}
				<div
					className="flex flex-col   xl:grid xl:gap-4 xl:col-span-2 grid-cols-3"
					id="acc"
				>
					{accordions.map((acc, i) => (
						<div key={i} className="border-b xl:border-none border-gray-700">
							<div className="flex  justify-between items-center capitalize font-medium text-xl cursor-pointer py-4">
								<span className="uppercase text-base">{acc.title}</span>
							</div>
							{/* menu */}

							<div>
								<ul className="flex flex-col flex-wrap gap-x-4 gap-y-3 pb-6 pt-1">
									{acc.links.map((link, i) => (
										<li
											key={i}
											className="capitalize flex items-center gap-1 text-sm hover:underline cursor-pointer opacity-80 hover:opacity-100"
										>
											<span className="whitespace-nowrap">{link}</span>
										</li>
									))}
								</ul>
							</div>
						</div>
					))}
				</div>
				{/* socials */}
				<div className=" font-medium text-xl cursor-pointer  flex items-center gap-10 md:justify-between mb-4 xl:mb-0 border-b border-gray-700 pb-3 xl:pb-0 xl:col-span-2">
					<span className="uppercase text-base whitespace-nowrap py-3">Follow us</span>
					<div className="flex items-center justify-between w-full gap-6 pr-1 md:max-w-xl">
						<i className="fa fa-facebook" aria-hidden="true" />
						<i className="fa fa-instagram" aria-hidden="true" />
						<i className="fa fa-twitter" aria-hidden="true" />
						<i className="fa fa-linkedin" aria-hidden="true" />
						<i className="fa fa-youtube" aria-hidden="true" />
					</div>
				</div>
				{/* copy */}
				<div className="text-xs xl:col-span-2">
					<p>
						You will not be charged for the SHOWTIME streaming service during the free
						trial period. TO CANCEL YOUR SUBSCRIPTION AND AVOID BEING CHARGED, YOU MUST
						CANCEL BEFORE THE END OF THE FREE TRIAL PERIOD. To keep your subscription
						once your trial period is over, you will not have to do anything. Free
						trial, price and device availability may vary by participating subscription
						providers and are subject to change. Free trial is available to new
						customers only. All promo codes must be redeemed exclusively through
						SHOWTIME.com at check out. Promo codes only valid for new subscribers. All
						promo code rates and durations apply after the free trial period has ended
						and cannot be combined with other offers.
					</p>
					<br />
					<p>
						© 2021 CxS Development for Showtime Digital Inc., a subsidiary of Showtime
						Networks Inc. SHOWTIME and related marks are trademarks of Showtime Networks
						Inc., a ViacomCBS Company. All rights reserved. SHOWTIME is accessible for
						viewing solely in the United States and its territories and possessions.
					</p>
					<br />
					<p>
						Minimum high-speed broadband connection is required for viewing. Amazon,
						Kindle, Fire and all related logos are trademarks of Amazon.com, Inc. or its
						affiliates. Android, Android TV, Google Play and Chromecast are trademarks
						of Google inc. iPhone, iPad, and Apple TV are registered trademarks of Apple
						Inc. Roku and the Roku logo are trademarks and/or registered trademarks of
						Roku, Inc. in the United States and other countries. PlayStation and PS4 are
						registered trademarks or trademarks of Sony Interactive Entertainment Inc.
						Hulu is a registered trademark of Hulu, LLC. Samsung is a registered
						trademark of Samsung Electronics Co., Ltd. LG is a registered trademark of
						LG Electronics, Inc., Oculus and the Oculus logo are trademarks of Oculus
						VR, LLC.
					</p>
				</div>
			</div>
		</StyledFooter>
	)
}
export default Footer
