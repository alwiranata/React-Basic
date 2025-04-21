const IsNew = ({value}) => {
	return value ? <span>New</span> : <span>Old</span>
}

const Article = (props) => {
	return (
		<>
			<h3>Title : {props.title}</h3>
			<small>
				Date : {props.date}
				<br />
				Description : {props.description}
				<br />
				Data : <IsNew value ={props.isNew}/>
			</small>
		</>
	)
}

export default Article
