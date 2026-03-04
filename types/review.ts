export type ReviewShort = {
  id: string
  titel: string
  ingress: string
  score: string
  mainmedia: string
  category: string
  createdAt: string
  updatedAt: string
}

export type ReviewLong = {
  id: string
  titel: string
  ingress: string
  body: string
  score: string
  mainmedia: string
  originalreview: string
  category: string
  createdAt: string
  updatedAt: string
}