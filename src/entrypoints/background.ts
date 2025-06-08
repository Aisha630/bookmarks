export default defineBackground(() => {
	async function getBookmarksBar(): Promise<Browser.bookmarks.BookmarkTreeNode[]> {
		return new Promise((resolve) => {
			browser.bookmarks.getChildren('1').then((children) => {
				if (!children?.length) {
					console.warn('No bookmarks found in the Bookmarks Bar.');
					resolve([]);
					return;
				}
				const bookmarks = children.filter((item) => item.url);
				resolve(bookmarks);
			});
		});
	}

	browser.runtime.onInstalled.addListener((details) => {
		if (details.reason === 'install') {
			const welcomeUrl = browser.runtime.getURL('/welcome.html');
			browser.tabs.create({ url: welcomeUrl });
		}
	});

	browser.commands.onCommand.addListener(async (command) => {
		if (!command.startsWith('open-bookmark-')) return;

		try {
			const index = parseInt(command.split('-').pop() || '1') - 1;
			const bookmarks = await getBookmarksBar();
			const bookmark = bookmarks[index];

			if (!bookmark) {
				console.error(`No bookmark found at index ${index}.`);
				return;
			}

			if (!bookmark.url) {
				console.error(`Bookmark at index ${index} does not have a valid URL.`);
				return;
			}

			browser.tabs.create({ url: bookmark.url });
		} catch (error) {
			console.error('Error fetching bookmarks:', error);
		}
	});
});
