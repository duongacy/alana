import type { Album } from './type'

export const getAllAlbums = () => {
  return fetch('http://localhost:1337/api/albums?populate=deep').then(async (rs) => {
    return (await rs.json()) as Album[]
  })
}
export const getAlbumById = (id: string) => {
  return fetch(`http://localhost:1337/api/albums/${id}?populate=deep`).then(async (rs) => {
    return (await rs.json()) as Album
  })
}
