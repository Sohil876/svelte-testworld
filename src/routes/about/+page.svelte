<script lang="ts">
	import githubLogo from '$lib/images/github.svg';
</script>

<main>
	<div class="page-header">
		<h1>About</h1>
		<hr />
		<p>Fake profile list page generation.</p>
	</div>

	<div class="page-body-links">
		<a href="https://github.com/Sohil876">
			<img alt="Github" class="logos" src={githubLogo} />
		</a>
	</div>
</main>

<style>
	main {
		margin: 4rem;
		padding: 2rem;
		box-shadow: 4px 5px 11px 10px lightgray;
	}
	.page-header {
		justify-content: center;
		text-align: center;
		font-size: 1rem;
		color: gray;
	}
	.page-body-links {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
	.logos {
		width: 80px;
		height: 80px;
	}
</style>
