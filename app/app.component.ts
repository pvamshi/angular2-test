import {Component} from 'angular2/core';
import {TestComponent} from './test.component';

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App demo</h1><test>',
    directives: [TestComponent]
})
export class AppComponent { }
