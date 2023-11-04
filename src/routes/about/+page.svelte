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
		<a href="https://github.com/Sohil876" target="_blank">
			<img alt="Github" class="logos" src={githubLogo} />
		</a>
	</div>
</main>

<style>
	main {
		min-height: 100vh;
		margin: 1rem;
	}
	.page-header {
		text-align: center;
		font-size: 2rem;
		color: gray;
	}
	.page-header hr {
		border: 1rem 0 1rem 0;
		margin: 1rem;
		width: 100%;
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
