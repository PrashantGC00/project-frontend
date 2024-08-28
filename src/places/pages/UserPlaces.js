import React from "react";
import {useParams} from 'react-router-dom'

import PlaceList from "../components/PlaceList";

const PLACES = [
    {
        id: 'p1',
        title:'Empire State Building',
        description: 'Famous Landmark',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_Cropped.jpg/320px-View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_Cropped.jpg',
        address: 'New York',
        location:{
            lat:40.7484405,
            lng:-73.9882393
        },
        userID:'u1'
    },

    {
        id:'p2',
        title:'Dharahara Tower',
        description: 'Famous Landmark',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/DHARAHARA_TOWER.jpg/800px-DHARAHARA_TOWER.jpg',
        address: 'Sundhara Rd, Kathmandu 44600',
        location:{
            lat:27.6999968 ,
            lng:85.3124161
        },
        userID:'u2'
    }
]

const UserPlaces = props =>{

    const uid = useParams().uID;
    const loadedPlaces = PLACES.filter(places => places.userID === uid)
    return(
        
        <PlaceList items={loadedPlaces} />
    )
}

export default UserPlaces