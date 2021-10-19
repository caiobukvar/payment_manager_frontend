export function sortDataByName(a, b) {
    return (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1);
}

export function sortData(state, setState, sorting) {
    const ordered = [...state];
    if (!!ordered[0]?.name) {
        ordered.sort(sortDataByName);

        if (sorting === 'desc') {
            setState(ordered.reverse());
        }
    }
    return setState(ordered);
}