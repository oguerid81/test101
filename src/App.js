
import './App.css';
import {Component} from "react";
import CardList from "./component/card-list/Card-list.component";
import SearchBoxComponent from "./component/searchBox/searchBox.component";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mon: [],
            searchField:''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(chick =>chick.json() )
            .then(users => this.setState({mon:users}))
    }

    render(){
        const {mon,searchField} = this.state
        const x = mon.filter(monster=>monster.name.toLowerCase().includes(searchField.toLowerCase()))
        const monster = 'enter monster name please'

        return (
            <div className='App'>
                <SearchBoxComponent placeholder={monster} handleChange={event => this.setState({searchField: event.target.value})}/>

                <CardList monstors={x}/>


            </div>
        )
    }
}

export default App;
