<script lang="ts">
	import { alertController } from 'ionic-svelte';
	import IonPage from 'ionic-svelte/components/IonPage.svelte';
	import {
		NavigationBar,
		NavigationBarPluginEvents
	} from '@mauricewegner/capacitor-navigation-bar';
	import { logoGithub } from 'ionicons/icons';

	import defAV from '$lib/assets/avatar.png';

	async function showAlert(options) {
		const alert = await alertController.create(options);
		alert.present();
	}

	async function showSimpleAlert() {
		const options = {
			header: 'Test Message',
			subHeader: '',
			message: 'Test successfull!',
			buttons: ['Ok']
		};
		return showAlert(options);
	}
	async function showNavigationBar() {
		NavigationBar.show();
	}
	async function hideNavigationBar() {
		NavigationBar.hide();
	}
	async function changeNavbarColor(navColor) {
		if (navColor === 'light') {
			NavigationBar.setColor({ color: '#FFFFFF', darkButtons: true });
		} else if (navColor === 'dark') {
			NavigationBar.setColor({ color: '#000000', darkButtons: false });
		} else if (navColor === 'transparent') {
			NavigationBar.setColor({ color: '#00000000', darkButtons: false });
		}
	}
</script>

<svelte:head>
	<title>TestApp</title>
</svelte:head>

<IonPage>
	<ion-header>
		<ion-toolbar mode="ios" class="hf-toolbar">
			<ion-buttons spot="start">
				<ion-button href="https://github.com/Sohil876" target="_new">
					<ion-avatar slot="start">
						<img alt="avatar" src={defAV} />
					</ion-avatar>
				</ion-button>
			</ion-buttons>
			<ion-title class="head-title"> TestApp </ion-title>
			<ion-buttons slot="end">
				<ion-button
					href="https://github.com/Sohil876/testApp-svelte"
					target="_new"
					color="dark"
					fill="outline"
				>
					<ion-icon icon={logoGithub} />
				</ion-button>
			</ion-buttons>
		</ion-toolbar>
	</ion-header>

	<ion-card class="card-scrollable">
		<!--<ion-card-header>
			<ion-card-subtitle> Subtitle </ion-card-subtitle>
			<ion-card-title> Header </ion-card-title>
		</ion-card-header>-->

		<ion-card-content class="card-content-scrollable">
			<div>
				<ion-button
					role="button"
					tabindex="0"
					mode="md"
					fill="outline"
					size="small"
					on:click={() => showNavigationBar()}
					on:keypress={() => showNavigationBar()}
				>
					ShowNavbar
				</ion-button>
				<ion-button
					role="button"
					tabindex="0"
					mode="md"
					fill="outline"
					size="small"
					on:click={() => hideNavigationBar()}
					on:keypress={() => hideNavigationBar()}
				>
					HideNavbar
				</ion-button>
				<ion-button
					role="button"
					tabindex="0"
					mode="md"
					fill="outline"
					size="small"
					on:click={() => changeNavbarColor('light')}
					on:keydown={() => changeNavbarColor('light')}
				>
					LightNavbar
				</ion-button>
				<ion-button
					role="button"
					tabindex="0"
					mode="md"
					fill="outline"
					size="small"
					on:click={() => changeNavbarColor('dark')}
					on:keydown={() => changeNavbarColor('dark')}
				>
					DarkNavbar
				</ion-button>
				<ion-button
					role="button"
					tabindex="0"
					mode="md"
					fill="outline"
					size="small"
					on:click={() => changeNavbarColor('transparent')}
					on:keydown={() => changeNavbarColor('transparent')}
				>
					TransparentNavbar
				</ion-button>
			</div>

			<div>
				<ion-item>
					Ionic Showcase web app
					<ion-button
						href="https://ionicsvelte.firebaseapp.com/"
						target="_new"
						fill="outline"
						size="small"
						slot="end"
					>
						View
					</ion-button>
				</ion-item>
				<ion-item>
					Ionic component docs
					<ion-button
						href="https://ionicframework.com/docs/components"
						target="_new"
						fill="outline"
						size="small"
						slot="end"
					>
						View
					</ion-button>
				</ion-item>
				<ion-item>
					Svelte docs
					<ion-button
						href="https://svelte.dev/docs"
						target="_new"
						fill="outline"
						size="small"
						slot="end"
					>
						View
					</ion-button>
				</ion-item>
				<ion-item>
					Svelte Kit docs
					<ion-button
						href="https://kit.svelte.dev/docs/introduction"
						target="_new"
						fill="outline"
						size="small"
						slot="end"
					>
						View
					</ion-button>
				</ion-item>
			</div>

			<div>
				<ion-item>
					<ion-label> Live update Test </ion-label>
					<ion-button
						role="button"
						tabindex="0"
						mode="md"
						fill="outline"
						size="small"
						on:click={() => showSimpleAlert()}
						on:keypress={() => showSimpleAlert()}
					>
						Click Me!
					</ion-button>
				</ion-item>
			</div>
		</ion-card-content>
	</ion-card>

	<ion-footer class="ion-padding">
		<ion-toolbar mode="ios" class="hf-toolbar">
			<ion-title> &copy; 2023 </ion-title>
		</ion-toolbar>
	</ion-footer>
</IonPage>

<style lang="css">
	.hf-toolbar {
		--background: #00000000;
		padding: 1%;
		margin: 1%;
	}

	.card-scrollable {
		min-height: 30%;
	}

	.card-content-scrollable {
		height: 100%;
		overflow: scroll;
	}
</style>
