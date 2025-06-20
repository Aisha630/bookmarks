import { defineConfig } from 'wxt';

export default defineConfig({
	srcDir: 'src',
	modules: ['@wxt-dev/module-svelte'],
	manifest: {
		name: 'BookSwitch',
		description:
			'A browser extension to switch between different bookmark within Bookmarks Bar.',
		version: '1.0.1',
		permissions: ['commands', 'bookmarks'],
		background: {
			service_worker: 'background.ts'
		},
		icons: {
			128: 'icon/bookmark.png'
		},
		commands: {
			'open-bookmark-1': {
				suggested_key: {
					default: 'Alt+1'
				},
				description: 'Open the 1st bookmark'
			},
			'open-bookmark-2': {
				suggested_key: {
					default: 'Alt+2'
				},
				description: 'Open the 2nd bookmark'
			},
			'open-bookmark-3': {
				suggested_key: {
					default: 'Alt+3'
				},
				description: 'Open the 3rd bookmark'
			},
			'open-bookmark-4': {
				suggested_key: {
					default: 'Alt+4'
				},
				description: 'Open the 4th bookmark'
			},
			'open-bookmark-5': {
				description: 'Open the 5th bookmark'
			},
			'open-bookmark-6': {
				description: 'Open the 6th bookmark'
			},
			'open-bookmark-7': {
				description: 'Open the 7th bookmark'
			},
			'open-bookmark-8': {
				description: 'Open the 8th bookmark'
			},
			'open-bookmark-9': {
				description: 'Open the 9th bookmark'
			}
		}
	}
});
