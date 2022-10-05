import { useState, useEffect } from "react";

import "./styles/main.css";
import logoImg from "./assets/logo-nlw-esports.svg";

import { GameBanner } from "./components/GameBanner";
import { CreateAdBanner } from "./components/CreateAdBanner";
import { SContainer, SNoGamesMessage, SPulseAnimation, STitle } from "./styles/App.styled";

import { api } from "./api";
import { Slider } from "./components/Slider";

interface GameProps {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

function App() {
  const [games, setGames] = useState<GameProps[]>([]);

  useEffect(() => {
    try {
      api.get("/games").then(res => setGames(res.data));
    }
    catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <SContainer className="outer">
      <img src={logoImg} alt="NLW eSports" />
      
      <STitle>
        Seu <SPulseAnimation>duo</SPulseAnimation> está aqui.
      </STitle>

      <SContainer className="inner">
        {games.length ? (
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
        )}

        <CreateAdBanner />
      </SContainer>
    </SContainer>
  );
}

export default App;
