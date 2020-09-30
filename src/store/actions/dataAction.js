import {Get_Data, Data_ERROR} from '../types'
import axios from 'axios'

export const fetchData = () => async dispatch => {
    
    try{
        const res = await axios.get(`http://www.json-generator.com/api/json/get/bUPzMCOtgy?indent=2`)      
        dispatch( {
            type: Get_Data,
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            type: Data_ERROR,
            payload: console.log(e),
        })
    }

}
