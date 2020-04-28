import React from 'react';

class ContactPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render(){
        return (
            <img data-testid={this.props.testid} className='map-atom' src='./img/map.png' alt='img map' />
        )
    }
}

export default ContactPage;