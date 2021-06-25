import React from 'react'
import './directory.styles.css';
import MenuItem from '../menu-item/menu-item.component';
import hats from '../images/hats.png';
import jackets from '../images/jackets.png';
import men from '../images/men.png';
import womens from '../images/womens.png';
import sneakers from '../images/sneakers.png';

class Directory extends React.Component {
    constructor(){
        super();

        this.state = {
            sections: [
               {
                   title: 'hats',
                   id: 1,
                   imageUrl: hats,
                   LinkUrl: 'hats'
               },
               {
                   title: 'jackets',
                   id: 2,
                   imageUrl: jackets,
                   LinkUrl: ''
               },
               {
                   title: 'sneakers',
                   id: 3,
                   imageUrl: sneakers,
                   LinkUrl: ''
               },
               {
                   title: 'womens',
                   id: 4,
                   imageUrl: womens,
                   size: 'large',
                   LinkUrl: ''
               },
               {
                   title: 'mens',
                   id: 5,
                   imageUrl: men,
                   size: 'large',
                   LinkUrl: ''
               },
            ]
        }
    }
    render() {
        return (
                    <div className="directory-menu">
                        {
                            this.state.sections.map(({id, ...otherSections}) => (
                                <MenuItem key={id} {...otherSections} />
                            ))
                        }
                    </div>
                   )
            }
}

export default Directory;