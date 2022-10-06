import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContexts";

import { DiscordLogo } from "phosphor-react";
import {
  SBanner, SHeader, STitle, SText, SLoginButton, SContainer,
  SUsername, SUserAvatar, SLogoutButton, SSignOutIcon
} from "./styled";

import { CreateAdModal } from "../CreateAdModal";

export function CreateAdBanner() {
  const { isAuthenticated, user, signIn, signOut } = useContext(AuthContext);

  return (
    <SBanner>
      <SHeader>
        <STitle>Não encontrou seu duo?</STitle>
        <SText>Publique um anúncio para encontrar novos players!</SText>
      </SHeader>

      <SContainer>
        {isAuthenticated && user ? (
          <SLogoutButton onClick={signOut} title={`${user.username}#${user.discriminator}`}>
            <SSignOutIcon size={24} weight="bold" />
            <SUsername>{`${user.username}#${user.discriminator}`}</SUsername>
            <SUserAvatar
              src={user.avatar ?
                `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`
                : `https://cdn.discordapp.com/embed/avatars/${Number(user.discriminator)%5}.png`
              }
              title="Discord Avatar"
            />
          </SLogoutButton>
        ) : (
          <SLoginButton onClick={signIn}>
            <DiscordLogo size={24} color="white" />
            Entrar com Discord
          </SLoginButton>
        )}
        
        <CreateAdModal />
      </SContainer>
    </SBanner>
  );
}
