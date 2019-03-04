import React, {Component} from 'react'
import {FormControl, FormGroup} from 'react-bootstrap'
import {withRouter} from 'react-router-dom'

class Login extends Component {
	state = {
		userName: '',
		password: '',
		message: '',
		error: null,
	}

	handleChangeLogin = (e) => {
		this.setState({
			userName: e.target.value,
		})
	}

	handleChangePassword = (e) => {
		this.setState({
			password: e.target.value,
		})
	}

	login = (e) => {
		e.preventDefault()
		const state = this.state
		const props = this.props
		const userLogin = localStorage.getItem(this.state.userName)
		if (userLogin !== null) {
			const data = JSON.parse(userLogin)
			if (data.password.toLowerCase() === state.password.toLowerCase()) {
				localStorage.setItem('token', state.userName)
				props.history.push(`/home`)
			}
		} else {
			this.setState({
				error: 'Username or Password is not true',
			})
		}
	}

	render() {
		return (
			<>
				<form className={'SignUpForm'}>
					<h3>Login</h3>
					<span
						className={'SignUpHelper'}>Please login correctly</span>
					{this.state.loginSuccessFull
						? <span
							className={'loginErrorMessage'}>{this.state.message}</span>
						: null}
					<FormGroup controlId="formBasicLogin" required>
						<FormControl
							type="text"
							value={this.state.userName}
							placeholder="Name"
							onChange={this.handleChangeLogin}
						/>
						<FormControl.Feedback/>
					</FormGroup>
					<FormGroup controlId="formBasicPassword" required>
						<FormControl
							type="text"
							value={this.state.password}
							placeholder="Password"
							onChange={this.handleChangePassword}
						/>
						<FormControl.Feedback/>
					</FormGroup>
					{
						this.state.error !== '' ? <p style={{
							color: 'red',
							marginTop: 0,
						}}>{this.state.error}</p> : null
					}
					<button className={'submit'} type="submit"
					        onClick={this.login}>Submit
					</button>
					<span className="pull-right switcher"
					      onClick={this.props.haveAccount}>Create Account instead ?</span>
				</form>
			</>

		)
	}
}

export default withRouter(Login)



