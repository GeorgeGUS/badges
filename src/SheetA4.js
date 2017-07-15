import React from 'react';
import Badge from './Badge';
import NewBadge from './NewBadge';
import data from './data';
import './styles/_SheetA4.scss';

function SheetA4() {
	const badges = data.map((dataItem) => <Badge key={dataItem.key} person={dataItem}/>);
	return (
		<div className="SheetA4">
			{badges}
			<NewBadge />
		</div>
	);
}

export default SheetA4;
