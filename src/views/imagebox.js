import React, { useState } from 'react'
import { connect } from 'react-redux';
import { ADD_TO_FVT, REMOVE_FVT } from '../action/action'
import { Modal, Icon } from 'antd';

import './style/imagebox.css'

const imagebox = (props) => {
    const [visible, setVisible] = useState(false);
    const [fvt, setfvt] = useState(false)
    const showModal = () => {
        setVisible(true)
    };

    const addtofavorite = () => {
        if (fvt) {
            setfvt(false)
            props.removefromfvt(props.item)
        }
        else {
            setfvt(true)
            props.addtofvt(props.item)
        }

    }
    const handleCancel = e => {
        setVisible(false)
    };

    return (
        <div>
            <div className="img_wrap">
                <img className="grow" src={props.item.thumbnailUrl} alt="color images" onClick={showModal} />
                {props.fvtlist.some(el => el.id === props.item.id) ? <Icon className="like" type="heart" style={{ fontSize: 25, color: 'red' }} theme="filled" onClick={addtofavorite} /> : <Icon className="like" style={{ fontSize: 25 }} type="heart" onClick={addtofavorite} />}
            </div>
            <Modal
                title={props.item.title}
                visible={visible}
                onCancel={handleCancel}
                footer={null}
            >
                 <div className="img_wrap">
                <img  src={props.item.url} alt="color images"/>
                {props.fvtlist.some(el => el.id === props.item.id) ? <Icon className="like-select" type="heart" style={{ fontSize: 25, color: 'red' }} theme="filled" onClick={addtofavorite} /> : <Icon className="like-select" style={{ fontSize: 25 }} type="heart" onClick={addtofavorite} />}
            </div>
                {/* <img alt="selected color" src={props.item.url} /> */}
            </Modal>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        fvtlist: state.allimages.fvt
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addtofvt: (data) => dispatch({ type: ADD_TO_FVT, data }),
        removefromfvt: (data) => dispatch({ type: REMOVE_FVT, data })

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(imagebox)

