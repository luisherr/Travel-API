import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'


export const getPlacesData = async (sw, ne) => {
    try {
        const { data: { data }} = await axios.get(URL, {
            params: {
                bl_latitude: sw.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
                tr_latitude: ne.lat,
            },
            headers: {
                'X-RapidAPI-Key': '8cb7509100msh324e9baff1b2424p1725a2jsnbe53ea59bf3a',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
         }); 
    
        return data;
    } catch (error) {
        console.log(error);
    }
}
