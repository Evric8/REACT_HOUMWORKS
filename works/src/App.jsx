import Card from "./card/Card";
import Body from "./card/Body";
import Title from "./card/Title";
import Text from "./card/Text";

function App() {
  return (
    <div className="App">
      <br/>
      <div className="container">
        <Card>
          <Card.Body>
            <Card.Title>Title</Card.Title>
            <Card.Text>Text</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

Card.Body = Body;
Card.Title = Title;
Card.Text = Text;

export default App;
