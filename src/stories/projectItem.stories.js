import React from 'react';
import ProjectItem from '../views/atoms/ProjectItem';

export const Default = () => <ProjectItem testid={"default-item"} class={'with-class'} text={'Default item'}/>;
export const WithoutClass = () => <ProjectItem testid={"without-class-item"} class={'without-class'} text={'With out class item'}/>;