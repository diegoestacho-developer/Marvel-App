export class Character {
  id: number;
  urls?: Url[];
  name: string;
  modified?: Date;
  thumbnail?: Image;
  description?: string;
  resourceURI?: string;
  comics?: ComicList[];
  events?: EventList[];
  series?: SeriesList[];
  stories?: StoryList[];
  items?: ComicSummary[];

  constructor() {
    this.urls = [];
    this.events = [];
    this.series = [];
    this.comics = [];
    this.stories = [];
  }
}

class Url {
  url: string;
  type: string;
}

class Image {
  path: string;
  extension: string;
}

class ComicList {
  returned: number;
  available: number;
  collectionURI: string;
  items: ComicSummary[];

  constructor() {
    this.items = [];
  }
}

export class ComicSummary {
  names: string;
  resourceURI: string;
}

class StoryList {
  returned: number;
  available: number;
  collectionURI: string;
  items: StorySummary[];
}

class StorySummary {
  name: string;
  type: string;
  resourceURI: string;
}

class EventList {
  returned: number;
  available: number;
  collectionURI: string;
  items: EventSummary[];

  constructor() {
    this.items = [];
  }
}

class EventSummary {
  names: string;
  resourceURI: string;
}

class SeriesList {
  available: number;
  returned: number;
  collectionURI: string;
  items: SeriesSummary[];

  constructor() {
    this.items = [];
  }
}

class SeriesSummary {
  name: string;
  resourceURI: string;
}
