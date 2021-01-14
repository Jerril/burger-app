import React, { Component } from 'react';
import Aux from '../Auxilliary/Auxilliary';
import Modal from '../../../UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component{
        state = {
            error: null
        }

        closeErrorModalHandler = () => {
            this.setState({error: null})
        }

        UNSAFE_componentWillMount(){
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({error: null});
                return req;
            });

            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({error: error});
            });
        }

        UNSAFE_componentWillUnMount(){
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        render(){
            return(
                <Aux>
                    <Modal show={this.state.error} closeModal={this.closeErrorModalHandler}>{this.state.error?this.state.error.message:null}</Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            );
        }
    }
}

export default withErrorHandler;