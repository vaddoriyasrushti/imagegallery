import React from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux'
import './favoriteimages.css'


const Fvtimages = (props) => {

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
                                    <div><img className="img-border" alt="course symbol" src={item.thumbnailUrl}></img></div>
                                    <div className="set-fvtdetail">
                                        <div className="item-description">{item.title}</div>
                                    </div>
                                </div>,
                                <hr key={`${i}_`} />
                            ])}
                        </div>
                        <div className="footerfvt">
                            <Button type="primary" >View Favorites</Button>
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

export default connect(mapStateToProps, null)(Fvtimages);