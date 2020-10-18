import React from 'react';
import propTypes from 'prop-types';

function Section({title, children}) {
    return(
        <section>
            <h2>{title}</h2>
            {children}
        </section>
    )
}

Section.propTypes = {
    title: propTypes.string,
    children: propTypes.node.isRequired 
}
export default Section;