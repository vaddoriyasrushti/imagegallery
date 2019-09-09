import axios from 'axios';
import baseUrl from './baseUrl'

export function fetchallimage(){
    return axios.get(`${baseUrl}/`)
}

export function fetchimages(albumId){
    return axios.get(`${baseUrl}/?albumId=${albumId.albumId}`)
}


