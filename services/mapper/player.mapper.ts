import { config } from '@/config';
import { Profile } from '../interfaces';
import { PlayerVM } from '../vms';

export const playerMapper = (player: Profile['player']): PlayerVM => {
  return {
    uid: player.uid,
    username: player.nickname,
    level: player.level,
    worldLevel: player.world_level,
    signature: player.signature,
    avatar: {
      icon: config.assetUrl + player.avatar.icon,
      name: player.avatar.name,
    },
    achievementCount: player.space_info.achievement_count,
    charactersCount: player.space_info.avatar_count,
    friendCount: player.friend_count,
    lightConeCount: player.space_info.light_cone_count,
    spaceInfo: {
      passAreaProgress: player.space_info.pass_area_progress,
    },
  };
};
