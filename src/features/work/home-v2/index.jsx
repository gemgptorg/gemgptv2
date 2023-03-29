import React, { useState } from 'react';
import PropTypes from 'prop-types';

import WorkItem from '../work-item';

Work.propTypes = {
    data: PropTypes.array,
};

function Work(props) {

    const {data} = props;

    const [dataBlock] = useState({
        subtitle: 'Problems and',
        title: 'OUR SOLUTIONS',
        desc: 'The cryptocurrency market is highly volatile, and making accurate predictions can be challenging. Traditional research methods may not be sufficient in this rapidly evolving and complex market. Furthermore, the data available is often inconsistent and incomplete, making it difficult to draw meaningful conclusions.'
    })
    return (
        <section className="tf-section how-we-work">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-md-12">
                        <div className="tf-title st2 mb-60" data-aos="fade-up" data-aos-duration="800">
                            <p className="h8 sub-title">{dataBlock.subtitle}</p>
                            <h4 className="title m-b17">{dataBlock.title}</h4>
                            <p>{dataBlock.desc}</p>
                        </div>
                    
                    </div>

                    <div className="col-xl-7 col-md-12" >
                        <div className="row pl-70">
                            {
                                data.map(item => (
                                    <div key={item.id} className="col-md-6">
                                        <WorkItem key={item.id} item={item} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    
                </div>
            </div>
        </section>
    );
}

export default Work;