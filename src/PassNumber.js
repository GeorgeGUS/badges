import React from 'react';

function PassNumber(props) {
	return (
		<div className="Badge__field">
			<p className="Badge__text company">Новгородский ОРТПЦ</p>
			<h2 className="Badge__text pass-number">Пропуск №{props.passNum}</h2>
		</div>
	);
}

export default PassNumber;
