import React from 'react';
import '../css/header.css';
import { Link } from 'react-router-dom';
import PATH from '../routes/path';
import Constant from '../constants/Contants'

const MyHeader = () => {
	return (
		<>
			<header className = {'header-container'}>
				<div className = {'nav-left'}>
					<ul className = {'__navbar'}>
						<li>
							<Link to = {PATH.HOME}>
								{Constant.title_home}
							</Link>
						</li>
						<li>
							<Link to = {PATH.LODE}>
								{Constant.title_lode}
							</Link>
						</li>
					</ul>
				</div>
				<div className = {'nav-right'}>
					<ul className = {'__navbar'}>
						<li>
							<Link to = {PATH.HOME}>
								Đăng kí
							</Link>
						</li>
						<li>
							<Link to = {PATH.LODE}>
								Đăng nhập
							</Link>
						</li>
					</ul>
				</div>
			</header>
		</>
	);
};

export default MyHeader;