import {useState, useEffect} from 'react';

const Form = ({setPacientes, paciente, setPaciente}) => {


    const [form, setForm] = useState({
        mascota: '',
        propietario: '',
        alta: '',
        email: '',
        sintomas: '',
        id: crypto.randomUUID()
    });

    const [editar, setEditar] = useState(false);


    const [error,setError] = useState(false);
    const [agregado, setAgregado] = useState(false);

    const { mascota, propietario, alta, email, sintomas } = form;

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        if([ mascota, propietario, alta, email, sintomas ].includes('')) {
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 3000);
            return;
        }

        if(!editar) {
            setPacientes(prevPacientes => [form, ...prevPacientes,]);
        }else{
            setPacientes(prevPacientes => prevPacientes.map(pac => pac.id === form.id ? form : pac));
        }

        
        
        setAgregado(true);
        setTimeout(() => {
            setAgregado(false);
        }, 2000);

        setForm({
            mascota: '',
            propietario: '',
            alta: '',
            email: '',
            sintomas: ''
        });

        setEditar(false);
        setPaciente(null);
    }

    useEffect(() => {
        if(paciente) {
            setEditar(true);
            setForm(paciente);
        }
    }, [paciente]);

    return ( 
        <div className='md:w-1/2 lg:w-2/5'>
            <h2 className='text-center font-black text-3xl'>Seguimiento Pacientes</h2>

            <p className='mt-5 text-center mb-10'>
                Añade Pacientes y {""}
                <span className='text-indigo-600 font-bold'>administralos</span>
            </p>

            <form 
                onSubmit={handleSubmit}
            className='bg-white shadow-md rounded-lg py-10 px-5'>
                
                {error &&
                    <div className='bg-red-700 text-center text-white uppercase font-bold rounded-md p-2 mx-auto mb-5'>
                        <p>Todos los campos son obligatorios</p>
                    </div>
                }

                {agregado &&
                    <div className='bg-green-700 text-center text-white uppercase font-bold rounded-md p-2 mx-auto mb-5'>
                        <p>El paciente ha sido {editar ? 'editado' : 'agregado'} correctamente.</p>
                    </div>
                }

                <div className='mb-5'>
                    <label htmlFor='mascota' className='block text-grey-700 font-bold uppercase'>Nombre Mascota</label>
                    <input
                        value={mascota}
                        onChange={handleChange}
                    id='mascota' name='mascota' type='text' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' placeholder='Nombre de la mascota'/>
                </div>

                <div className='mb-5'>
                    <label htmlFor='propietario' className='block text-grey-700 font-bold uppercase'>Nombre propietario</label>
                    <input
                        value={propietario}
                        onChange={handleChange}
                    id='propietario' name='propietario' type='text' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' placeholder='Nombre de la propietario'/>
                </div>
                
                <div className='mb-5'>
                    <label htmlFor='email' className='block text-grey-700 font-bold uppercase'>Correo</label>
                    <input
                        value={email}
                        onChange={handleChange}
                    id='email' name='email' type='email' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' placeholder='Email'/>
                </div>

                <div className='mb-5'>
                    <label htmlFor='alta' className='block text-grey-700 font-bold uppercase'>Fecha de salida</label>
                    <input
                        value={alta}
                        onChange={handleChange}
                    id='alta' name='alta' type='date' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'/>
                </div>

                <div className='mb-5'>
                    <label htmlFor='sintomas' className='block text-grey-700 font-bold uppercase'>Sintomas</label>
                    <textarea
                        value={sintomas}
                        onChange={handleChange}
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md resize-none'
                    placeholder='Sintomas'
                    id='sintomas' name='sintomas' />
                </div>

                <input type='submit'
                className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all rounded-md shadow-sm'
                    value={editar ? 'Editar Paciente' : 'Agregar Paciente'}
                />

            </form>

        </div>
     );
}
 
export default Form;