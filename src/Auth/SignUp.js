import axios                            from 'axios'
import React, {Component}               from 'react'
import {Button, FormControl, FormGroup} from 'react-bootstrap'
import SweetAlert                       from 'react-bootstrap-sweetalert'
import {withRouter}                     from 'react-router-dom'

class SignUp extends Component {
	constructor(props) {
		super(props)
		this.state = {
			formData: {
				first_name: '',
				last_name: '',
				password: '',
				password_confirm: '',
			},
			finished: false,
		}
	}

	onSubmit = (e) => {
		e.preventDefault()
		console.log(this.state);
		const props = this.props
		const state = this.state
		const data = new FormData()
		for (let key in this.state.formData) {
			data.append(key, this.state.formData[key])
		}
		if (this.validateUserName() === 'success' &&
			this.validateFirstName() === 'success' &&
			this.validateLastName() === 'success' && this.validatePassword() ===
			'success' && this.validatePasswordConfirm() === 'success') {
			this.setState({
				finished: true,
			})

			axios.post('http://10.25.40.103:3002/auth/register',
				this.state.formData)
				.then((response) => {
					console.log(response)
					if (response.data.ok) {
						this.setState({
							message: 'Successful',
						})
						localStorage.setItem('userToken', response.data.token)
					} else {
						this.setState({
							message: response.data.message,
						})
					}
				})
		} else {
			alert('Please sign up correctly')
		}
	}

	handleChangeFirsName = (e) => {
		this.setState({
			...this.state,
			formData: {
				...this.state.formData,
				first_name: e.target.value,
			},
		})
	}
	handleChangeLastName = (e) => {
		this.setState({
			...this.state,
			formData: {
				...this.state.formData,
				last_name: e.target.value,
			},
		})
	}
	handleChangePassword = (e) => {
		this.setState({
			...this.state,
			formData: {
				...this.state.formData,
				password: e.target.value,
			},
		})
	}
	handleChangePasswordConfirm = (e) => {
		this.setState({
			...this.state,
			formData: {
				...this.state.formData,
				password_confirm: e.target.value,
			},
		})
	}
	onConfirm = () => {
		window.location.reload()
	}


	validateUserName() {
		const length = this.state.formData.first_name.length
		if (length >= 3) {
			return 'success'
		}
		else if (length > 0) return 'error'
		return null
	}

	validateFirstName() {
		const length = this.state.formData.first_name.length
		if (length >= 3) {
			return 'success'
		}
		else if (length > 0) return 'error'
		return null
	}

	validateLastName() {
		const length = this.state.formData.last_name.length
		if (length >= 3) {
			return 'success'
		}
		else if (length > 0) return 'error'
		return null
	}

	validatePassword() {
		const length = this.state.formData.password.length
		if (length >= 3) {
			return 'success'
		}
		else if (length > 0) return 'error'
		return null
	}

	validatePasswordConfirm() {
		const password = this.state.formData.password
		const password_confirm = this.state.formData.password_confirm

		if (password_confirm !== '' && password_confirm === password) {
			return 'success'
		} else if (password_confirm === '') {
			return null
		} else {
			return 'error'
		}
	}

	render() {
		return (
			<form className={"SignUpForm"}>
				<h3 className={'cus'}>Sign up</h3>
				<span className={"SignUpHelper"}>Please fill in all required fields</span>
					{this.state.message === 'Successful' ?
					<SweetAlert success title="Good job!"
					            onConfirm={this.onConfirm}>
						You clicked the button!
					</SweetAlert> : <span
						className={'signUpErrorMessage'}>{this.state.message}</span>}
				<FormGroup
					controlId="formBasicLogin"
					validationState={this.validateFirstName()}
				>
					<FormControl
						type="text"
						value={this.state.formData.first_name}
						placeholder="First name"
						onChange={this.handleChangeFirsName}
					/>
					<FormControl.Feedback/>
				</FormGroup>
				<FormGroup
					validationState={this.validateLastName()}
				>
					<FormControl
						type="text"
						value={this.state.formData.last_name}
						placeholder="Last name"
						onChange={this.handleChangeLastName}
					/>
					<FormControl.Feedback/>
				</FormGroup>
				<FormGroup
					validationState={this.validatePassword()}
				>
					<FormControl
						type="text"
						value={this.state.formData.password}
						placeholder="Password"
						onChange={this.handleChangePassword}
					/>
					<FormControl.Feedback/>
				</FormGroup>
				<FormGroup
					validationState={this.validatePasswordConfirm()}
				>
					<FormControl
						type="text"
						value={this.state.formData.password_confirm}
						placeholder="Confirm Password"
						onChange={this.handleChangePasswordConfirm}
					/>
					<FormControl.Feedback/>
				</FormGroup>
				<button className={"submit"} type="submit" onClick={this.onSubmit}>Submit</button>
				<span className={"switcher"} onClick={this.props.haveAccount}>Already Hav an account ? Please Login</span>
			</form>
		)
	}
}

export default withRouter(SignUp)
