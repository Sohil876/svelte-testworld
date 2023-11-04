<script lang="ts">
	export let data;
</script>

<main>
	{#each data.users as { avatar, lastName }}
		<a href={`/${lastName}`} class="box">
			<img src={avatar} alt={lastName} />
			<h1>{lastName}</h1>
		</a>
	{/each}
</main>

<style>
	main {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
		margin-top: 1rem;
		margin-bottom: 1rem;
	}
	.box {
		padding: 0.5rem;
		margin: 1rem;
		color: salmon;
		text-decoration: none;
		box-shadow: 4px 5px 11px 2px lightgray;
	}
	.box:hover {
		box-shadow: 4px 5px 11px 10px lightgray;
	}
	img {
		width: 15rem;
		object-fit: contain;
	}
	.box h1 {
		text-align: center;
	}
</style>
