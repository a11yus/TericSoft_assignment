import { GET_SPORTS_DATA } from "./actionTypes";

export const getData = (data) => async (dispatch) => {
    try {
        let d = await fetch(`https://featured-sports-server.herokuapp.com${data}`)
        d = await d.json();
        // console.log(d);
        dispatch ({
            type: GET_SPORTS_DATA,
            payload: d
        })
    }
    catch (e) {
        console.log(e);
    }
}