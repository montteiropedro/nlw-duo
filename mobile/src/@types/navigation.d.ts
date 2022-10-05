export interface AdvertParams {
  id: string;
  title: string;
  bannerUrl: string;
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      Adverts: AdvertParams;
    }
  }
}