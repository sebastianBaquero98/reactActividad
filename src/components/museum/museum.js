import {useEffect,useState} from 'react';
import MuseumCard from '../museumCard/museumCard';
// COmponenete se conecta a api existente
function Museums(){
const  url = 'https://back-museums-uniandes.herokuapp.com/api/museums';

const [museums, setMuseums] = useState([]);
useEffect(()=>{
fetch(url).then(res=>res.json()).then(museums=>{
    setMuseums(museums);
   
})

})
return(
    //<h1>Hello 2</h1>
    museums.map(m=>
        //console.log(m);
        <MuseumCard key={ m.id } museumCard={ m }/>
)
)


}
export default Museums;