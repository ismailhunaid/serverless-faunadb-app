import React,{useState} from 'react';
import DeleteForeverSharpIcon from '@material-ui/icons/DeleteForeverSharp';


const deleteCountry = async (id) => {
    console.log(id)
    await fetch(`/.netlify/functions/deleteCountry`, {
        method: "DELETE",
        body: JSON.stringify(id)
    })
        .then((res) => { res.json() })
        .then((data) => { return data })
        .catch(error => `error :${error}`)
}


const DeleteCountries = (props) => {
    const[currentID,setCurrentID]=useState(null)
   // console.log(props.countries[props.value].ref['@ref'].id)
   console.log(currentID)


    return (
        <div>
            <DeleteForeverSharpIcon onClick={async () => {

                const data = await deleteCountry(props.countries[props.value].ref['@ref'].id)
                setCurrentID(props.countries[props.value].ref['@ref'].id)
            }}>
                

            </DeleteForeverSharpIcon> 
            
        </div>
    )
}







export default DeleteCountries
