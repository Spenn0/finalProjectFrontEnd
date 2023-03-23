import axios from 'axios';
import { ArtArray } from '../models/ArtArray';
import { ArtPiece } from '../models/ArtPiece';




export function GetArtData(){
    let request = axios.get<ArtArray[]>('https://api.artic.edu/api/v1/artworks/search?&is_public_domain=true&limit=100')
    .then(response => response.data)
    .catch(error => {
    console.log(error);
    alert('Authentication failed')
 })
  return request
}
export function GetSpecificArtData(number: number){
  let request = axios.get<ArtPiece>('https://api.artic.edu/api/v1/artworks/' + number)
  .then(response => response.data)
  .catch(error => {
  console.log(error);
  alert('Authentication failed')
})
return request
}
