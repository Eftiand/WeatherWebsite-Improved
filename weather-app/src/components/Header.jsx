import { Search } from "./Search"


export const Header = ({callback}) => {
  return (
    <>
        <Search callback={callback} />
    </>
  )
}
