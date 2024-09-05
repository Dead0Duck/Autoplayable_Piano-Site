NodeList.prototype.forEach = Array.prototype.forEach;

function track2json(in_track)
{
	let track = JSON.parse(JSON.stringify(in_track));
	let notes 
	for(let y = 0; y < track.notes.length; y++) {
		let old_note = track.notes[y];
		let new_note = {}
		
		new_note.n = old_note.name;
		new_note.t = old_note.time;
		
		track.notes[y] = new_note;
	}
	return track.notes
}
