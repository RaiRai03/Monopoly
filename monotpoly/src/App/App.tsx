import Shell  from "../Shell/Shell";
import Game from "../Game/Game";
import Auth from "../Auth/Auth";
import { ProvideAuth, useAuth } from "../Auth/useAuth";
function App() {
  const {user} =useAuth()
  return(
    <>
    {user?.name ? (
      <Shell>
      <Game />
    </Shell>
      ): (
       <Auth />
      )}
    </>
  );
} 

export default function Contextualized(){
  return(
    <ProvideAuth>
      <App />
    </ProvideAuth>
  );
}