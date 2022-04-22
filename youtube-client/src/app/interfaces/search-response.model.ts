import { Item, PageInfo } from './search-item.model';

export interface IResponse {
  kind: string;
  etag: string;
  pageInfo: PageInfo;
  items: Item[];
}
