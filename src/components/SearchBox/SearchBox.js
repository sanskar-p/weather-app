import React from 'react';
import './SearchBox.css'

const searchBox = ({searchChange, submit, text}) => {
	return(
		<form onSubmit = {submit}>
			<input 
				type='text' 
				placeholder='enter name of city'
				onChange={searchChange}
				value={text}
			/>
		<button>Check!</button>
		</form>
	);
}

export default searchBox;