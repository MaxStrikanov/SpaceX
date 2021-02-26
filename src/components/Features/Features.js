import React, { Fragment } from 'react';
import RellaxWrapper from 'react-rellax-wrapper'
import Main from '../Main/Main';
import './features.css';

const rocketImg = {
	'Falcon 1': 'falcon-1',
	'Falcon 9': 'falcon-9',
	'Falcon Heavy': 'falcon-heavy',
	'Starship': 'starship'
}

const Features = ({diameter, height, name, mass, payload_weights: payload}) => (
	
    <Fragment>
		<Main rocket = {name} />
		<section className="features">
		<h2 className="features-title">
			{name} <br/>Overview
		</h2>
		<div className="overview">

			<table className="table">
				<caption className="table-title">
					Size
				</caption>
				<thead> 
					<tr>
						<td className="table-column">HEIGHT</td>
						<td className="table-column">{height.meters} m / {height.feet} ft</td>
					</tr>
					<tr>
						<td className="table-column">DIAMETER</td>
						<td className="table-column">{diameter.meters} m / {diameter.feet} ft</td>
					</tr>
					<tr>
						<td className="table-column">MASS</td>
						<td className="table-column">{mass.kg} kg / {mass.lb} lb</td>
					</tr>
					{payload.map((item) => (
						<tr key = {item.id}>
							<td className="table-column">PAYLOAD TO {item.id.toUpperCase()}</td>
							<td className="table-column">{item.kg} kg / {item.lb}  lb</td>
						</tr>
					))}
					
				</thead>
			</table>
			<RellaxWrapper speed = {14}>
				<img
					src={`./img/${rocketImg[name]}.png`}
					alt="rocket"
					className="rocket"	
				/>
			</RellaxWrapper>
			
			<article>
				<h3 className="features-subtitle">DESCRIPTION</h3>
				<p className="features-text">
					The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.
				</p>
			</article>
		</div>
	</section>
	</Fragment>
)

export default Features;