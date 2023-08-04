import {MusicList} from "./MusicComponents/MusicList";
import {MusicAside} from "./MusicComponents/MusicAside";

export const Music = () => {
	return (
		<div className="catalog mainApp">
			<MusicAside/>
			<MusicList/>
		</div>
	)
}