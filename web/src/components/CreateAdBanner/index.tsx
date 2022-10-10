import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

import { DiscordLogo } from "phosphor-react";
import {
  SBanner, SHeader, STitle, SText, SLoginButton, SContainer,
  SUsername, SUserAvatar, SLogoutButton, SLogoutIcon
} from "./styled";

import { CreateAdModal } from "../CreateAdModal";

export function CreateAdBanner() {
  const { isAuthenticated, user, login, logout } = useContext(AuthContext);

  return (
    <SBanner>
      <SHeader>
        <STitle>Não encontrou seu duo?</STitle>
        <SText>Publique um anúncio para encontrar novos players!</SText>
      </SHeader>

      <SContainer>
        {isAuthenticated && user ? (
          <SLogoutButton onClick={logout} title={`${user.username}#${user.discriminator}`}>
            <SLogoutIcon size={24} weight="bold" />
            <SUsername>{user.username}</SUsername>
            <SUserAvatar
              src={user.avatar ?
                `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`
                : `https://cdn.discordapp.com/embed/avatars/${Number(user.discriminator)%5}.png`
              }
              title="Discord Avatar"
            />
          </SLogoutButton>
        ) : (
          <SLoginButton onClick={login}>
            <DiscordLogo size={24} color="white" />
            Entrar com Discord
          </SLoginButton>
        )}
        
        <CreateAdModal />
      </SContainer>
    </SBanner>
  );
}
