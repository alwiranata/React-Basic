const Article = (props) =>{
	return (
		<>
			<h3>Title : {props.name}</h3>
			<small>Date : {props.Date}</small>
			<small>Description : {props.Description}</small>
		
		</>
	)
}

export default Article