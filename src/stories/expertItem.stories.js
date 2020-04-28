import React from 'react';
import ExpertItem from '../views/atoms/ExpertItem';

export const Default = () => <ExpertItem testid={'default-div'} class={'class-default'} title={'Title default'}/>;
export const WhitoutClass = () => <ExpertItem testid={'without-class-div'} title={'Title without class'}/>;