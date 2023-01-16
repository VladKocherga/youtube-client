import { Item, IUserCard } from '../interfaces/search-item.model';

export interface IState {
  userCards: string;
  youtubeCards: Item[];
}

export interface IStore {
  YoutubeState: IState;
}
