import * as moment from 'moment'
moment.locale("pt-br")

/* EXERCICIO 1 */
type event = {
    name: string,
    description: string,
    startAt: moment.Moment,
    finishAt: moment.Moment
}

const allEvents: event[] = [
    {
		name: "Reunião",
		description: "Reunião muito importante",
		startAt: moment("25/06/2020 15:00", "DD/MM/YYYY HH:mm"),
	 	finishAt: moment("25/06/2020 16:00", "DD/MM/YYYY HH:mm")
	},
	{
		name: "Meet Up",
		description: "conhecer e ajudar a galera",
		startAt: moment("26/06/2020 17:00", "DD/MM/YYYY HH:mm"),
	 	finishAt: moment("26/06/2020 18:00", "DD/MM/YYYY HH:mm")
	}
]

