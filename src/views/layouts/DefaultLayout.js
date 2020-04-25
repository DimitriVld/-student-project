import React from 'react';
import Header from '../partials/Header';
import Footer from '../partials/Footer';

const DefaultLayout = (props) => {
    return (
        <div className={"default-layout"}>
            <Header />
            <main className={"main-content"}>{props.page}</main>
            <Footer page={props.name ? props.name : ''}/>
        </div>
    );
}

export default DefaultLayout;