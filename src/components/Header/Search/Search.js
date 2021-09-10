import styled from 'styled-components'
const StyledSearch = styled.div``
const Search = () => {
return (
<StyledSearch className="hidden sm:block relative">
    <input type="search" placeholder="Search" className="py-2 px-4 rounded bg-gray-800 focus:outline-none" />
    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
        <i className="fa fa-search" aria-hidden="true"></i>
    </div>
</StyledSearch>
)
}
export default Search