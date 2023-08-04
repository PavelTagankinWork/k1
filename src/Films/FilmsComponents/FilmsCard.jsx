export const FilmsCard = ({src, id, alt}) => {
	return (
		<li className="card">
			<img src={src} id={id} alt={alt}></img>
		</li>
	)
}