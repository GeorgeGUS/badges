import React from 'react';
import Button from './Button';


function NewBadge(props) {
	return (
		<div className="NewBadge">
			<Button className="plus-btn" icon="add_circle_outline" title="Создать новый бэйдж" onClick={props.handleClick} />
		</div>
	);
}

export default NewBadge;
