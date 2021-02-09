class D {

	/**
	 * constructor
	 * @param {String} input string, int
	*/

	constructor(...args) {
		this.date = new Date(...args)
    this.monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    this.dayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
	}

	/**
	 * year
	 * @returns {Integer} full year
	*/
  year() {
    return this.date.getFullYear()
  }

	/**
	 * yr
	 * @returns {String} short year
	*/
  yr() {
    const strYear = this.date.getFullYear().toString()
    return strYear.slice(2)
  }

	/**
	 * month
	 * @returns {String} monthName
	*/
  month() {
    return this.monthName[this.date.getMonth()]
  }


	/**
	 * day
	 * @returns {String} day name
	*/
  day() {
    return this.dayName[this.date.getDay()]
  }

	/**
	 * hours
	 * @returns {String} hour
	*/
  hours() {
    return this.date.getHours()
  }


	/**
	 * mins
	 * @returns {String} mins
	*/
  mins() {
    return this.date.getMinutes()
  }


	/**
	 * secs
	 * @returns {String} secs
	*/
  secs() {
    return this.date.getSeconds()
  }


	/**
	 * format
	 * @returns {String} date format in the following manner: y/m/d   H:I:S   h:i:s   Y-M-D   h:I:S
	*/
  format(fT) {
		const _year = this.year()
		const _month = this.month()
		const _day = this.day()
		const _hours = this.hours()
		const _mins = this.mins()
		const _secs = this.secs()

		if (fT) {
			if (fT.indexOf("/") !== -1) {
				 const short_day = _day.toString().slice(0, 3)
	       return `${this.yr()}/${_month}/${short_day}`
	     } else if (fT.indexOf("-") !== -1) {
	       return `${_year}-${_month}-${_day}  ${_hours}:${_mins}:${_secs}`
	     } else if (fT.indexOf("i") !== -1) {
	       return `${_hours}:${_mins}:${_secs}`
	     } else if (fT.indexOf("I") !== -1) {

				 if (_hours < 10 && _mins < 10 && _secs < 10) {
					 return `0${_hours}:0${_mins}:0${_secs}`
				 } else if (_mins < 10 && _secs < 10) {
					 return `${_hours}:0${_mins}:0${_secs}`
				 } else if (_mins < 10 && _secs < 10) {
					 return `${_hours}:0${_mins}:0${_secs}`
				 } else if (_hours < 10) {
					 return `0${_hours}:${_mins}:${_secs}`
				 } else if (_secs < 10) {
				 	return `${_hours}:${_mins}:0${_secs}`
				} else if (_mins < 10) {
				 	return `${_hours}:0${_mins}:${_secs}`
				}
				return `${_hours}:${_mins}:${_secs}`
			 }
		} else {
			return `${_year} ${_month} ${_day} `
		}
  }

	/**
	 * when()
	 * @returns {String} the time interval between now and the date
	*/
	when() {
		const diff_ms = Date.now() - this.date
		const dt = new Date(diff_ms)
		const _when = Math.abs(dt.getUTCFullYear() - 1970)
		if (_when === 0) {
			return 'today'
		} else if (_when > 1) {
			return `${_when} years from now`
		} else {
			return `less than ${_when} year from now`
		}
	}


	/**
	 * getYear()
	 * @returns {String}  year
	*/
  get getYear() {
		return this.year()
	}

	/**
	 * getMonth()
	 * @returns {String}  month
	*/
	get getMonth() {
		return this.month()
	}

	/**
	 * getDay()
	 * @returns {String}  day
	*/
	get getDay() {
		return this.day()
	}
}

module.exports = D
