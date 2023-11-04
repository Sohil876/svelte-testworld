<script lang="ts">
	export let data;
</script>

<main>
	<div class="card">
		<div class="box">
			<img src={data.user.avatar} alt={data.user.lastName} />
			<ul>
				<div class="person-name">{data.user.firstName} {data.user.lastName}</div>
				<li>Title: {data.user.title}</li>
				<li>Phone: {data.user.phone}</li>
				<li>Email: {data.user.email}</li>
			</ul>
		</div>
	</div>
</main>

<style>
	main {
		margin: 1rem;
		min-height: 100vh;
	}
	.card {
		margin: 3rem;
		padding: 2rem;
		color: gray;
		justify-content: center;
		box-shadow: 4px 5px 11px 10px lightgray;
	}
	.box {
		display: flex;
		flex-wrap: wrap;
		text-align: left;
		font-size: 1.5rem;
	}
	.person-name {
		font-size: 3rem;
		margin: 1rem 0 1rem 0;
		color: salmon;
	}
	img {
		width: 15rem;
		object-fit: contain;
		margin-right: 1rem;
	}
	li {
		margin-bottom: 1rem;
	}
</style>
