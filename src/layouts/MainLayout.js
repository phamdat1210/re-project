import React from 'react';
import MyHeader from '../components/MyHeader';

const MainLayout = ({children}) => {
	return (
		<>
			<MyHeader/>
			<main>
				{children}
			</main>
		</>
	);
};

export default MainLayout;