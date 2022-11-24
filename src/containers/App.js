import React, { Component } from 'react'
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
// import { robots } from './data/robots';
import './App.css';
import Scroll from '../components/Scroll';


class App extends Component  {
    constructor () {
        super()
        this.state ={
            robots :[] ,
            searchfield :''
        }
    }

    //ComponentDidMount return a api od users

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots :users}))
    }

    onSearchChange = (event)=> {
        this.setState ({searchfield :event.target.value});
    }
    
    render() {

        const {robots,searchfield} = this.state ;
        const filteredrobot = robots.filter(robot=> {
            return robot.name.toLocaleLowerCase().includes(searchfield)
        })

        return !robots.length 
            ?
                <h1>Loading</h1>
            :
            (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <Searchbox searchChange={this.onSearchChange} />
                    <Scroll>
                     <CardList robots={filteredrobot}/>
                    </Scroll>
                </div>
            )

    }

}

export default App;
