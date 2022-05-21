import { IUserCard } from '../interfaces/search-item.model';

export const enum Days {
  minDay = 7,
  middleDay = 31,
  maxDay = 186,
}

export const YOUTUBE_SEARCH_URL =
  'https://www.googleapis.com/youtube/v3/search';
export const YOUTUBE_VIDEO_URL = 'https://www.googleapis.com/youtube/v3/videos';
export const API_KEY = 'AIzaSyDsxqBSFJF9ldHWFB1HglzwABKQYsb-NYk';

export const enum BorderColor {
  red = 'red',
  green = 'green',
  yellow = 'yellow',
  blue = 'blue',
}

export const enum CardsOperations {
  setUserCards = '[youtube] Set user cards',
  setYoutubeCards = '[youtube] Set youtube cards',
}

export const emptyUserCard: IUserCard = {
  title: '',
  description: '',
  imgLink: '',
  videoLink: '',
  creatingDate: '',
};

export const EMAIL_PATTERN: string =
  '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
export const PASSWORD_PATTERN: string =
  '(?=^.{8,}$)((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$';
export const CARD_URL_PATTERN: string =
  '(https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9]+\\.[^\\s]{2,}|www\\.[a-zA-Z0-9]+\\.[^\\s]{2,})';

export const DIRECT_SORT_MULTIPLIER: number = 1;
export const REVERSE_SORT_MULTIPLIER: number = -1;
export const MILLISECONDS_IN_DAY: number = 86400000;
export const PASSWORD_MIN_LENGTH: number = 8;
export const CARD_TITLE_MIN_LENGTH: number = 3;
export const CARD_TITLE_MAX_LENGTH: number = 20;
export const CARD_DESCRIPTION_MAX_LENGTH: number = 255;
export const MIN_SEARCH_LENGTH: number = 3;
export const MAX_VIDEOS = 12;
