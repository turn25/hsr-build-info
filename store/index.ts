import { StateCreator, create } from 'zustand';

interface MusicSlice {
  isMusicPlay: boolean;
  setIsMusicPlay: (state: boolean) => void;
}

const createMusicSlice: StateCreator<MusicSlice, [], [], MusicSlice> = (
  set
) => ({
  isMusicPlay: false,
  setIsMusicPlay: (state) => set(() => ({ isMusicPlay: state })),
});

const useGlobalStore = create<MusicSlice>()((...a) => ({
  ...createMusicSlice(...a),
}));

export { useGlobalStore };
