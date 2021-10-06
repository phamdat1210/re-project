import React from 'react';
import '../css/button.css';

const NumberButtonGroup = ({

}) => {

	const [numbers, setNumbers] = React.useState([]);

	const initArr = () =>{
		const addedArr = [...numbers];
		if(addedArr.length === 0) {
			for (let index = 0; index < 100; index++) {
				const obj = {
					value : index < 10 ? '0'+index : ''+index,
					checked : false
				};
				addedArr.push(obj);
			};
			return addedArr;
		}
	}

	React.useEffect(()=>{
		const newArr = initArr();
		if(numbers.length === 0) {
			setNumbers(newArr);
		}
	},[numbers.length]);

	const handleActive = (value) => {
		const update = [...numbers];
		update.map((e)=>{
			if(e.value === value) {
				e.checked = !e.checked
			}
		});
		setNumbers(update);
	};

	return (
		<div className = {'container'}>
			{
				numbers.map((e,i)=>{
					return (
						<div key = {i} className = {'wapper-btn'}>
							<button
								onClick = {()=>handleActive(e.value)} 
								type = {'button'} 
								className = {!e.checked ? 'button' : 'button_active'}>
								{e.value}
							</button>
						</div>
					)
				})
			}
		</div>
	);
};

export default NumberButtonGroup;