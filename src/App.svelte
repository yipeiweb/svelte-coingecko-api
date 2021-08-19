<script>
	import { onMount } from 'svelte';

	const apiUrl =
		"https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false";
	let titles = ["#", "Coin", "Price", "Price Change", "24h Volume"];
	let coins = [];
	let resultCoins = [];
	let ref = null;

	const loadCoins = async () => {
		const response = await fetch(apiUrl);
		const data = await response.json();
		coins = data;
		resultCoins = data;
	};

	const searchCoin = (value) => {
		resultCoins = 
			coins.filter((coin) => coin.name.toLowerCase().includes(value.toLowerCase()) || 
								   coin.symbol.toLowerCase().includes(value.toLowerCase())
			);

	};

	loadCoins();
	onMount(() => {
		ref.focus();
	})
</script>

<div class="container">
	<div class="row">
		<h1 class="text-white">CoinMarket</h1>

		<input type="text"
			class="form-control bg-dark text-white rounded-0 border-0 my-4"
			placeholder="Search your coin for name or symbol"
			on:keyup={({target: {value}}) => searchCoin(value)}
			bind:this={ref}>
		
		{#if coins.length > 0}
		<table class="table table-dark">
			<thead>
				<tr>
					{#each titles as title}
						<th>{title}</th>
					{/each}
				</tr>
			</thead>
			<tbody>
				{#each resultCoins as coin, index}
					<tr>
						<td class="text-muted">{index+1}</td>
						<td>
							<img src={coin.image} alt={coin.name} style="width: 2rem;" class="img-fluid me-2">
							<span>{coin.name}</span>
							<span class="text-muted text-uppercase ms-2">{coin.symbol}</span>
						</td>
						<td class="">{coin.current_price.toLocaleString()}€</td>
						<td class={coin.price_change_percentage_24h > 0 ? "text-success" : "text-danger"}>
							{coin.price_change_percentage_24h}%
						</td>
						<td class="">{coin.total_volume.toLocaleString()}€</td>
					</tr>
				{/each}
			</tbody>
		</table>
		{:else}
		<div class="d-flex justify-content-center align-items-center">
			<div class="spinner-border text-light" role="status"  style="width: 9rem; height: 9rem;">
			  <span class="visually-hidden">Loading...</span>
			</div>
		  </div>
		{/if}
	</div>
</div>

<style>
</style>
