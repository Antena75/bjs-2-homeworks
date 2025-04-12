class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
	}

	addClock(time, callback) {
		if (time === null || callback === undefined) {
			throw new Error('Отсутствуют обязательные аргументы');
		}

		// if (this.alarmCollection.find(alarm => alarm.time === time) !== undefined) {
		// 	console.warn('Уже присутствует звонок на это же время');
		// }
		this.alarmCollection.forEach(alarm => {
			if (alarm.time === time) {
				console.warn('Уже присутствует звонок на это же время');
			}
		})
		this.alarmCollection.push({
			callback: callback,
			time: time,
			canCall: true
		});

	}

	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
	}

	getCurrentFormattedTime() {
		let time = new Date();
		return ("0" + time.getHours()).slice(-2) + ":" + ("0" + time.getMinutes()).slice(-2);
	}

	start() {
		if (this.intervalId != null) return;
		this.intervalId = setInterval(() => {
			this.alarmCollection.forEach(alarm => {
				if (alarm.time === this.getCurrentFormattedTime() && alarm.canCall) {
					alarm.canCall = false;
					alarm.callback();
				}
			})
		}, 1000)
	}

	stop() {
		clearInterval(this.intervalId);
		this.intervalId = null;
	}

	resetAllCalls() {
		this.alarmCollection.forEach(alarm => alarm.canCall = true);
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
}