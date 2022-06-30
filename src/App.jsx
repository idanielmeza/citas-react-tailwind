import Header from "./components/Header";
import Form from "./components/Form";
import List from "./components/List";
import {useState} from "react";

const App = () => {

  const [pacientes, setPacientes] = useState([]);
  const [paciente,setPaciente] = useState(null);

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
        />
      </div>
      
    </div>
   );
}
 
export default App;