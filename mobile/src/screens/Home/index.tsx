import { useEffect, useState } from "react";
import { Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";
import logoImg from "../../assets/logo-nlw-esports.png";

import { GameCard, GameCardProps } from "../../components/GameCard";
import { Background } from "../../components/Background";
import { Heading } from "../../components/Heading";
import { BASE_URL } from "@env";

export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([]);
  const { navigate } = useNavigation();

  useEffect(() => {
    try {
      fetch(`${BASE_URL}/games`)
      .then(res => res.json())
      .then(data => setGames(data));
    }
    catch(error) {
      console.log(error);
    }
  }, []);

  function handleSelectedGame({ id, title, bannerUrl }: GameCardProps) {
    navigate("Adverts", { id, title, bannerUrl });
  }

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image
          source={logoImg}
          style={styles.logo}
        />

        <Heading
          title="Encontre seu duo!"
          subtitle="Selecione o game que deseja jogar..."
        />

        <FlatList
          data={games}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <GameCard
              data={item}
              onPress={() => handleSelectedGame(item)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentList}
        />
      </SafeAreaView>
    </Background>
  );
}
