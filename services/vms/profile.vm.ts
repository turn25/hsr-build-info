import { CharacterVM } from './character.vm';
import { PlayerVM } from './player.vm';

export interface ProfileVM {
  player: PlayerVM;
  characters: CharacterVM[];
}
