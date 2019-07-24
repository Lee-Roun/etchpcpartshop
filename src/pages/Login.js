import React, { Component } from 'react';
import { Layout } from '../components/Layout';
import { Link } from "react-router-dom";

export default class Login extends Component {
    render() {
        return (
            <Layout>
                <div>
                    <h1>Hello from login</h1>
                </div>
                <Link to="/signup" className="btn-primary">
                    회원 가입
          </Link>
            </Layout>

        )
    }
}
