import React,{useState, useEffect} from 'react'
import { Modal,Icon } from 'antd';
import './model.css'
const imagebox = (props) => {
    const [visible, setVisible] = useState(false);
    const [fvt,setfvt]=useState(false)
    const [fvtlist,setfvtlist]=useState([])
    const showModal = () => {
        setVisible(true)
    };

    const addtofavorite=()=>{
        console.log("props",props)
        if(fvt){
            console.log("truebox")
            setfvt(false)
            var x=fvtlist.filter(item => item.id === props.item.id)
            console.log(x)
            setfvtlist(x);
            console.log("list from true",fvtlist)


        }
        else{
            console.log("falsebox")
            setfvt(true)
            // setfvtlist([...fvtlist, props.item.id])
            setfvtlist(fvtlist.concat(props.item.id))
            console.log("list from false",fvtlist)

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
export default imagebox