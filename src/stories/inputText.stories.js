import React from 'react';
import InputText from '../views/atoms/InputText';

export const Default = () => <InputText testid={"default-input"} placeholder={'Default input'}/>;
export const ReadOnly = () => <InputText testid={"read-only-input"} placeholder={'Read only input'} readOnly={true}/>;