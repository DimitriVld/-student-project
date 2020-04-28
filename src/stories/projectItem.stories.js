import React from 'react';
import ProjectItem from '../views/atoms/ProjectItem';

export const Default = () => <ProjectItem testid={"default-item"} class={'with-class'}/>;
export const WithoutClass = () => <ProjectItem testid={"without-class-item"}/>;