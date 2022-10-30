import { Component } from 'react';
import './App.css'
import Form from 'react-bootstrap/Form'
// import Input, { InputGroup } from 'react-bootstrap'

class App extends Component {
  constructor(){ // initial value of state 
    super();

    this.state = { // state is always a JSON object
      employees: [],
      searchField: '',
    };
    console.log('constructor')
  }

  componentDidMount(){
    console.log('componentDidMount')
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then( users => this.setState(() => {
      return { employees: users };
    },
    () => {
      console.log(this.state)
    }))
  }
  render(){ //telling React what to render
    console.log('render') 
    // .filter returns a new array, so the original state of emp is unmodified
    const filteredEmployees = this.state.employees.filter((emp) => {
      return emp.name.toLowerCase().includes(this.state.searchField)
    })

    return (
      <>
      <div className="App">
      <Form.Control 
        size='lg' 
        className='search-box' 
        type="search" 
        placeholder="Search Employees" 
        onChange={(e) => {
          const searchField = e.target.value.toLowerCase();
          this.setState(
            () => {
            return { searchField };
            }
          );
        }} 
      />
        {filteredEmployees.map((emp) => {
          return <div key={emp.id}>
            <h1>{emp.name}</h1>
          </div>
        })}
        
      </div>
      </>
    );
  }
  
}

export default App;
