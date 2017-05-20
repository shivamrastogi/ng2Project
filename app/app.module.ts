import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HelloWorldComponent } from './helloworld.component';
import { Welcome, WelcomeContainer } from './containers/welcome';
import { AppBar } from './ui';


@NgModule({
	imports: [BrowserModule],
	declarations: [
		HelloWorldComponent,
		WelcomeContainer,
		Welcome,
		AppBar
	],
	bootstrap: [
		HelloWorldComponent
		]

})
export class AppModule {

}