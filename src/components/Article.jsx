const Article = (props) => {
	return (
	  <>
		<h3>Title : {props.title}</h3>
		<small>Date : {props.date}</small><br />
		<small>Description : {props.description}</small>
		
	  </>
	);
  };
  
  export default Article;
  