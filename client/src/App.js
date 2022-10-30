import { Component } from 'react';
import './App.css'
// import Form from 'react-bootstrap/Form'
import CardList from './components/card-list/card-list.component';
import SearchBar from './components/search-bar/search-bar.component';

class App extends Component {
  constructor(){ // initial value of state 
    super();

    this.state = { // state is always a JSON object
      employees: [],
      searchField: '',
    };
    // console.log('constructor')
  }

  componentDidMount(){
    // console.log('componentDidMount')
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then( users => this.setState(() => {
      return { employees: users };
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
    // console.log('render app.js') 
    const { employees, searchField } = this.state;
    const { searchChange } = this;
    // .filter returns a new array, so the original state of emp is unmodified
    const filteredEmployees = employees.filter((emp) => {
      return emp.name.toLowerCase().includes(searchField)
    })

    return (
      <>
      <div className="App">
        <SearchBar 
          onChangeHandler={searchChange} 
          placeholder='Search Employees' 
          className='search-box'
        />
        {/* because the state of emp is always changing, we map over the current state */}
        <CardList employees={filteredEmployees}/>
      </div>
      </>
    );
  }
  
}

export default App;
