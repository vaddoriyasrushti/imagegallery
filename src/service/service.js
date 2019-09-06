import axios from 'axios';


export function fetchallimage(){
    return axios.get('https://jsonplaceholder.typicode.com/photos')
}


export function fetchimages(albumId){
    return axios.get('https://jsonplaceholder.typicode.com/photos/?albumId='+albumId.albumId)
}


