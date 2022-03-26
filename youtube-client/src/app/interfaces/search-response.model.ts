import { Item, PageInfo } from './search-item.model';

export interface Response {
  kind: string;
  etag: string;
  pageInfo: PageInfo;
  items: Item[];
}
