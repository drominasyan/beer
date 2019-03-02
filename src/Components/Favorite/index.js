import React, {Component} from 'react'
import ContextBeers       from '../../Context/ContextBeers'
import ConsumerContext    from '../../HOC/ConsumerContext'
import {CardBeer}         from '../ContentBeers/CardBeer'
import '../ContentBeers/style.css'
import SinglePopupBeer    from '../ContentBeers/SinglePopupBeer'

class Favorite extends Component {
	render() {
		return (
			<ContextBeers>
				<div className="container">
					<div className="beers-row">
						{this.props.data.favList.length ?
							this.props.data.favList.map((item, index) => {
								return <CardBeer
									key={item.id}
									updateFavoriteList={this.props.data.methods.updateFavoriteList}
									item={item}
									updateSingleBeersData={this.props.data.methods.updateSingleBeersData}
								/>
							}) : <h1>There is nor any Favorite item</h1>
						}
					</div>
				</div>
				{
					this.props.data.showPopup ? <SinglePopupBeer
						popapSwicher={this.props.data.methods.popapSwicher}
						 data={this.props.data.singleBeersData}/> : null
				}
			</ContextBeers>
		)
	}
}

export default ConsumerContext(Favorite)