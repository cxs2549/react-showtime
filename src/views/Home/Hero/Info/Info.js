import styled from 'styled-components'
const StyledInfo = styled.div`
	h1 {
		position: relative;
		max-width: 370px;
		@media (min-width: 768px) {
			max-width: 460px;
			&::before {
				content: '';
				position: absolute;
				top: -14px;
				left: 3px;
				width: .7em;
				height: 5px;
				background-color: var(--brandRed);
			}
		}
	}
	p {
		@media (min-width: 768px) {
			min-width: 580px;
			max-width: 580px;
		}
	}
	button {
		background-color: var(--brandRed);
	}
`
const Info = ({info}) => {
	return (
		<StyledInfo className="text-white md:transform z-10 md:-translate-x-1/2 w-full max-w-6xl mx-auto md:absolute left-1/2 top-0 h-full  md:mt-0">
			<div className=" w-full items-center md:items-start md:w-8/12 lg:w-8/12 xl:w-7/12 px-4  xl:px-0   text-white py-8 flex flex-col md:mt-32 xl:-mt-4  xl:justify-center h-full md:ml-12 xl:ml-0">
				<h1 className=" uppercase text-2xl font-bold md:text-5xl xl:text-5xl  mb-1 text-center md:text-left">
					{info[0]}
				</h1>
				<p className="font-medium md:hidden text-center md:text-left leading-6">
					{info[1]}
				</p>
				<p className="  hidden  md:block text-lg py-2 leading-6 font-medium opacity-90">
					{info[2]}
				</p>
				<button className="rounded  mt-4 font-semibold uppercase  py-2 px-5 block w-full md:max-w-xs text-sm">
					{info[3]}
				</button>
			</div>
		</StyledInfo>
	)
}
export default Info
