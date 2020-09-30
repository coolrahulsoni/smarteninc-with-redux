import {Get_Data} from '../types'

const initialState = {
    data:[],
    loading:true
}

export default function(state = initialState, action){

    switch(action.type){

        case Get_Data:
        return {
            ...state,
            data:action.payload,
            loading:false

        }
        default: return state
    }

}