import {Component} from '@angular/core';
import {WelcomeContainer} from './containers/welcome-container';

@Component({
	selector : 'hello',
	template : '<app-bar></app-bar><welcome-container>Hello World</welcome-container>'
})
export class HelloWorldComponent {

}