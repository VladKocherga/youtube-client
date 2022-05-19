import { BorderColor, Days, MILLISECONDS_IN_DAY } from '../constants/constant';
import { Item } from '../interfaces/search-item.model';

export function sortPublishingDate(
  data: Item[],
  sortMultiplier: number
): Item[] {
  return data.sort(
    (a: Item, b: Item): number =>
      sortMultiplier * new Date(a.snippet.publishedAt).valueOf() -
      new Date(b.snippet.publishedAt).valueOf()
  );
}

export function sortViewCount(data: Item[], sortMultiplier: number): Item[] {
  return data.sort(
    (a: Item, b: Item): number =>
      sortMultiplier * (+a.statistics.viewCount - +b.statistics.viewCount)
  );
}

export function generateRandomId(): string {
  return `f${(+new Date()).toString(16)}`;
}

export function generateBorderColor(
  publicationDate: string | undefined
): string {
  const dayAfterPublishing: number =
    (Date.now() - new Date(publicationDate!).valueOf()) / MILLISECONDS_IN_DAY;
  if (dayAfterPublishing <= Days.minDay) {
    return `${BorderColor.blue}`;
  }
  if (dayAfterPublishing <= Days.middleDay) {
    return `${BorderColor.green}`;
  }
  if (dayAfterPublishing >= Days.maxDay) {
    return `${BorderColor.red}`;
  }
  return `${BorderColor.yellow}`;
}
