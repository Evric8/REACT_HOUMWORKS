import Component1 from "./components/Component1";

function App() {
  let arrPhoto = [
    {id: 1, url: "https://img.freepik.com/free-photo/assortment-of-colored-plant-leaves_23-2149337926.jpg?size=626&ext=jpg", photo: 'one-photo'},
    {id: 2, url:"https://img.freepik.com/premium-photo/colorful-feathers-in-a-blurred-textured-background_943281-8348.jpg?size=626&ext=jpg&ga=GA1.1.1427825502.1721278232&semt=ais_user", photo: 'two-photo'},
    {id: 3, url: "https://img.freepik.com/free-vector/bokeh-background-design_23-2148452456.jpg?size=626&ext=jpg", photo: 'free-photo'}
  ]

  return (
    <div className="App">
      <Component1 images = {arrPhoto} />
    </div>
  );
}

export default App;
