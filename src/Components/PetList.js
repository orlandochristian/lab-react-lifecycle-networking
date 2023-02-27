import {useState,useEffect} from "react";



const PetList = ({id}) => {

  const [pets,setAllPets] = useState([])

  useEffect(()=>{
    fetch(`https://vet-app-0obi.onrender.com/api/pets?employeeId=${id}`).then((res)=> res.json()).then((pets)=>{setAllPets(pets);})
  }, [])

  return (
    <aside className="pets-list">
     { pets.length === 0 ? <p>No pets listed for this employee.</p> : <ul> {pets.map((p,i)=> <li key={i}>{p.name}</li> )}</ul>}
    </aside>
  );
};

export default PetList;
