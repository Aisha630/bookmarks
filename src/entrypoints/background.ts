export default defineBackground(() => {
	async function getBookmarksBar(): Promise<Browser.bookmarks.BookmarkTreeNode[]> {
		return new Promise((resolve) => {

            let bookmarksTab = '1'
            if (import.meta.env.FIREFOX) {
				bookmarksTab = 'toolbar_____';
			}
            browser.bookmarks
                .getChildren(bookmarksTab)
                .then((children: Browser.bookmarks.BookmarkTreeNode[]) => {
                    if (!children?.length) {
                        console.warn('No bookmarks found in the Bookmarks Bar.');
                        resolve([]);
                        return;
                    }
                    const bookmarks: Browser.bookmarks.BookmarkTreeNode[] = children
                        .filter((item) => item.url)
                        .slice(0, 9);
                    resolve(bookmarks);
                });
		});
	}

	browser.runtime.onInstalled.addListener((details: Browser.runtime.InstalledDetails) => {
		if (details.reason === 'install') {
			const welcomeUrl = browser.runtime.getURL('/welcome.html');
			browser.tabs.create({ url: welcomeUrl });
		}
	});

	browser.commands.onCommand.addListener(async (command: string) => {
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
