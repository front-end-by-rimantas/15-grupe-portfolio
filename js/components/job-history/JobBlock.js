class JobBlock {
    constructor( parentDOM, data ) {
        this.parentDOM = parentDOM;
        this.DOM = null;
        this.data = data;

        this.init();
    }
    
    init() {
        this.render();
    }

    render() {
        let location = '';
        const { city, country } = this.data.location;
        
        if ( city ) {
            location += city;
        }
        if ( country ) {
            if ( city ) {
                location += ', ';
            }
            location += country;
        }

        const HTML = `
            <div class="job-item">
                <div class="header">
                    <div class="texts">
                        <h3>${this.data.jobTitle}</h3>
                        <p>${location}</p>
                    </div>
                    <div class="btn">${this.formatDate(this.data.duration)}</div>
                </div>
                <p>${this.data.description}</p>
            </div>`;

        this.parentDOM.insertAdjacentHTML('beforeend', HTML);
    }

    formatDate( date ) {
        // Jul'15 to Dec'25
        // Jul'15 to Present
        // Jul'15 to Aug'18

        const {from, untill} = date;

        let time = '';
        if ( from && typeof(from) === 'object' ) {
            time += this.dateObjectToMonthYear(from);
        } else {
            time += 'Birth';
        }

        time += ' to ';

        if ( untill && typeof(untill) === 'object' ) {
            time += this.dateObjectToMonthYear(untill);
        } else {
            time += 'Present';
        }

        return time;
    }

    dateObjectToMonthYear( obj ) {
        const {month, year} = obj;
        const shortYear = year % 100;
        const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        
        return monthNames[month] + "'" + (shortYear > 9 ? shortYear : '0'+shortYear);
    }
}

export default JobBlock;