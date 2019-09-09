import React from 'react';
import { connect } from 'react-redux'

import { REMOVE_FVT } from '../../action'
import './favoriteimages.css'


const FvtImages = (props) => {
    const removeitem=(item)=>{
        props.removefromfvt(item)
    }

    return (
        <div className="fvthoveritem">
            <div><b>Favorites</b></div><hr />
            {
                props.fvt.length === 0 ?
                    <div className="emptyfvt">No any favorite items</div>
                    :
                    <div>
                        <div className="cartcontent">
                            {props.fvt.map((item, i) => [
                                <div key={i} className="flexcss">
                                    <div><img className="img-border" alt="course symbol" src={item.thumbnailUrl} height='50px' width='50px'></img></div>
                                    <div className="set-fvtdetail">
                                        <div className="item-description">{item.title}</div>
                                        <div className="remove" onClick={removeitem.bind(this,item)}>remove</div>
                                    </div>
                                </div>,
                                <br key={`${i}_`}/>
                                
                            ])}
                        </div>
                       
                    </div>
            }
        </div>
    );

}

const mapStateToProps = (state) => {
    return (
        {
           fvt: state.allimages.fvt,
        }
    );
}
function mapDispatchToProps(dispatch) {
    return {
        removefromfvt: (data) => dispatch({ type: REMOVE_FVT, data })

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FvtImages);