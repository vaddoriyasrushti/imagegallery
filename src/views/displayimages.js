import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FETCH_IMAGES, FETCH_ALL } from '../action/action'
import { selectimages } from '../selectors/images'
import { Row, Col,Icon } from 'antd';
import { Pagination } from 'antd';
import './style.css'
import Imagebox from './imagebox'

class displayimages extends Component {
    componentDidMount() {
        this.props.fetchallimages();
        this.props.fetchimages(1)
    }

    onChange = (current) => {
        this.props.fetchimages(current)
    }

    render() {
        return (
            <div>
                <div className="header" >
                    <div className="container">
                        <div className="header__brand">
                            Gallery
                    </div>
                    </div>
                </div>
                <div className="container">
                    <Pagination defaultCurrent={1} onChange={this.onChange} defaultPageSize={50} pageSize={50} total={this.props.allimages.length} />
                    {this.props.allimages.length > 0 ?
                        <div className="gutter-example">
                            <Row gutter={16} >
                                {this.props.images.map((item, i) => [
                                    <Col className="gutter-row" span={4} key={i}>
                                        <div className="gutter-box" key={i}> <Imagebox item={item}/></div>
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
    console.log(state)
    return {
        images: selectimages(state),
        allimages: state.allimages.allimages
    }
}

function mapDispatchToProps(dispatch) {
    return {
        // fetchPostsIfNeeded: () => dispatch({ type: FETCH_POSTS_IF_NEEDED }),
        // deletePost: (id) => dispatch({ type: DELETE_POST, id }),
        fetchallimages: () => dispatch({ type: FETCH_ALL }),
        fetchimages: (albumId) => dispatch({ type: FETCH_IMAGES, albumId }),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(displayimages)
