import styled from 'styled-components'
const StyledOverlay = styled.div`
    position: absolute;
    top: 80px;
    left: 0;
    height: 100vh;
    width: 100vw;
    visibility: ${props => (props.open ? 'visible' : 'hidden')};
    background-color: rgba(0,0,0,.7);
    /* transition: visibility 450ms; */
`
const Overlay = ({open, close}) => {
return (
<StyledOverlay onClick={close} open={open}>

</StyledOverlay>
)
}
export default Overlay