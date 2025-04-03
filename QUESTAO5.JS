function manageEvents(events, newEvent, position, removeEvent) {
    if (removeEvent) {
        events = events.filter(event => event !== removeEvent);
    }
    events.splice(position, 0, newEvent);
    return events.sort();
}
