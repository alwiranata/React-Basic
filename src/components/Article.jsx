const Article = () => {
	const name = "aldo"
	const prodis = ["TI", "ILKOM", "TS"]

	return (
		<>
			<div>{name}</div>
			<div>
				{prodis.map((prodi) => {
					return (
						<>
							<div>{prodi}</div>
							<div>{prodi}</div>
						</>
					)
				})}
			</div>
		</>
	)
}

export default Article
