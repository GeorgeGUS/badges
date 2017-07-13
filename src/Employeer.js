import React from 'react';

function Employeer(props) {
	return (
		<div className="Badge__field">
			<h2 className="Badge__text full-name">{props.fullName}</h2>
			<p className="Badge__text position">{props.position}</p>
			<div className="director">
				<span className="Badge__text dir-name">Директор</span>
				<span className="Badge__text dir-name">С.Я. Якушев</span>
			</div>
		</div>
	);
}

export default Employeer;
