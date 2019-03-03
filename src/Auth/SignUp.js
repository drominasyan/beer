import axios                            from 'axios'
import React, {Component}               from 'react'
import {Button, FormControl, FormGroup} from 'react-bootstrap'
import SweetAlert                       from 'react-bootstrap-sweetalert'
import {
	withRouter,
	Redirect
} from 'react-router-dom'

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
			finished: false
		}
	}

	onSubmit = (e) => {
		e.preventDefault()
		console.log(this.state.users)
		const formData = this.state.formData
		const { first_name, last_name, password, password_confirm } = formData
		
		
		if (first_name &&	last_name && password) {
			if (password_confirm !== password) {
				alert('Password is not equal')
			}else{
					localStorage.setItem(first_name, JSON.stringify(formData))
					this.setState({})
			}
		} else {
			alert("Please signUp currectly")
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
				password_confirm: e.target.value
			}
		})
	}
	

	render() {
		return (
			<>
			<form className={"SignUpForm"}>
				<h3 className={'cus'}>Sign up</h3>
				<span className={"SignUpHelper"}>Please fill in all required fields</span>
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
				<button className={"submit"} type="submit" onClick={this.onSubmit}>Submit</button>
				<span className={"switcher"} onClick={this.props.haveAccount}>Already Have an account ? Please Login</span>
			</form>
			{
				this.state.finished ? <Redirect to="/home"/> : null
			}
			</>
		)
	}
}

export default withRouter(SignUp)
