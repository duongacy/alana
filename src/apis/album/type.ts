export type Category = {
  id: number
  name: string
  description: string
  type: string
}

export type Thumbnail = {
  name: string
  hash: string
  ext: string
  mime: string
  path: null
  width: number
  height: number
  size: number
  sizeInBytes: number
  url: string
}
export type Media = {
  id: number
  name: string
  alternativeText?: string
  caption?: string
  width: number
  height: number
  formats?: {
    thumbnail: Thumbnail
  }
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl?: string
  provider: string
  provider_metadata?: string
  createdAt: string
  updatedAt: string
}

export type Album = {
  id: number
  name: string
  description: string
  category: Category
  cover: Media
  medias: Media[]
}
