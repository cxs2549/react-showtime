import styled from 'styled-components'
const StyledWrapper = styled.div``
const Wrapper = ({children}) => {
return (
<StyledWrapper className="mx-auto max-w-6xl px-4 xl:px-0 py-8">
    {children}
</StyledWrapper>
)
}
export default Wrapper