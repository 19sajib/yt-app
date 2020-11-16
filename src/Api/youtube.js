import axios from 'axios';

const KEY = 'AIzaSyCxvlFw4alnEUEp04Ty0mb-Ooj_S57fcps'


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
    }
})
