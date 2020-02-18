import React, { Component } from 'react';
import './form.css';

export default class Form extends Component {

    state = {
        label: ''
    }

    onChangeCity = (e) => {
        this.setState({
            label: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.getCity(this.state.label);
    }

    render() {

        return (
            <div className="form__group field" >
                <form className="d-flex" onSubmit={this.onSubmit}>
                    <input required="" onChange={this.onChangeCity} type="input" className="form__field" />
                    <label className="form__label">
                        <i className="fas fa-map-marker-alt"></i> Enter a city name
                     </label>
                    <button type="submit" className="btn btn-outline-light ml-2">
                        <i className="fas fa-arrow-circle-right"></i>
                    </button>
                </form>
            </div>
        );
    };
};
