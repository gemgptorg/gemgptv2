import React , {useState} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// import { Modal } from "react-bootstrap";
import './styles.scss'

SliderItem.propTypes = {
    item : PropTypes.object,
};

function SliderItem(props) {
    const {item} = props;

    const [isOpen, setOpen] = useState(false)

    // const [modalShow, setModalShow] = useState(false);

    return (
        <div className={`box-slider ${item.classAction}`}>
            <img className='bg-slider' src={item.bgImg} alt="cybox" />
            <div className="box-slider__main">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-md-12">
                            <div className="content-box">
                                <h1 className="title">{item.title}</h1>
                                <p className="sub-title">{item.desc}</p>
                                <div className="wrap-btn">
                                    
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-12">
                            <div className="image">
                                <img src={item.img} alt="cybox" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


           
        </div>
    );
}

export default SliderItem;