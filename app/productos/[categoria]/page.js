export async function generateMetadata({params, searchParams}, parent){ 
/* 
? Esta funcion desetructura los parametros en un primer parametro y si los ubiese tambien los SearchParams, el segundo parametro PARENT hace referencia al objeto Metadata que se pasa como herencia de las paginas padre.

*/
    return{
        title: `FokiuCode - ${params.categoria}`
    }
}

const Productos = ({params}) => {
    console.log(params);
  return (
    <div>
        Esta viendo: {params.categoria}
    </div>
  )
}

export default Productos