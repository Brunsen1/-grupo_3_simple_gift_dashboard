import React from 'react';
import PageHeading from './PageContent/PageHeading'
import ContentRowOne from './PageContent/ContentRowOne'
import ContentRowTwo from './PageContent/ContentRowTwo'

function PageContent() {
    return (
        <div className="container-fluid">
         <PageHeading/>
         <ContentRowOne/>
         <ContentRowTwo/>
        </div>
    );
}

export default PageContent;

