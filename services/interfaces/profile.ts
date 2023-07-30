import { Character } from './charater';
import { Player } from './player';

export interface Profile {
  player: Player;
  characters: Character[];
}
