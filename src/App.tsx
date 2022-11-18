import TwitchItem from './TwitchItem/TwitchItem';
import { NavBar, CenterGrid, NavBot } from './App.style';
const App = () => {
  return (
    <>
      <NavBar>live.murzyniarnia</NavBar>
      <CenterGrid container>
        <TwitchItem nick='delordione' broadcasterid={30773126} href='https://www.twitch.tv/delordione' />
        <TwitchItem nick='khamires' broadcasterid={62348345} href='https://www.twitch.tv/khamires' />
        <TwitchItem nick='sandrulaax' broadcasterid={164983808} href='https://www.twitch.tv/sandrulaax' />
      </CenterGrid>
      <NavBot>© murzyniarnia.com</NavBot>
    </>
  );
};
export default App;
