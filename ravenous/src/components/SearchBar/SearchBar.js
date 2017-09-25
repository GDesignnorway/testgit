import React from 'react';
import './SearchBar.css';


const sortByOptions = {
	'Best Match' : 'best_match',
	'Highest Rated' : 'rating',
	'Most Reviewed' : 'review_count'
};


function getSortByClass (sortByOptions) {
	if(this.state.sortBy === sortByOptions) {
		return 'active';
	} else {
		return '';
	}
};

function handleSortByChange (sortByOption) {
	setState(this.state.sortBy);
}


class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			term: '',
			location: '',
			sortBy: 'best_match'
		};
	}
	render() {
		return (
			<div className="SearchBar">
			  <div className="SearchBar-sort-options">
			    <ul>
			       { this.renderSortByOptions() }
			    </ul>
			  </div>
			  <div className="SearchBar-fields">
			    <input placeholder="Search Businesses" />
			    <input placeholder="Where?" />
			  </div>
			  <div className="SearchBar-submit">
			    <a>Let's Go</a>
			  </div>
			</div>
			)
	}
		
	renderSortByOptions() {
		return Object.keys(sortByOptions).map(sortByOption => {
			let sortByOptionValue = sortByOptions[sortByOption];
			return <li key={sortByOptionValue}>{sortByOption}</li>;
		});
	}

}



export default SearchBar;