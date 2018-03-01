import * as React from 'react'

import { Card, Icon, Avatar } from 'antd'

import User from 'model/User'
import Loader from 'components/common/Loader'

import Container from './UserContainer'


export interface Props {
    loading?: boolean
    error?: boolean
    user?: User
}

class UserComponent extends React.PureComponent<Props, {}> {
    render() {
        const { user, loading, error } = this.props

        return (
            <React.Fragment>
                <Card>
                    <Loader loading={loading || !user} error={error}>
                        {!!user && <Card.Meta title={user && user.email} />}
                    </Loader>
                </Card>
            </React.Fragment>
        )
    }
}

export default Container(UserComponent)