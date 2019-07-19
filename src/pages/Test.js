import React, { Component } from 'react'

export default class Test extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        fetch('https://swapi.co/api/films/')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                })
            });
    }

    render() {

        var { isLoaded, items } = this.state;
        
        if(!isLoaded) {
            return <div>Loading...</div>
        }
        else {
            return (
                <div className="App">
                    {items.map(item => (
                            <p key={item.episode_id}>
                                Title: {item.title}
                            </p>
                        ))};
                </div>
            )
        }
    }
}
