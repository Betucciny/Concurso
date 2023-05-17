const formatEventsForFullCalendar = (events) => {
    const formattedEventsI = [];
    const formattedEventsR = [];

    events.forEach((event) => {
        if (event.recurrencia === 0) {
            // Punctual event
            const formattedEvent = {
                id: event.id,
                title: event.titulo,
                start: new Date(event.fecha),
                end: calculateEndDate(event.fecha, event.duracion),
                description: event.descripcion,
                // Other custom fields you need
            };

            formattedEventsI.push(formattedEvent);
        } else if (event.recurrencia === 1) {
            // Recurrent event
            const recurrenceDays = getRecurrenceDays(event.dia_semana);

            recurrenceDays.forEach((day) => {
                const recurringStartDates = getRecurringStartDates(day);

                recurringStartDates.forEach((startDate) => {
                    startDate.setHours(event.hora.split(':')[0]);
                    startDate.setMinutes(event.hora.split(':')[1]);
                    startDate.setSeconds(event.hora.split(':')[2]);

                    const endDate = calculateEndDate(startDate, event.duracion);

                    const formattedEvent = {
                        id: event.id,
                        title: event.titulo,
                        start: startDate,
                        end: endDate,
                        description: event.descripcion,
                        // Other custom fields you need
                    };

                    formattedEventsR.push(formattedEvent);
                });
            });
        }
    });

    return [formattedEventsI, formattedEventsR];
};

// Helper function to calculate the end date based on the start date and duration
const calculateEndDate = (startDate, duration) => {
    const endDate = new Date(startDate);
    const durationParts = duration.split(':');

    endDate.setHours(endDate.getHours() + parseInt(durationParts[0]));
    endDate.setMinutes(endDate.getMinutes() + parseInt(durationParts[1]));
    endDate.setSeconds(endDate.getSeconds() + parseInt(durationParts[2]));

    return endDate;
};

// Helper function to get the recurring start dates for the previous week, current week, and next week
const getRecurringStartDates = (dayOfWeek) => {
    const today = new Date();

    const recurringStartDates = [];
    const prevWeekStartDate = getWeekStartDate(today, -1);
    const currWeekStartDate = getWeekStartDate(today, 0);
    const nextWeekStartDate = getWeekStartDate(today, 1);

    recurringStartDates.push(getRecurringStartDate(dayOfWeek, prevWeekStartDate));
    recurringStartDates.push(getRecurringStartDate(dayOfWeek, currWeekStartDate));
    recurringStartDates.push(getRecurringStartDate(dayOfWeek, nextWeekStartDate));

    return recurringStartDates;
};

// Helper function to get the start date for the recurring event based on the specific day of the week and the week start date
const getRecurringStartDate = (dayOfWeek, weekStartDate) => {
    const startDate = new Date(weekStartDate);
    startDate.setDate(startDate.getDate() + dayOfWeek);
    return startDate;
};

// Helper function to get the week start date based on the provided reference date and the week offset
const getWeekStartDate = (referenceDate, weekOffset) => {
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - startDate.getDay() + weekOffset * 7);
    startDate.setHours(0, 0, 0, 0);
    return startDate;
};

// Helper function to get the recurrence days based on the provided weekday
const getRecurrenceDays = (weekday) => {
    const days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
    const weekdayIndex = days.findIndex((day) => day.toLowerCase() === weekday.toLowerCase());

    return [weekdayIndex];
};

const getMinutesFromDuration = (duration) => {
    const durationParts = duration.split(':');
    const hours = parseInt(durationParts[0]);
    const minutes = parseInt(durationParts[1]);

    return hours * 60 + minutes;
};

const getYMD = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const paddedString = month.toString().padStart(2, '0')

    return `${year}-${paddedString}-${day}`;
}


export {formatEventsForFullCalendar, getMinutesFromDuration, getYMD};