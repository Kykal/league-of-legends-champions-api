import React from 'react';



//React router
import {
	Outlet,
	Link
} from 'react-router-dom';


//Styled components
import styled from 'styled-components';


//Icons
import championIcon from 'assets/championIcon.png';


const HeaderContainer = styled.header`

	position: relative;
	z-index: 1;

	display: flex;
	align-items: center;
	justify-content: space-between;


	height: 4em;
	padding: 1.25em;
`;

const MainSx = styled.main`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	padding-bottom: 4em;
`;

const Container = styled.div`
	min-width: 5em;
	width: 60em;
	max-width: 60em;

	margin-left: 2em;
	margin-right: 2em;
`;

const MainButton = styled.button`
	background: none;
	border: none;

	cursor: pointer;
	
	img {
		height: 3em;
		widht: auto;

		transition-duration: 0.125s;
		
		:hover {
			filter: brightness(1.5);
			scale: 1.125;
		}
	}
`;

const Background = styled.img`
	position: absolute;
	z-index: 0;
	width: 100%;
	height: auto;
`;

//Main component content
const Header = () => {

	//Component render
	return (
		<>
			<Background id="background-img"
				src={""}
				alt=""
			/>
			<HeaderContainer>
				<Link to="/" >
					<MainButton>
						<img
							src={championIcon}
							alt="Champion icon"
						/>
					</MainButton>
				</Link>
			</HeaderContainer>
			<MainSx>
				<Container>
					<Outlet />
				</Container>
			</MainSx>
		</>
	);
};


export default Header; //Export main component
