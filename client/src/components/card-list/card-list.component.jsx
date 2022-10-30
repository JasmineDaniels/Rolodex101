import { Component } from "react";

class CardList extends Component {

    render(){
        // console.log(this.props.employees)
        // console.log(`CardList Render`)
        const { employees } = this.props
        return (
            <div>
                {employees.map((emp) => (
                    <h1 key={emp.id}>{emp.name}</h1>
                ))}
            </div>
        )
    }
}

export default CardList;