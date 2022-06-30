import Paciente from './Paciente';

const List = ({pacientes, setPaciente}) => {


    return ( 
        <div className='md:w-1/2 lg:w-3/5 sm:mt-5 md:mt-0'>
            <h2 className='font-bold text-3xl text-center'>
                {pacientes.length > 0 ? 'Pacientes' : 'No hay pacientes'}
            </h2>
            <p className=' mt-5 mb-10 text-center'>
                Administra tus {''}
                <span className='text-indigo-600 font-bold'>Pacientes y Citas</span>
            </p>

            <div className='md:h-screen overflow-y-scroll mb-5 transition-all'>
                {pacientes.map(paciente => (
                    <Paciente
                        key={paciente.id}
                        paciente={paciente}
                        setPaciente={setPaciente}
                    />
                ))}
            </div>

            
            
        </div>
     );
}
 
export default List;