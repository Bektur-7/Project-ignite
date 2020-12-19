import Axios from "axios"
import { gameDetailsURL, gameScreenShotURL } from "../api"



export const loadDetail = (id) => async (dispatch) => {

    dispatch({
        type: "LOADING"
    })

    const detailData = await Axios.get(gameDetailsURL(id));
    const screenShotData = await Axios.get(gameScreenShotURL(id));

    dispatch({
        type: "GET_DETAIL",
        payload: {
            game: detailData.data,
            screen: screenShotData.data
        }
    })
};

