import {GET_ANIME, DEL_ANIME, ADD_ANIME, EXT_ANIME} from './types';

export const getAnime = (data) =>{
    return{
        type: GET_ANIME,
        data
    }
}

export const delAnime = id =>{
    return{
        type: DEL_ANIME,
        load: id
    }
}

export const addAnime = () => {
    return{
        type:ADD_ANIME
    }
}

export const extAnime = () => {
    return{
        type:EXT_ANIME
    }
}