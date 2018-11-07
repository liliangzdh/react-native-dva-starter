import React, { Component } from 'react'
import { StyleSheet, View, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'

import { Button } from '../components'

// import { createAction, NavigationActions } from '../utils'

@connect(({ app }) => ({ ...app }))
class Login extends Component {
  static navigationOptions = {
    title: 'Login',
  }

  componentDidMount() {
    console.log(this)
  }

  onLogin = () => {
    if (this.props.login) {
      return
    }
    // this.props.dispatch(createAction("app/login")())

    const srv = () =>
      this.props.dispatch({
        type: 'app/login',
        payload: {
          key: '12',
          value: '12',
        },
      })

    srv().then(r => {
      console.log(r)
    })
  }

  // onClose = () => {
  //   this.props.dispatch(NavigationActions.back())
  // }

  render() {
    const { fetching, login } = this.props

    console.log(this.props)
    return (
      <View style={styles.container}>
        {fetching ? (
          <View
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              top: '60%',
            }}
          >
            <ActivityIndicator />
          </View>
        ) : null}
        <Button text={login ? '已经登录' : '登录'} onPress={this.onLogin} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  close: {
    position: 'absolute',
    right: 10,
    top: 30,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: 'gray',
  },
})

export default Login
