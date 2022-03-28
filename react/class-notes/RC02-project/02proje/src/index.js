import ReactDOM from "react-dom";
import Card from "./components/Card";
import Collapse from "./components/Collapse";
​
function App() {
  return (
​
    <div>
      <div className="card-group">
      <Collapse collapseId = "Ferhat">
      <Card cardTitle='Beşiktaş' cardText='Karakartal' cardImg='https://picsum.photos/id/1/200/300'/>
      </Collapse>
​
      <Collapse collapseId = "Ferhat1">
      <Card cardTitle='Galatasaray' cardText='Karakartal' cardImg='https://picsum.photos/id/10/200/300'/>
      </Collapse>
​
      <Collapse collapseId = "Ferhat2">
      <Card cardTitle='Trabzonspor' cardText='Karakartal' cardImg='https://picsum.photos/id/100/200/300'/>
      </Collapse>
      </div>
    </div>
​
  )
​
}
​
ReactDOM.render(<App />, document.getElementById("root"));