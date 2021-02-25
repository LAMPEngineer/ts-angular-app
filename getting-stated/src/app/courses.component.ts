import { Component } from '@angular/core';


@Component({
	selector: 'courses',
	template: `
	<h2>{{ getTitle() }}</h2>
	<ul>
		<li *ngFor="let course of courses"> 
			{{ course }}
		</li>
	</ul>
	`
})

export class CoursesComponent {
	title = "List of courses";

	getTitle() {
		return this.title;
	}

	courses = ["course1", "course2", "course3"];

}