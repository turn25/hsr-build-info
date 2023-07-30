import { ID } from './common';

interface Avatar {
  id: ID;
  name: string;
  icon: string;
}

interface SpaceInfo {
  challenge_data: {
    maze_group_id: number;
    maze_group_index: number;
    pre_maze_group_index: number;
  };
  pass_area_progress: number;
  light_cone_count: number;
  avatar_count: number;
  achievement_count: number;
}

interface Player {
  uid: ID;
  nickname: string;
  level: number;
  world_level: number;
  friend_count: number;
  avatar: Avatar;
  signature: string;
  is_display: boolean;
  space_info: SpaceInfo;
}

export type { Avatar, SpaceInfo, Player };
