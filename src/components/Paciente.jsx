import dayjs from "dayjs";

const Paciente = ({paciente, setPaciente}) => {

    const {mascota,propietario,email,alta,sintomas} = paciente;

    const generarFecha = f => {
        const fecha = dayjs(f);
        const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        const dias = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
        const dia = dias[fecha.day()];
        const mes = meses[fecha.month()];
        const anio = fecha.year();
        return `${dia}, ${fecha.date()} de ${mes} de ${anio}`;

    }

    return ( 
        <div className='ml-3 mb-2 bg-white shadow-md px-5 py-10 rounded-xl'>
                <p className='font-bold mb-3 text-gray-700 uppercase'>
                    Nombre: {''}  
                    <span className='font-normal normal-case'>{mascota}</span>
                </p>
                <p className='font-bold mb-3 text-gray-700 uppercase'>
                    Propietario: {''}  
                    <span className='font-normal normal-case'>{propietario}</span>
                </p>
                <p className='font-bold mb-3 text-gray-700 uppercase'>
                    Email: {''}  
                    <span className='font-normal normal-case'>{email}</span>
                </p>
                <p className='font-bold mb-3 text-gray-700 uppercase'>
                    Fecha Salida: {''}  
                    <span className='font-normal normal-case'>{generarFecha(alta)}</span>
                </p>

                <p className='font-bold mb-3 text-gray-700 uppercase'>
                    Sintomas: {''}  
                    <span className='font-normal normal-case'>{sintomas}</span>
                </p>

                <div className='mt-2 flex justify-end'>
                    <button 
                        onClick={()=> setPaciente(paciente)}
                    className='bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-md transition-colors'>
                        Editar
                    </button>
                    <button className='bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-md mx-2 transition-colors'>
                        Eliminar
                    </button>
                </div>

            </div>
     );
}
 
export default Paciente;