import { Item } from '../interfaces/search-item.model';

export function sortPublishingDate(data: Item[], sortMultiplier: number) {
  return data.sort(
    (a: Item, b: Item): number =>
      sortMultiplier * new Date(a.snippet.publishedAt).valueOf() -
      new Date(b.snippet.publishedAt).valueOf()
  );
}

export function sortViewCount(data: Item[], sortMultiplier: number) {
  return data.sort(
    (a: Item, b: Item): number =>
      sortMultiplier * (+a.statistics.viewCount - +b.statistics.viewCount)
  );
}
