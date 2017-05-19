import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HelloWorldComponent} from './helloworld.component';
import {WelcomeContainer} from './containers/welcome-container';
import {Welcome} from './containers/welcome';
import {NoteContainer} from './containers/note-container';
import {AppBar, NoteCard} from './ui/index';


@NgModule({
	imports : [BrowserModule],
	declarations : [
	HelloWorldComponent,
	WelcomeContainer,
	Welcome,
	AppBar,
	NoteCard,
	NoteContainer
	],
	bootstrap : [HelloWorldComponent]
	
})
export class AppModule{

}