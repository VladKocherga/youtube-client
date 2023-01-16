import { Injectable } from '@angular/core';
import { State, Selector, Action, StateContext } from '@ngxs/store';
import { SetUserCards, SetYoutubeCards } from './youtube.action';
import { IState } from './youtube.interface';
import { Item } from '../interfaces/search-item.model';

const initialState: IState = {
  userCards: JSON.stringify([]),
  youtubeCards: [],
};

@State<IState>({
  name: 'YoutubeState',
  defaults: initialState,
})
@Injectable()
class YoutubeState {
  @Action(SetYoutubeCards)
  private setYoutubeCards(
    { patchState }: StateContext<IState>,
    action: SetYoutubeCards
  ) {
    patchState({
      youtubeCards: action.youtubeCards,
    });
  }

  @Action(SetUserCards)
  private setUserCardss(
    { patchState }: StateContext<IState>,
    action: SetUserCards
  ) {
    patchState({
      userCards: action.userCards,
    });
  }

  @Selector()
  public static youtubeCards(state: IState): Item[] {
    return state.youtubeCards;
  }

  @Selector()
  public static userCards(state: IState): string {
    return state.userCards;
  }
}

export default YoutubeState;
