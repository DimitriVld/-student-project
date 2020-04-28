import React from 'react';
import Button from '../views/atoms/Button';

export const Default = props => <Button testid={"default-button"} onClick={props.onClick} text={'Default button'}/>;
export const Disabled = props => <Button testid={'disabled-button'} disabled={true} onClick={props.onClick} text={'Disabled button'}/>;