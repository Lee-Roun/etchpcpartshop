import React, { Component } from 'react';
import { Layout } from '../components/Layout';
import { Link } from "react-router-dom";

export default class signup extends Component {
    render() {
        return (
            <Layout>
                <div>
                    <h1>Hello from sign Up</h1>

                </div>
                <Link to="/login" className="btn-primary">
                    회원가입완료
          </Link>
            </Layout>

        )
    }
}