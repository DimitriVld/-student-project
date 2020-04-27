import React from 'react';
import Button from '../views/atoms/Button';

export const Default = props => <Button id={'default-button'} onClick={props.onClick} text={'Default button'}/>;
export const Disabled = props => <Button id={'disabled-button'} disabled={true} onClick={props.onClick} text={'Disabled button'}/>;