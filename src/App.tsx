function App() {
  const persona = {
    nombre: "Entrena",
    edad: 35,
    direccion: {
      pais: "España",
      ciudad: "Cordoba",
    },
  };

  return (
    <div>
      <code>
        <pre>{JSON.stringify(persona, null, 2)}</pre>
      </code>
    </div>
  );
}

export default App;
