import React from 'react';
import ContentWrapper from './ContentWrapper';
import SideBar from './SideBar';

function Body() {
    return (
    <body> 
   	<div id="wrapper">
      <SideBar/>
      <ContentWrapper />
    </div>
    </body>
    );
}

export default Body;