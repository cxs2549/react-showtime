import styled from 'styled-components'
import Wrapper from '../Wrapper/Wrapper'
const StyledContentNav = styled.div`

`
const ContentNav = () => {
    const content = [`see what's on`, 'ways to watch', `what's included`, 'more ways to buy']
return (
<StyledContentNav className="border-t border-b border-gray-700 py-8 ">
    <div className="max-w-6xl flex flex-col md:flex-row gap-4 items-center justify-between mx-auto px-4">
        {content.map((item, i) => (
        <div key={i} className="uppercase border border-gray-700 rounded py-3 w-full text-center font-semibold md:text-sm text-white cursor-pointer hover:bg-white hover:text-black transition duration-500">
            {item}
        </div>
        ))}
    </div>
</StyledContentNav>
)
}
export default ContentNav