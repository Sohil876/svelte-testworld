<script lang="ts">
	import { alertController } from 'ionic-svelte';
	import IonPage from 'ionic-svelte/components/IonPage.svelte';
	import {
		NavigationBar,
		NavigationBarPluginEvents
	} from '@mauricewegner/capacitor-navigation-bar';

	import defAV from '$lib/assets/avatar.png';

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
	const showNavigationBar = async () => {
		NavigationBar.show();
	};
	const hideNavigationBar = async () => {
		NavigationBar.hide();
	};
</script>

<svelte:head>
	<title>TestApp</title>
</svelte:head>

<IonPage>
	<ion-card color="transparent">
		<ion-card-content>
			<ion-avatar>
				<img alt="avatar" src={defAV} />
			</ion-avatar>
		</ion-card-content>
	</ion-card>

	<ion-card>
		<ion-card-header>
			<ion-card-subtitle> TestApp </ion-card-subtitle>
			<ion-card-title> Header </ion-card-title>
		</ion-card-header>

		<ion-card-content> Card Content </ion-card-content>

		<ion-item>
			<ion-button
				role="button"
				tabindex="0"
				mode="md"
				fill="outline"
				on:click={showNavigationBar}
				on:keypress={showNavigationBar}
			>
				ShowNavbar
			</ion-button>
			<ion-button
				role="button"
				tabindex="0"
				mode="md"
				fill="outline"
				on:click={hideNavigationBar}
				on:keypress={hideNavigationBar}
			>
				HideNavbar
			</ion-button>
			<ion-button
				role="button"
				tabindex="0"
				mode="md"
				fill="outline"
				on:click={NavigationBar.setColor({ color: '#FF0000', darkButtons: true })}
				on:keypress={NavigationBar.setColor({ color: '#FF0000', darkButtons: true })}
			>
				DarkNavbar
			</ion-button>
		</ion-item>

		<ion-item>
			<ion-label> Visit Ionic Showcase app with sourceviewer </ion-label>
			<ion-button
				href="https://ionicsvelte.firebaseapp.com/"
				target="_new"
				fill="outline"
				slot="end"
			>
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
		<ion-card-header> Live update Test </ion-card-header>
		<ion-card-content>
			<ion-button
				role="button"
				tabindex="0"
				mode="md"
				shape="round"
				fill="outline"
				on:click={showSimpleAlert}
				on:keypress={showSimpleAlert}
			>
				Click Me!
			</ion-button>
		</ion-card-content>
	</ion-card>
</IonPage>
