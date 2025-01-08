// import { useEffect, useState } from "react";

// const App = () => {

// const [usuarios, setUsuarios] = useState(['Pablo', 'Jose', 'Manoel']);

//   // demonstração do ciclo de vida 
//   useEffect(() => {
//     setTimeout(() => {
//       setUsuarios([...usuarios, 'Ismael'])
//     }, 3000)
//   }, [])

//   return (
//     <div className="app">
//       <h1>ola</h1>
//       {usuarios.map((item) => (
//         <p>{item}</p>
//       ))}
//     </div>
//   );
// }

// export default App;

import { useEffect, useState } from "react";

const App = () => {
  const [usuario, setUsuario] = useState('');
  const [usuarios, setUsuarios] = useState(['Pablo', 'Jose', 'Manoel']);

  const handleAddUser = () => {
    setUsuarios([...usuarios, usuario]);
    setUsuario('');
  };

  console.log('renderizou');

  return (
    <div className="app">
      <h1>ola</h1>
      <div>
        <input
        value={usuario} 
        onChange={(event) => 
        setUsuario(event.target.value)} />
        <button onClick={handleAddUser}>Adicionar</button>
      </div>
      <hr />
      {usuarios.map((item) => (
        <p>{item}</p>
      ))}
    </div>
  );
}

export default App;

