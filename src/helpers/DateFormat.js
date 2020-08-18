class Format {
    static DateOnly(value) {
        let selectedDate = new Intl.DateTimeFormat('en-US', {
            month: 'long',
            day: 'numeric',
        }).format(new Date(value))
        return selectedDate;
    }
}

export default Format;