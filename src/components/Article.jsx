const Article = (props) =>{
	return (
		<>
			<div>{props.name}</div>
			
			<div>{props.titles.map((title) =>{
				return <div key={title}>{title}</div>
			})}</div>
		</>
	)
}

export default Article