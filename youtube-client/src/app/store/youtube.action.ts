import { CardsOperations } from '../constants/constant';
import { Item } from '../interfaces/search-item.model';

export class SetYoutubeCards {
  static readonly type = CardsOperations.setYoutubeCards;

  constructor(public youtubeCards: Item[]) {}
}

export class SetUserCards {
  static readonly type = CardsOperations.setUserCards;

  constructor(public userCards: string) {}
}
