
import React, { Component } from "react";
import { Redirect } from "react-router-dom";

const WithAuth = (ComponentToProtect, user, token) =>{
    return class extends React.Component{
        constructor(){
            super();
            this.state={
                loading: true,
                redirect: false,
            }
        }
        componentDidMount(){
            fetch('http://localhost:8000/checkToken',{
                method: 'POST',
                headers: {
                    'Content-type' : 'application/json'
                },
                body: JSON.stringify({
                    token: token
                })
            })
            .then(res =>{
                if (res.status === 200) {
                    this.setState({loading: false})
                } else{
                    throw new Error (res.error)
                }
            })
            .catch(err => {
                console.log(err);
                this.setState({loading:false, redirect:true})
            })
        }
        render(){
            const {loading, redirect}= this.state;
            if (loading) {
                return null
            }
            if (redirect) {
                return <Redirect to='/'/>
            }
            return <ComponentToProtect {...this.props} user={user}/>
        }
    }
}

export default WithAuth