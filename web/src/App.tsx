import { useState, useEffect, useContext } from "react";

import "./styles/main.css";
import logoImg from "./assets/logo-nlw-esports.svg";

import { GameBanner } from "./components/GameCard";
import { CreateAdBanner } from "./components/CreateAdBanner";
import { SContainer, SLogo, SNoGamesMessage, SPulseAnimation, STitle } from "./styles/App.styled";

import { Slider } from "./components/Slider";
import { Loading } from "./components/Loading";
import { api } from "./api";
import { GameCardContext } from "./contexts/GameCardContext";

interface GameProps {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [games, setGames] = useState<GameProps[]>([]);

  const { newAdCreated } = useContext(GameCardContext);

  useEffect(() => {
    (async () => {
      await api.get("/games")
      .then(res => setGames(res.data))
      .catch(error => console.log(error));

      setLoading(false);
    })();
  }, [newAdCreated]);

  return (
    <SContainer className="outer">
      <SLogo src={logoImg} alt="NLW eSports" />
      
      <STitle>
        Seu <SPulseAnimation>duo</SPulseAnimation> está aqui.
      </STitle>

      <SContainer className="inner">
        {loading ? (
          <Loading margin="2rem auto 6rem" />
        ) : (
          games.length ? (
            <Slider>
              {games.map(game => (
                <GameBanner
                  key={game.id}
                  gameId={game.id}
                  title={game.title}
                  adsCount={game._count.ads}
                  bannerUrl={game.bannerUrl}
                  
                />
              ))}
            </Slider>
          ) : (
            <SNoGamesMessage>Opa! parece que a lista de jogos está vazia.</SNoGamesMessage>
          )
        )}

        <CreateAdBanner />
      </SContainer>
    </SContainer>
  );
}

export default App;
