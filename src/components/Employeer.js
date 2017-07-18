import React from 'react';

function Employeer(props) {
	return (
		<div className={props.className}>
			<h2 className="Badge__text full-name">{props.editing ?
				<input
					className="Badge__input"
					type="text" title="fullName"
					defaultValue={props.fullName}
					placeholder="ФИО сотрудника"
				/>
				:
				props.fullName
			}</h2>
			<p className="Badge__text profession">{props.editing ?
				<input
					className="Badge__input"
					type="text" title="position"
					defaultValue={props.position}
					placeholder="должность"
				/>
				:
				props.position
			}</p>
			<div className="director">
				<span className="Badge__text dir-name">Директор</span>
				<span className="Badge__text dir-name">С.Я. Якушев</span>
			</div>
		</div>
	);
}

export default Employeer;
