$(document).ready(function () {
	$("button").click(function () {
		var parent = $(this).parent();
		var classParent = parent.attr("class").split(" ");
		var sectionClass = classParent[1];

		if (sectionClass == "add-class-section") {
			$(`.${sectionClass} .content p`).addClass("red");
		} else if (sectionClass == "slide-toggle-section") {
			$(`.${sectionClass} .content img`).slideToggle();
		} else if (sectionClass == "append-section") {
			var addedParagraph = $(`.${sectionClass} .content p.added`).length + 1;
			$(`.${sectionClass} .content`).append(`<p class="added">New Paragraph (${addedParagraph})</p>`);
		} else if (sectionClass == "fadeIn-section") {
			$(`.${sectionClass} .content img`).fadeIn("slow");
		} else if (sectionClass == "fadeOut-section") {
			$(`.${sectionClass} .content img`).fadeOut();
		} else if (sectionClass == "slideDown-section") {
			$(`.${sectionClass} .content img`).slideDown();
		} else if (sectionClass == "hide-section") {
			$(`.${sectionClass} .content p`).hide();
		} else if (sectionClass == "show-section") {
			$(`.${sectionClass} .content p`).show();
		} else if (sectionClass == "val-section") {
			var getValue = $(`.${sectionClass} .content form input[type="text"]`).val();
			alert(getValue);
		} else if (sectionClass == "text-section") {
			$(`.${sectionClass} .content p`).text("<p>All new content. <em>You bet!</em></p>");
		} else if (sectionClass == "html-section") {
			$(`.${sectionClass} .content p`).html("<p>All new content. <em>You bet!</em></p>");
		} else if (sectionClass == "attr-section") {
			var characters = [
				{
					src: "https://static.zerochan.net/Zeref.Dragneel.full.793631.jpg",
					alt: "Zeref Dragneel",
				},
				{
					src: "https://static.zerochan.net/Mavis.Vermillion.full.1252429.jpg",
					alt: "Mavis Vermillion",
				},
				{
					src: "https://c4.wallpaperflare.com/wallpaper/746/57/91/anime-fairy-tail-natsu-dragneel-wallpaper-preview.jpg",
					alt: "Natsu Dragneel",
				},
				{
					src: "https://c4.wallpaperflare.com/wallpaper/809/602/361/anime-fairy-tail-gray-fullbuster-wallpaper-preview.jpg",
					alt: "Gray Full Buster",
				},
			];

			var randomCharacter = Math.floor(Math.random() * characters.length);
			$(`.${sectionClass} .content img`).attr({
				src: characters[randomCharacter].src,
				alt: characters[randomCharacter].alt,
			});
			document.getElementById("character-name").innerHTML = characters[randomCharacter].alt;
			// document.getElementById("img-url").innerHTML = characters[randomCharacter].src;
		} else if (sectionClass == "before-section") {
			$(`.${sectionClass} .content p.first-child`).before("<p>All new content. <em>You bet!</em></p>");
		} else if (sectionClass == "after-section") {
			$(`.${sectionClass} .content p.first-child`).after("<p>All new content. <em>You bet!</em></p>");
		}
	});
});
