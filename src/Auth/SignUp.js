import React, {Component}       from 'react'
import {FormControl, FormGroup} from 'react-bootstrap'
import {Redirect, withRouter}   from 'react-router-dom'

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
			error: "",
		}
	}

	onSubmit = (e) => {
		e.preventDefault()
		console.log(this.state.users)
		const formData = this.state.formData
		const {first_name, last_name, password, password_confirm} = formData

		if (first_name && last_name && password) {
			if (password_confirm !== password) {
				this.setState({
					error:"Password is not equal"
				})
			} else {
				localStorage.setItem(first_name.toLowerCase(),
					JSON.stringify(formData))
				localStorage.setItem('token', first_name)
				this.props.history.push(`/home`)
			}
		} else {
			this.setState({
				error:"All fields are required"
			})
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

	render() {
		return (
			<>
				<form className={'SignUpForm'}>
					<h3 className={'cus'}>Sign up</h3>
					<span className={'SignUpHelper'}>Please fill in all required fields</span>
					<FormGroup>
						<FormControl
							type="text"
							value={this.state.formData.first_name}
							placeholder="First name"
							onChange={this.handleChangeFirsName}
						/>
						<FormControl.Feedback/>
					</FormGroup>
					<FormGroup>
						<FormControl
							type="text"
							value={this.state.formData.last_name}
							placeholder="Last name"
							onChange={this.handleChangeLastName}
						/>
						<FormControl.Feedback/>
					</FormGroup>
					<FormGroup>
						<FormControl
							type="text"
							value={this.state.formData.password}
							placeholder="Password"
							onChange={this.handleChangePassword}
						/>
						<FormControl.Feedback/>
					</FormGroup>
					<FormGroup>
						<FormControl
							type="text"
							value={this.state.formData.password_confirm}
							placeholder="Confirm Password"
							onChange={this.handleChangePasswordConfirm}
						/>
						<FormControl.Feedback/>
					</FormGroup>
					{this.state.error.length ? <p style={{color: "red",marginTop: 0}}>{this.state.error}</p> : null}
					<button className={'submit'} type="submit"
					        onClick={this.onSubmit}>Submit
					</button>
					<span className={'switcher'}
					      onClick={this.props.haveAccount}>Already Have an account ? Please Login</span>
				</form>
				{
					this.state.finished ? <Redirect to="/home"/> : null
				}
			</>
		)
	}
}

export default withRouter(SignUp)
