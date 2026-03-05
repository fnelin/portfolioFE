export type reviewshort = {
    id: string;
    titel: string;
    ingress: string;
    score: number;
    mainmedia: string;
    updatedAt: Date;
    createdAt: Date;
    category: {
        category_name: string;
    };
}

export type ReviewLong = {
  id: string
  titel: string
  ingress: string
  body: string
  score: number
  mainmedia: string
  originalreview: string
  createdAt: Date
  updatedAt: Date
  category: {
    category_name: string;
  };
}