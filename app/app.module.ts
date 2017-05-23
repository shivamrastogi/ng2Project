import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HelloWorldComponent } from './helloworld.component';
import { Welcome, WelcomeContainer } from './containers/welcome/index';
import {NoteContainer} from './containers/note-container';
import {AppBar, NoteCard, NoteCreator, ColorPicker} from './ui/index';



@NgModule({
	imports : [BrowserModule, FormsModule, HttpModule],
	declarations : [
	HelloWorldComponent,
	WelcomeContainer,
	Welcome,
	AppBar,
	NoteCard,
	NoteContainer,
	NoteCreator,
	ColorPicker
	],
	bootstrap: [
		HelloWorldComponent
	]

})
export class AppModule {

}