const translations = {
			en: {
				title: "Auto Playable Piano",
				description: 'Convert your MIDI file to song for <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=3325497170">Auto Playable Piano</a><br>By <a href="https://dead0duck.ru"><img src="favicon-16x16.png"> DeadDuck</a><br><br>Libraries used on this site: <a href="https://tonejs.github.io/Midi/">Tone.JS</a>, <a href="https://cifkao.github.io/html-midi-player/">html-midi-player</a>.',
				drop_midi: "Drop a midi file here",
				info_heading: "Information about song (Please use Latin characters):",
				label_song_name: "Song Name:",
				helper_song_name: 'For the song name, I recommend using the format: "Author - Title"',
				label_cover: "Song Cover Art Path:",
				download_button: "Download song file",
				preview_heading: "Song Preview:",
				tracks_heading: "<h3>Song Tracks:</h3>",
				faq_download_heading: "What should I do with downloaded file?",
				faq_download_desc: 'In version 1.4.0, I changed the song handling logic, so now they are stored not in LUA code, but in binary files.<br>After you download a file, go to your Garry\'s Mod folder, then to the "garrysmod/addons" folder. Inside it, you can create a folder with any Latin name (for example, "duck_piano_rock"). Then, inside that folder, create the following subfolders: "data_static/duck_instrument/songs".<br><br>Inside the <b>songs</b> folder, I recommend creating another folder with a unique Latin name (e.g. your nickname or the song author\'s nickname) and placing the downloaded file inside it.<br><br>The final path to the file should look something like this:<br>`data_static/duck_instrument/songs/inabakumori/rainy_boots.dat`',
				faq_cover_heading: "How to add cover art file?",
				faq_cover_desc: 'If you want to add a cover art for your song, you need to specify its name when creating the song on the website (for example, "inabakumori/rainy_boots.png"). The file itself must be a <b>PNG image with a resolution of 64x64 pixels</b> (larger size doesn\'t make sense). <br><br>Place this file in your addon folder. Inside it, create the following folders:<br>`materials/deadduck/instruments/song_covers`<br><br>Then, following the path you specified on the site, create the folder "inabakumori" (in our example) and put the file `rainy_boots.png` inside it.',
				faq_old_heading: "Will my songs created before the update still work?",
				faq_old_desc: 'Yes, they will! Support for the old song format has been preserved. <br><br>However, I strongly recommend updating your addon and migrating your songs to the new format. This can be done without leaving Garry\'s Mod. <br><br>You need to disable all other piano addons (so that only the default songs and your own songs remain), start a <b>Singleplayer</b>, and enter the console command `duck_piano_migrate`. <br><br>The command will automatically go through all songs in the old format and convert them to the new format. After that, you just need to move the files from the folder "data/duck_instrument/migrate/" to "addons/&lt;your_addon_name&gt;/data_static/duck_instrument/songs/". <br><br>Note that the command may not work correctly with song names that are not in Latin characters.',
				file_not_supported: "Reading files not supported by this browser",
				language_label: "Language:",
				language_option_en: "English",
				language_option_ru: "Русский",
				og_title: "Auto Playable Piano",
				og_description: "Convert your Midi to a song for Auto Playable Piano"
			},
			ru: {
				title: "Auto Playable Piano",
				description: 'Преобразуйте ваш MIDI-файл в песню для <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=3325497170">Auto Playable Piano</a><br>От <a href="https://dead0duck.ru"><img src="favicon-16x16.png"> DeadDuck</a><br><br>Использованные на сайте библиотеки: <a href="https://tonejs.github.io/Midi/">Tone.JS</a>, <a href="https://cifkao.github.io/html-midi-player/">html-midi-player</a>.',
				drop_midi: "Перетащите MIDI-файл сюда",
				info_heading: "Информация о песне (используйте латинские символы):",
				label_song_name: "Название песни:",
				helper_song_name: 'Для названия песни рекомендуется формат: "Автор - Название"',
				label_cover: "Путь к обложке песни:",
				download_button: "Скачать песню",
				preview_heading: "Предпрослушивание песни:",
				tracks_heading: "<h3>Дорожки песни:</h3>",
				faq_download_heading: "Что делать со скачанным файлом?",
				faq_download_desc: 'В версии 1.4.0 я изменил логику хранения песен, теперь они хранятся не в LUA-коде, а в бинарных файлах.<br>После скачивания файла перейдите в папку своего Garry\'s Mod, затем в папку "garrysmod/addons". Внутри неё можно создать папку с любым латинским именем (например, "duck_piano_rock"). Затем внутри этой папки создайте следующие подпапки: "data_static/duck_instrument/songs".<br><br>Внутри папки <b>songs</b> я рекомендую создать ещё одну папку с уникальным латинским именем (например, вашим никнеймом или ником автора песни) и поместить туда скачанный файл.<br><br>Итоговый путь к файлу будет выглядеть примерно так:<br>`data_static/duck_instrument/songs/inabakumori/rainy_boots.dat`',
				faq_cover_heading: "Как добавить файл обложки?",
				faq_cover_desc: 'Если вы хотите добавить обложку для песни, укажите её имя при создании песни на сайте (например, "inabakumori/rainy_boots.png"). Сам файл должен быть <b>PNG-изображением размером 64x64 пикселя</b> (Смысла в большем размере нет). <br><br>Поместите файл в папку вашего аддона. Внутри неё создайте такие папки:<br>`materials/deadduck/instruments/song_covers`<br><br>Затем, следуя по указанному на сайте пути, создайте папку "inabakumori" (в случае нашего примера) и поместите туда файл `rainy_boots.png`.',
				faq_old_heading: "Будут ли работать мои песни, созданные до обновления?",
				faq_old_desc: 'Да, будут! Старый формат песен пока поддерживается. <br><br>Тем не менее я настоятельно рекомендую обновить ваш аддон и перенести песни в новый формат. Это можно сделать не покидая Garry\'s Mod. <br><br>Необходимо отключить все остальные аддоны на песни для пианино (так, чтобы остались только стандартные песни и ваши собственные), запустить <b>одиночную игру</b> и ввести в консоль команду `duck_piano_migrate`. <br><br>Команда автоматически обработает все песни в старом формате и конвертирует их в новый. После этого нужно переместить файлы из папки "data/duck_instrument/migrate/" в "addons/&lt;ваше_название_аддона&gt;/data_static/duck_instrument/songs/". <br><br>Обратите внимание, что команда может работать некорректно с названиями песен, содержащими нелатинские символы.',
				file_not_supported: "Чтение файлов не поддерживается этим браузером",
				language_label: "Язык:",
				language_option_en: "English",
				language_option_ru: "Русский",
				og_title: "Auto Playable Piano",
				og_description: "Преобразуйте MIDI в песню для Auto Playable Piano"
			}
		};

		const supportedLanguages = ["en", "ru"];

		function getCurrentLanguage() {
			const saved = localStorage.getItem("autopiano_lang");
			if (saved && supportedLanguages.includes(saved)) return saved;
			const nav = (navigator.language || navigator.userLanguage || "en").toLowerCase();
			return nav.startsWith("ru") ? "ru" : "en";
		}

		function setLanguage(lang) {
			if (!supportedLanguages.includes(lang)) lang = "en";
			localStorage.setItem("autopiano_lang", lang);
			document.documentElement.lang = lang;
			const dict = translations[lang] || translations.en;
			document.querySelectorAll("[data-i18n]").forEach((element) => {
				const key = element.dataset.i18n;
				if (key && dict[key] !== undefined) {
					element.innerHTML = dict[key];
				}
			});
			const downloadBtn = document.getElementById("Download");
			if (downloadBtn) {
				downloadBtn.setAttribute("aria-label", dict.download_button || "");
			}
			const select = document.getElementById("languageSelect");
			if (select) select.value = lang;
			document.title = dict.title || document.title;
			const ogTitle = document.querySelector('meta[property="og:title"]');
			if (ogTitle) ogTitle.setAttribute("content", dict.og_title || "");
			const ogDescription = document.querySelector('meta[property="og:description"]');
			if (ogDescription) ogDescription.setAttribute("content", dict.og_description || "");
		}

		function initLocalization() {
			setLanguage(getCurrentLanguage());
			const select = document.getElementById("languageSelect");
			if (select) {
				select.addEventListener("change", () => setLanguage(select.value));
			}
		}

		function translate(key) {
			const lang = getCurrentLanguage();
			return (translations[lang] && translations[lang][key]) || translations.en[key] || "";
		}

		initLocalization();