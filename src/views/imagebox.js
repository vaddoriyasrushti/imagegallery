import React,{useState, useEffect} from 'react'
import { connect } from 'react-redux';
import { ADD_TO_FVT, REMOVE_FVT } from '../action/action'
import { Modal,Icon } from 'antd';
import './model.css'
const imagebox = (props) => {
    const [visible, setVisible] = useState(false);
    const [fvt,setfvt]=useState(false)
    // const [fvtlist,setfvtlist]=useState([])
    const showModal = () => {
        setVisible(true)
    };

    const addtofavorite=()=>{
        if(fvt){
            setfvt(false)
            props.removefromfvt(props)
        }
        else{
            setfvt(true)
            props.addtofvt(props)
        }
        
    }
    const handleCancel = e => {
        setVisible(false)
    };

    return (
        <div>
            <div>
                <img src={props.item.thumbnailUrl} onClick={showModal}/>
                <br/>
                {fvt ? <Icon type="heart" style={{fontSize:25,color:'red'}} theme="filled" onClick={addtofavorite}/>:<Icon style={{fontSize:25}} type="heart" onClick={addtofavorite} />}
            </div>
            <Modal
                title={props.item.title}
                visible={visible}
                onCancel={handleCancel}
                footer={null}
            >
                <img src={props.item.url} />
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
        removefromfvt :(data)=>dispatch({type:REMOVE_FVT,data})

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(imagebox)

