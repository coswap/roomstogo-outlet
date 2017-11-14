export class Detail {
  routerUrl: string;
  content: DetailContent;
}

export class DetailContent {
  title: string;
  details: Array<string>;
  images: Array<Image>;
}

export class Image {
  url: string;
  alt: string;
  title: string;
}
