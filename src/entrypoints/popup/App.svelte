<script lang="ts">
	import bookmarkLogo from '@/assets/bookmark.svg';
	const heading = 'BookSwitch';
	const chars = heading.split('');

	function openOptions() {
		chrome.tabs.create({ url: 'chrome://extensions/shortcuts' });
	}
</script>

<main>
	<div>
		<img src={bookmarkLogo} class="logo bookSwitch" alt="BookSwitch Logo" />
	</div>
	<h1>
		{#each chars as char, index (index)}
			<span class="wiggle-char">{char}</span>
		{/each}
	</h1>
	<button type="button" on:click={openOptions}>Configure the remaining shortcut keys</button>
</main>

<style>
	@keyframes wiggle {
		0%,
		100% {
			transform: rotate(0deg) translate(0, 0);
		}
		25% {
			transform: rotate(-2deg) translate(-2px, 0);
		}
		50% {
			transform: rotate(2deg) translate(2px, 0);
		}
		75% {
			transform: rotate(-2deg) translate(-2px, 0);
		}
	}

	.logo {
		height: 6em;
		padding: 1.5em;
		will-change: filter, transform;
		transition: filter 300ms;
	}

	.logo:hover {
		filter: drop-shadow(0 0 2em #54bc4ae0);
		animation: wiggle 0.6s ease-in-out infinite;
	}

	.logo.bookSwitch:hover {
		filter: drop-shadow(0 0 2em #ff3e00aa);
	}

	.wiggle-char {
		display: inline-block;
		will-change: transform;
		transform-origin: center bottom;
	}

	h1:hover .wiggle-char {
		animation: wiggle 0.6s ease-in-out infinite;
	}

	button {
		background-color: rgb(234, 123, 111);
		color: black;
		border: none;
		padding: 1em 1em;
		font-size: 1em;
		cursor: pointer;
		border-radius: 10px;
		transition: background-color 0.3s ease;
	}

	button:hover {
		background-color: rgb(234, 100, 90);
	}
</style>
