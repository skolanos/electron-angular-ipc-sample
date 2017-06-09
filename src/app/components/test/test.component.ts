import { Component, OnInit, NgZone } from '@angular/core';

declare var ipcRenderer: any;
declare var remote: any;

@Component({
  selector: 'test-component',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
	private ipc_info: string;
	private remote_info: string;
	private count: number;

	constructor(zone: NgZone) {
		this.count = 0;
		this.ipc_info = '';
		this.remote_info = '';

		ipcRenderer.on('get-data-replay', (event, arg) => {
			// console.log('ipc-receive: ' + arg);
			zone.run(() => {
				this.count += 1;
				this.ipc_info = this.count + ' ' + arg + '\n';

				// console.log('remote-data: ', remote.getGlobal('sharedData').deckDef);
				this.remote_info = '';
				for (let i = 0; i < remote.getGlobal('sharedData').deckDef.length; i += 1) {
					this.remote_info += remote.getGlobal('sharedData').deckDef[i] + '\n';
				}
			});
		});
	}
	ngOnInit() {
	}
	sendClick(): void {
		ipcRenderer.send('get-data');
	}
}
