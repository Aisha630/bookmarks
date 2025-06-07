export default defineBackground(() => {
	async function getBookmarksBar(): Promise<Browser.bookmarks.BookmarkTreeNode[]> {
		return new Promise((resolve) => {
			browser.bookmarks.search({ title: 'Bookmarks Bar' }).then((bookmarks) => {
				// according to the chrome documentation,a bookmarks folder does not have a url property
				const folder = bookmarks.find((item) => !item.url);
                
                browser.bookmarks.getChildren(folder ? folder.id : '1').then((children) => {
                    const bookmarks = children.filter((item) => item.url);
                    resolve(bookmarks);
                });
				// if (!folder) {
                //     console.error('Bookmarks Bar not found.');
                //     return resolve([]);
				// }

			});
		});
	}

	browser.runtime.onInstalled.addListener(() => {
		console.log('Bookmarks Switcher extension installed.');
		// getBookmarksBar().then((bookmarks) => {
		//     console.log('Bookmarks Bar:', bookmarks);
		// });
	});

	browser.commands.onCommand.addListener(async (command) => {
		if (command.startsWith('open-bookmark-')) {
			try {
				const index = parseInt(command.split('-').pop() || '1') - 1;
				let bookmarks = await getBookmarksBar();

				if (bookmarks.length > index) {
					const bookmark = bookmarks[index];
					if (bookmark.url) {
						browser.tabs.create({ url: bookmark.url });
					} else {
						console.error(`Bookmark at index ${index} does not have a valid URL.`);
					}
				} else {
					console.error(`No bookmark found at index ${index}.`);
				}
			} catch (error) {
				console.error('Error fetching bookmarks:', error);
			}
		}
	});
});
