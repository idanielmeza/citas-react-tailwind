import Header from "./components/Header";
import Form from "./components/Form";
import List from "./components/List";
import {useState, useEffect} from "react";

const App = () => {

  const [pacientes, setPacientes] = useState([]);
  const [paciente,setPaciente] = useState(null);

  useEffect(()=>{
    const data = JSON.parse(localStorage.getItem('pacientes'));
    if(data){
      setPacientes(data);
    }
  },[])

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  },[pacientes]);

  return ( 
    <div className='container mx-auto mt-10'>
      <Header />
      <div className='md:flex mt-12'>
        <Form 
          paciente={paciente}
          setPaciente={setPaciente}
          setPacientes={setPacientes}
        />
        <List 
          setPaciente={setPaciente}
          pacientes={pacientes}
          setPacientes={setPacientes}
        />
      </div>
      
    </div>
   );
}
 
export default App;