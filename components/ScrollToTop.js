import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

class ScrollToTop extends Component {
    render() {
        return this.props.children;
    }

    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0);
        }
    }
}

ScrollToTop.propTypes = {
    children: PropTypes.node.isRequired
};

export default withRouter(ScrollToTop)
