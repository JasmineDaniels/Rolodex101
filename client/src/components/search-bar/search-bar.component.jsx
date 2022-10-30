import { Component } from 'react';
import Form from 'react-bootstrap/Form'

class SearchBar extends Component{
    render(){
        // console.log(this.props)
        return (
            <div>
                <Form.Control 
                    size='lg' 
                    className={this.props.className} 
                    type="search" 
                    placeholder={this.props.placeholder} 
                    onChange={this.props.onChangeHandler} 
                />
            </div>
        )
    }
}

export default SearchBar