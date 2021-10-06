import React from 'react';
import NumberButtonGroup from '../components/NumberButtonGroup';
import MainLayout from '../layouts/MainLayout';

const LoDeScreen = () => {
	return (
		<MainLayout>
			<div className = {'main-container'}>
				<div className = {'game-table'}>
					<NumberButtonGroup/>
				</div>
			</div>
		</MainLayout>
	);
};

export default LoDeScreen;