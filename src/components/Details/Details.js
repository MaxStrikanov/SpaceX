import React, { Fragment, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import YouTube from 'react-youtube';
import Main from '../Main/Main';
import useLaunches from '../useLaunches/useLaunches';
import './details.css';

const Details = (props) => {

	const [launch, setLaunch] = useState(null);
	const { getLaunch } = useLaunches();

	useEffect(() => {
		setLaunch(getLaunch(props.match.params.id));
	}, [getLaunch])

	const history = useHistory();
	
	if (!launch) return null;

	return (
		<Fragment>
		<Main name = {launch.name}/>
		 <main  className="details">
		 <div  className="container">
			 <div  className="details-row">
				 <div  className="details-image">
					 <img src={launch.links.patch.small} alt={launch.name} />
				 </div>
				 <div  className="details-content">
					<p  className="details-description">${launch?.details}</p>
				 </div>
			 </div>
			 <div>
				 <YouTube className="details-youtube" videoId = {launch.links.youtube_id} />
				
			 </div>
		 </div>
		 <a onClick = {history.goBack} className="button button-back">go back</a>
	 	</main>
	</Fragment>
	)
}

export default Details;