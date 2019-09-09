import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Icon, Badge, Popover } from 'antd';
import { Pagination } from 'antd';

import { FETCH_IMAGES, FETCH_ALL } from '../../action'
import { selectimages, selectallimages } from '../../selectors/images'
import Imagebox from '../imagebox'
import FavoriteImg from '../favoriteimages'
import './displayimages.css'

class DisplayImages extends Component {
    state={
        current:1
    }
    
    componentDidMount() {
        this.props.fetchallimages();
        this.props.fetchimages(1)
    }

    onChange = (current) => {
        const { fetchimages } = this.props
        fetchimages(current)
        this.setState({
            current:current,
        })
    }

    render() {
        const fvtitem = (
            <FavoriteImg {...this.props} />
        );
        return (
            <div>
                <div className="header" >
                    <div className="container" style={{ display: 'flex' }}>
                        <div className="header__brand">
                            Gallery
                         </div>
                        <div className="like_data">
                            <Popover content={fvtitem} placement="bottomRight" >
                                <Badge count={this.props.fvt.length} >
                                    <Icon type="heart" style={{ fontSize: 25, color: 'red', float: 'right' }} theme="filled" />
                                </Badge>
                            </Popover>
                        </div>

                    </div>
                </div>

                <div className="container">
                    <div>
                        <Pagination defaultCurrent={1} onChange={this.onChange} defaultPageSize={50} pageSize={50} total={this.props.allimages.length} />
                    </div>
                    
                    <br />
                    <h1>Album {this.state.current}</h1>
                    {this.props.allimages.length > 0 ?
                        <div className="gutter-example">
                            <Row gutter={16} >
                                {this.props.images.map((item, i) => [
                                    <Col className="gutter-row" span={3} key={i}>
                                        <div className="gutter-box" key={i}> <Imagebox item={item} /></div>
                                    </Col>
                                ])}
                            </Row>
                        </div> : null}
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        images: selectimages(state),
        allimages: selectallimages(state),
        fvt: state.allimages.fvt,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchallimages: () => dispatch({ type: FETCH_ALL }),
        fetchimages: (albumId) => dispatch({ type: FETCH_IMAGES, albumId }),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayImages)
