export interface PageProps<T> {
  status: number;
  data: { transformedData: { [key: string]: T[] } };
  popularLabels: [{ [key: string]: number }];
  error?: string;
}

export interface ArticleAtributes {
  Title: string;
  Tag: string;
  Article: string;
  Writter: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  imgUrl: string;
}

export interface SubPostProps {
  tag: string;
  transformedData: ArticleAtributes[];
}

export interface PopularLabelsProps {
  popularLabels: { [key: string]: number };
}

export interface AxiosResponsData<T> {
  id: number;
  attributes: T;
}
