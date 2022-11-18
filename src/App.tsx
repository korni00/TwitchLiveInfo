import TwitchItem from './TwitchItem/TwitchItem';
import { NavBar, CenterGrid, NavBot } from './App.style';
const App = () => {
  return (
    <>
      <NavBar>live.murzyniarnia</NavBar>
      <CenterGrid container>
        <TwitchItem broadcasterid={30773126} />
        <TwitchItem broadcasterid={62348345} />
        <TwitchItem broadcasterid={164983808} />
      </CenterGrid>
      <NavBot>© murzyniarnia.com</NavBot>
    </>
  );
};
export default App;
