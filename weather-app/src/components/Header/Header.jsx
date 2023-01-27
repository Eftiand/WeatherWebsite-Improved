import { CurrentWeather } from "../CurrentWeather/CurrentWeather"
import { Search } from "../Search"


export const Header = (props) => {
  return (
    <>
      <header className="text-center p-5">
        <CurrentWeather currentWeather={props.currentWeather} />
        <Search callback={props.callback} />
      </header>
    </>
  );
}
