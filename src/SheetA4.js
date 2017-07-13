import React from 'react';
import Badge from './Badge';
import AddNewBadge from './AddNewBadge';
import data from './data';
import './SheetA4.css';

function SheetA4() {
	const badges = data.map((dataItem) => <Badge person={dataItem}/>);
	return (
		<div className="SheetA4">
			{badges}
			<AddNewBadge/>
		</div>
	);
}

export default SheetA4;
