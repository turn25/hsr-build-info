export interface PlayerVM {
  uid: string;
  username: string;
  level: number;
  worldLevel: number;
  charactersCount: number;
  lightConeCount: number;
  achievementCount: number;
  friendCount: number;
  avatar: {
    icon: string;
    name: string;
  };
  signature: string;
  spaceInfo: {
    passAreaProgress: number;
  };
}
