import React from 'react';

class SearchBar extends React.Component {

	onInputChange (event) {
		console.log(event.target.value)
	}

	render () {
		return (
		<div className="ui segment">
			<form action="" className="ui form">
				<label htmlFor="search"> Image Search</label>
				<input onChange={this.onInputChange} type="text" name="search" id="" className="field"/></form>	
		</div>
		);
	}
}

export default SearchBar;