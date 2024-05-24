<script lang="ts">
	import type { Snippet } from 'svelte';
	import '../app.css';

	type Props = {
		children: Snippet;
	};

	let { children }: Props = $props();
</script>

{@render children()}
