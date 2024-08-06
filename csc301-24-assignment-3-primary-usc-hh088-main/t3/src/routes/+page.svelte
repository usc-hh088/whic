<script>
	import ContactList from '../components/ContactList.svelte';
</script>

<svelte:head>
	<title>Home</title>
	
</svelte:head>

<h1>Emergency contact</h1>
<section>
	<ContactList />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

</style>
