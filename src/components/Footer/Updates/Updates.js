import styled from 'styled-components'

const StyledUpdates = styled.div``

const Updates = () => {
	return (
		<StyledUpdates className="border-b xl:border-none border-gray-700 pt-3 pb-5 xl:py-0">
			<div className="mx-auto max-w-xl">
				<div className="">
					<h3 className="text-center text-xl font-semibold uppercase mb-6">
						get updates & offers
					</h3>
					<div className="flex flex-col">
						<span className="text-sm opacity-90 mb-1">Email Address</span>
						<input type="email" className="px-2 h-10 rounded bg-gray-800" />
						<span className="text-sm opacity-90 mb-1 mt-5">Date of Birth</span>
						<div className="flex justify-between items-center gap-2">
							<input
								type="date"
								placeholder="mm/dd/yyyy"
								className="px-2 h-10 rounded bg-gray-800 flex-grow"
							/>
							<button className="border rounded px-4 h-10 font-semibold uppercase text-sm">
								submit
							</button>
						</div>
						<div className="mt-4 flex  gap-4">
							<div>
								<input type="checkbox" name="" id="" />
							</div>
							<p className="text-xs">
								I have read and agree to the Terms of Use, Privacy Policy, and Video
								Services Policy. I agree to receive updates, alerts, and promotions
								from SHOWTIME.
							</p>
						</div>
					</div>
				</div>
			</div>
		</StyledUpdates>
	)
}
export default Updates
