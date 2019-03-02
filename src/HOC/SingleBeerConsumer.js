import React            from 'react'
import Context          from '../Context/index'

function ConsumingBeers(Component) {
	return () => {
		return (
			<Context.Consumer>
				{
					(value) => {
						return (
							<Component data={value}/>
						)
					}
				}
			</Context.Consumer>
		)
	}
}

export default ConsumingBeers