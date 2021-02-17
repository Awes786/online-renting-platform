import React,{Component} from 'react';
export class Edititems extends Component {
    const [name, setName] = useState("");
  const [rentprice, setRentprice] = useState("");
  const [date, setDate = useState("");
  const [actualcost, setActualCost] = useState("");
    render(){
        return(
            <div>
                Add Items to be Rented
                <div className="AddItems">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="rentprice">
          <Form.Label>Rent Price</Form.Label>
          <Form.Control
            type="text"
            value={rentprice}
            onChange={(e) => setRentprice(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="date">
          <Form.Label>Manufacture Date</Form.Label>
          <Form.Control
            type="text"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="actualcost">
          <Form.Label>Actual Cost</Form.Label>
          <Form.Control
            type="text"
            value={}
            onChange={(e) => setActualCost(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Add Item
        </Button>
      </Form>
    </div>
            </div>
        )
    }
}