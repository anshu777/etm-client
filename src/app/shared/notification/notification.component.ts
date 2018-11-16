import { Component, EventEmitter, Input, Output } from '@angular/core';

// import { Feature, NotificationPayload, NotificationStatus } from '../../services/signalr';
// import { NotificationType } from '../../store/notifications';

@Component({
	selector: 'pp-notification',
	styles: ['./notification.scss'],
	template: './notification.html'
})
export class NotificationComponent {

	@Input() title: string;
	//@Input() type: NotificationType;
	@Input() message: string;

	// @Input() set payload(payload: NotificationPayload) {
	// 	if (!!payload) {
	// 		this.setupMessagePayload(payload);
	// 	}
	// }

	@Output() dismiss: EventEmitter<any> = new EventEmitter();

	private messagePayload: any;
	//private messageType: NotificationStatus;
	//private featureName: Feature;

	private linkClicked($event) {
		if (!!this.messagePayload.callbackEvent) {
			this.messagePayload.callbackEvent.emit();
		}
		$event.preventDefault();
	}

	// private setupMessagePayload(payload: NotificationPayload): void {
	// 	this.messagePayload = payload.content;
	// 	this.messageType = <NotificationStatus>payload.messageType;
	// 	this.featureName = payload.featureName;
	// }
}
