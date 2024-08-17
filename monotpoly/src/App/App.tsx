import Shell  from "../Shell/Shell";
import Game from "../Game/Game";
import Auth from "../Auth/Auth";
export default function App() {
  const isLoggedIn = false
  return(
    <>
    {isLoggedIn ? (

      <Shell>
      <Game />
    </Shell>
      ): (
       <Auth />
      )}
    </>
  );
} 