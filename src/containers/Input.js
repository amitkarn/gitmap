import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import InputComponent from "../components/InputComponent";
import {requestUsers} from "../actions";

class Input extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <InputComponent onSearchKeywordChange={(text) => this.startSearchRequest(text)}/>
        );
    }

    startSearchRequest(text) {
        if (text && text.trim() != "")
            this.props.onSearchKeywordChange(text);
    }

}


const mapDispatchToProps = (dispatch) => {
    return {
        onSearchKeywordChange: bindActionCreators(requestUsers, dispatch),
    };
}

export default connect(null, mapDispatchToProps)(Input);
