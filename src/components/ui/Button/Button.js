import styled from 'styled-components'
const StyledButton = styled.button``
const Button = ({title}) => {
return (
<StyledButton className="font-semibold border-2 rounded-lg px-4 py-2 uppercase text-sm hover:bg-white hover:border-none hover:text-black transition-colors duration-200">
    {title}
</StyledButton>
)
}
export default Button