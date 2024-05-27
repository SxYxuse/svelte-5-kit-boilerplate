<script lang="ts">
	import type { Snippet } from 'svelte';
	import '../app.css';
	import { Metadata } from '$lib/components';

	type Props = {
		children: Snippet;
	};

	let { children }: Props = $props();
</script>

<Metadata />

{@render children()}
