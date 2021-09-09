import styled from 'styled-components'
const StyledWrapper = styled.div``
const Wrapper = ({children}) => {
return (
<StyledWrapper className="mx-auto max-w-6xl px-4 xl:px-0 h-20 flex items-center justify-between">
    {children}
</StyledWrapper>
)
}
export default Wrapper