import React from 'react';
//Atoms
import TitlePage from '../atoms/TitlePage';

//Datas
import {staticProjects} from '../../constants/staticProjects';

class SingleProjectPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: parseInt(this.props.match.params.id)
        };
    }

    render(){
        const project = staticProjects.find(element => element.id === this.state.id);
        return (
            <div className={'single-project-page container-dft section'}>
                <TitlePage
                    titleFirst={project.title} 
                    titleSecond={project.type}
                />
            </div>
        )
    }
}

export default SingleProjectPage;