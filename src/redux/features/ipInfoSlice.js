import { createSlice } from '@reduxjs/toolkit';
// import { getLocation } from '../../services/services';

const ipify = 'at_zjiWwGCCbVPhPRR7haXA3yvgVnUfR';

export function getIPLocation(param) {
    return function (dispatch) {
        dispatch(fetchInfoStart());
        return fetch(`https://geo.ipify.org/api/v1?apiKey=${ipify}&${param}`)
            .then(response => {
                // if (!response.ok) {
                //     throw Error(response.statusText);
                // }
                return response.json();
            })
            .then(json => {
                dispatch(fetchInfoSuccess(json))
            })
            // .catch(error => dispatch(fetchInfoFailure(error.message)));
    }
}

// async function getIP(){
//     const response = await fetch('http://api.ipify.org/?format=json');
//     const data = await response.json();
//     return data;
// }

export function getIP(){
    return function (dispatch) {
        return fetch(`http://api.ipify.org/?format=json`)
        .then(response => {
            return response.json();
        })
        .then(json => {
            const param = `ipAddress=${json.ip}`
            dispatch(getIPLocation(param))
        })
    }
}


const ipInfoSlice = createSlice({
    name: 'ipInfo',
    initialState: {
        info: {}
    },
    reducers: { 
        // fetchInfoFailure: (state, action) => {
        //     console.log(action);
        //     state.error = action.payload;
        // },
        fetchInfoStart: state => {
            state.info = {};
        },
        fetchInfoSuccess: (state, action) => {
            state.info = action.payload;
        }
    }
});


export const { fetchInfoStart, fetchInfoFailure, fetchInfoSuccess } = ipInfoSlice.actions;

export default ipInfoSlice.reducer;