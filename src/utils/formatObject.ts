import { ArticleAtributes } from "../types/types";

export function formatObject(obj: {
  [key: string]: ArticleAtributes[];
}): ArticleAtributes[] {
  let resObj: ArticleAtributes[] = [];
  const objKeys = Object.keys(obj);
  objKeys.forEach((element) => {
    if (obj[element].length !== 0) {
      resObj.push(obj[element][0]);
    }
  });
  return resObj;
}
