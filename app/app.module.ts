import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HelloWorldComponent} from './helloworld.component';
import {WelcomeContainer} from './containers/welcome-container';
import {Welcome} from './containers/welcome';
import {NoteContainer} from './containers/note-container';
import {AppBar, NoteCard, NoteCreator} from './ui/index';


@NgModule({
	imports : [BrowserModule, FormsModule],
	declarations : [
	HelloWorldComponent,
	WelcomeContainer,
	Welcome,
	AppBar,
	NoteCard,
	NoteContainer,
	NoteCreator
	],
	bootstrap : [HelloWorldComponent]
	
})
export class AppModule{

}