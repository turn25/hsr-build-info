import { isValidEnum } from '@/libs';
import { characterMapper, playerMapper } from '@/services/mapper';
import { ID, Languague, Profile } from '../interfaces';
import { ProfileVM } from '../vms';
import { axiosClient } from './client';

export class PlayerService {
  async find({
    uid,
    lang = Languague.EN,
  }: {
    uid: ID;
    lang?: string;
  }): Promise<ProfileVM | null> {
    try {
      const languague = isValidEnum(lang, Languague) ? lang : Languague.EN;

      const response = await axiosClient.get(uid.toString(), {
        params: { lang: languague },
      });
      const data = response.data as Profile;
      // const data = (await import('@/public/mock.json')).default as Profile;

      const player = data.player;
      const characters = data.characters;

      const mappedPlayer = playerMapper(player);
      const mappedCharacters = characterMapper(characters);

      return {
        player: mappedPlayer,
        characters: mappedCharacters,
      };
    } catch (e) {
      console.log(e);
      return null;
    }
  }
}
