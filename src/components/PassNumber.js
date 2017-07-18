import React from 'react';

function PassNumber(props) {
	return (
		<div className={props.className}>
			<p className="Badge__text company">Новгородский ОРТПЦ</p>
			<h2 className="Badge__text pass-number">{props.editing ?
				<label>Пропуск № <input
					className="Badge__input Badge__input--number"
					type="text" title="passNumber" defaultValue={props.passNum}/>
				</label>
				:
				`Пропуск № ${props.passNum}`
			}</h2>
		</div>
	);
}

export default PassNumber;
