export const setActivePage = () => {
	console.log('dedee');
	let current = 0;
	const allLinks = document.links;
	const menuLinks = [];

	for (const link of allLinks) {

		if (link.className === 'menu__list-link') {
			menuLinks.push(link);
		}

	}

	for (let i = 0; i < menuLinks.length; i++) {
		if (menuLinks[i].href === document.URL) {
			current = i;
		}
	}
	menuLinks[current].className += ' active';
}

