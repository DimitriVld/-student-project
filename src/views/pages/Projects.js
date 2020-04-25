import React from 'react';

//Atoms
import TitlePage from '../atoms/TitlePage';
import ProjectItem from '../atoms/ProjectItem';

//Datas
import {staticProjects} from '../../constants/staticProjects';

const ProjectsPage = () => {
    return(
        <div className={'projects-page section container-dft'}>
            {/*
                # Title Page component 
                # Contain Title
                # contentText (facultative)
            */}
            <TitlePage 
                titleFirst={'Nos'} 
                titleSecond={'Projets'}
            />

            <div className="projects">
                {staticProjects.map( item => {
                    return(
                        <ProjectItem 
                            key = {item.id}
                            id = {item.id}
                            img = {item.img}
                            title = {item.title}
                            type = {item.type}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default ProjectsPage;