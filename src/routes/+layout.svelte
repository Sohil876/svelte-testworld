<script lang="ts">
	import './styles.css';
</script>

<svelte:head>
	<meta name="robots" content="noindex" />
</svelte:head>

<nav>
	<a href="."> Home </a>
	<a href="/about"> About </a>
</nav>

<slot />

<footer class="footer-container">
	<div class="footer-text">&#169; 2023</div>
</footer>

<style>
	nav {
		font-size: 2rem;
		padding: 1rem;
		width: 100%;
		box-shadow: -1px 1px 11px 4px #898989;
	}
	a {
		text-decoration: none;
		color: gray;
		margin-right: 1rem;
	}
	.footer-container {
		padding: 0.2rem 1rem 0.2rem 1rem;
		bottom: 0;
		width: 100%;
		box-shadow: -1px 1px 11px 4px #898989;
		text-align: center;
	}
	.footer-text {
		font-size: 2rem;
		padding: 1rem;
		text-decoration: none;
		color: gray;
	}
</style>
