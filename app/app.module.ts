import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HelloWorldComponent} from './helloworld.component';
import {WelcomeContainer} from './containers/welcome-container';
import {Welcome} from './containers/welcome';
import {AppBar} from './ui/index';


@NgModule({
	imports : [BrowserModule],
	declarations : [
	HelloWorldComponent,
	WelcomeContainer,
	Welcome,
	AppBar
	],
	bootstrap : [HelloWorldComponent]
	
})
export class AppModule{

}