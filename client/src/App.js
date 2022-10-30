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

  searchChange = (e) => {
    const searchField = e.target.value.toLowerCase();
    this.setState(
      () => {
      return { searchField };
      }
    );
  }

  render(){ //telling React what to render
    console.log('render') 
    const { employees, searchField } = this.state;
    const { searchChange } = this;
    // .filter returns a new array, so the original state of emp is unmodified
    const filteredEmployees = employees.filter((emp) => {
      return emp.name.toLowerCase().includes(searchField)
    })

    return (
      <>
      <div className="App">
      <Form.Control 
        size='lg' 
        className='search-box' 
        type="search" 
        placeholder="Search Employees" 
        onChange={searchChange} 
      />
        {/* because the state of emp is always changing, we map over the current state */}
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
