import React from 'react';
import ListItem from '../views/atoms/ListItem';

export const Default = () => <ListItem testid={"default-item"} class={'with-class'} text={'Default item'}/>;
export const WithoutClass = () => <ListItem testid={"without-class-item"} class={'without-class'} text={'With out class item'}/>;