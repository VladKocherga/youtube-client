export interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}

export interface Item {
  kind: string;
  etag: string;
  id: IID;
  snippet: ISnippet;
  statistics: IStatistics;
}

export interface IID {
  kind: string;
  videoId: string;
}

export interface ISnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: IThumbnails;
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  localized: ILocalized;
  defaultAudioLanguage: string;
}

export interface IThumbnails {
  default: IThumbnailsItem;
  medium: IThumbnailsItem;
  high: IThumbnailsItem;
  standard: IThumbnailsItem;
  maxres: IThumbnailsItem;
}

export interface IThumbnailsItem {
  url: string;
  width: number;
  height: number;
}

export interface ILocalized {
  title: string;
  description: string;
}

export interface IStatistics {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
}
