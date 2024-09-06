NodeList.prototype.forEach = Array.prototype.forEach;

function track2json(in_track)
{
	let track = JSON.parse(JSON.stringify(in_track));
	for(let y = 0; y < track.notes.length; y++) {
		let old_note = track.notes[y];
		let new_note = {}
		
		new_note.n = old_note.name;
		new_note.t = old_note.time;
		
		track.notes[y] = new_note;
	}
	return track.notes
}

// Taken from html-midi-player
function formatTime(seconds) {
	const negative = (seconds < 0);
	seconds = Math.floor(Math.abs(seconds || 0));
	const s = seconds % 60;
	const m = (seconds - s) / 60;
	const h = (seconds - s - 60 * m) / 3600;
	const sStr = (s > 9) ? `${s}` : `0${s}`;
	const mStr = (m > 9 || !h) ? `${m}:` : `0${m}:`;
	const hStr = h ? `${h}:` : '';
	return (negative ? '-' : '') + hStr + mStr + sStr;
}

// https://stackoverflow.com/questions/712679/convert-midi-note-numbers-to-name-and-octave
let notes = ["C","C%23","D","D%23","E","F","F%23","G","G%23","A","A%23","B"]
function getNoteName(noteNumber)
{
	return notes[noteNumber % 12] + Math.floor((noteNumber / 12) - 1);
}

const allowedZero = {
	"A": true,
	"A#": true,
	"B": true,
}

let pianoAudios = {}
function preloadAudios()
{
	notes.forEach(o => {
		for (i = 0; i <= 8; i++)
		{
			let note = (o + i)
			if (i == 8 && o != 'C') continue
			if (i == 0 && !allowedZero[note]) continue

			pianoAudios[note] = new Audio(`/sounds/${note}.wav`)
			pianoAudios[note].volume = 0.35;
		}
	})
}
preloadAudios()

function playNote(note)
{
	let a = pianoAudios[note]
	if (a)
	{
		a.pause();
		a.currentTime = 0;
		a.play();
	}
}
