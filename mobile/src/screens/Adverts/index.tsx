import { useEffect, useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";

import { THEME } from "../../theme";
import { styles } from "./styles";
import { SmileySad } from "phosphor-react-native";
import { Entypo } from "@expo/vector-icons";
import logoImg from "../../assets/logo-nlw-esports.png";

import { AdvertCard, AdvertCardProps } from "../../components/AdvertCard";
import { DuoMatch } from "../../components/AdvertCard/DuoMatch"
import { Background } from "../../components/Background";
import { Heading } from "../../components/Heading";
import { Loading } from "../../components/Loading";

import { AdvertParams } from "../../@types/navigation";
import { API_URL } from "@env";

export function Adverts() {
  const [ads, setAds] = useState<AdvertCardProps[]>([]);
  const [duoSelected, setDuoSelected] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  const { goBack } = useNavigation();
  const route = useRoute();
  const game = route.params as AdvertParams;

  useEffect(() => {
    try {
      fetch(`${API_URL}/games/${game.id}/adverts`)
      .then(res => res.json())
      .then(data => setAds(data));

      setLoading(false);
    }
    catch(error) {
      console.log(error);
    }
  }, []);

  function handleEmpty() {
    return (
      <View style={styles.containerEmptyList}>
        <SmileySad size={50} weight="bold" color={THEME.COLORS.CAPTION_400} />
        <Text style={styles.emptyListText}>
          Opa! parece que estamos sem anúncios.
        </Text>
      </View>
    );
  }

  function getUserDiscord(discordId: string) {
    
    try {
      fetch(`${API_URL}/adverts/${discordId}/discord`)
      .then(res => res.json())
      .then(data => setDuoSelected(data.discord));
    }
    catch(error) {
      console.log(error);
    }
  }

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => goBack()}>
            <Entypo
              name = "chevron-thin-left"
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>

          <Image
            source={logoImg}
            style={styles.logo}
          />

          <View style={styles.right} />
        </View>

        <Image
          source={{ uri: game.bannerUrl }}
          style={styles.cover}
          resizeMode="cover"
        />

        <Heading
          title={game.title}
          subtitle="Conecte-se e comece a jogar!"  
        />

        {loading ? (
          <Loading />
        ) : (
          <FlatList
            data={ads}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <AdvertCard
                data={item}
                onConnect={() => getUserDiscord(item.id)}
              />
            )}
            ListEmptyComponent={handleEmpty}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={ads.length > 0 ? styles.contentList : styles.containerEmptyList}
            style={styles.containerList}
          />
        )}

        <DuoMatch
          visible={duoSelected.length > 0}
          onClose={() => setDuoSelected("")}
          onRequestClose={() => setDuoSelected("")}
          discord={duoSelected}
        />
      </SafeAreaView>
    </Background>
  );
}
