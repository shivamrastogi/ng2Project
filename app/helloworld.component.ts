import {Component} from '@angular/core';
import {WelcomeContainer} from './containers/welcome';

@Component({
	selector : 'hello',
	template : `
	<app-bar>
	</app-bar>
	<welcome-container>
	</welcome-container>`
})
export class HelloWorldComponent {

}