<script lang="ts">
	import { alertController } from 'ionic-svelte';

	const showAlert = async (options) => {
		const alert = await alertController.create(options);
		alert.present();
	};

	const showSimpleAlert = async () => {
		const options = {
			header: 'Test Message',
			subHeader: '',
			message: 'Test successfull!',
			buttons: ['Ok']
		};
		return showAlert(options);
	};
</script>

<ion-card>
	<ion-card-header>
		<ion-card-subtitle> Great success!! </ion-card-subtitle>
		<ion-card-title> Welcome to your app! </ion-card-title>
	</ion-card-header>

	<ion-card-content>
		Thank you for using this starter. Click buttons below to open these guides (will open in new
		window). Don't forget to open DevTools to see this app in mobile mode. Happy coding!!!
	</ion-card-content>

	<ion-item>
		<ion-label> Visit Ionic Showcase app with sourceviewer </ion-label>
		<ion-button href="https://ionicsvelte.firebaseapp.com/" target="_new" fill="outline" slot="end">
			View
		</ion-button>
	</ion-item>

	<ion-item>
		<ion-label> Visit Ionic component docs </ion-label>
		<ion-button
			href="https://ionicframework.com/docs/components"
			target="_new"
			fill="outline"
			slot="end"
		>
			View
		</ion-button>
	</ion-item>

	<ion-item>
		<ion-label> Visit Svelte Kit docs </ion-label>
		<ion-button
			href="https://kit.svelte.dev/docs/introduction"
			target="_new"
			fill="outline"
			slot="end"
		>
			View
		</ion-button>
	</ion-item>

	<ion-item>
		<ion-label> Visit Svelte docs </ion-label>
		<ion-button href="https://svelte.dev/docs" target="_new" fill="outline" slot="end">
			View
		</ion-button>
	</ion-item>
</ion-card>

<ion-card>
	<ion-item>
		<ion-label> Live update Test </ion-label>
		<ion-button href="#" fill="outline" slot="end"> View </ion-button>
		<ion-button role="button" tabindex="0" on:click={showSimpleAlert} on:keypress={showSimpleAlert}>
			Click Me!
		</ion-button>
	</ion-item>
</ion-card>
