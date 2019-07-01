import axios from '../axios/axios-card'
import { fetchStart, fetchFailure, fetchSuccess } from "../actions/action";

export const fetchProducts = () => async (dispatch, getState) =>  {

    console.log('start')

    try{
        dispatch(fetchStart())

        const data =  await axios.get(`/books`)

        const newProducts = data.data

        dispatch(
            fetchSuccess(newProducts)
        )

    } catch(e){
        dispatch(fetchFailure(e))
    }
}
