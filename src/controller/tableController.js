let filters = {
    "Supervisor": [],
    "Class": [],
    "Department": [],
    "Subsidiary": []
}

const getFilters = (data) => {
    let _supervisor = []
    let _class = []
    let _department = []
    let _subsidiary = []
    for (let d of data) {
        if (!(_supervisor.indexOf(d['Supervisor']) != -1))
            _supervisor.push(d['Supervisor'])
        if (!(_class.indexOf(d['Class']) != -1))
            _class.push(d['Class'])
        if (!(_department.indexOf(d['Department']) != -1))
            _department.push(d['Department'])
        if (!(_subsidiary.indexOf(d['Subsidiary']) != -1))
            _subsidiary.push(d['Subsidiary'])
    }
    $(".filters").html('')
    appendFilters(_supervisor, 'Supervisor')
    appendFilters(_class, 'Class')
    appendFilters(_department, 'Department')
    appendFilters(_subsidiary, 'Subsidiary')

    $(".checkbox").change(function (e) {
        let type = ($($(e.currentTarget).children()[1])[0].className)
        let value = ($($(e.currentTarget).children()[1]).html())
        let checked = ($($(e.currentTarget).children()[0])[0].checked)
        updateTable(data, value, checked, type)
    });
}
const appendFilters = (_list, _name) => {
    let html =
        `<div class="dropdown d-inline">
            <button class="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            ${_name}
            </button>
            <div class="dropdown-menu" aria-labelledby="">`
    for (let l of _list)
        html += `<label class="checkbox"><input type="checkbox"> <span class="${_name}">${l}</span>  </label><br>`

    $(".filters").append(`${html}</div></div>`)
}
const groupAndSortData = (data) => {
    let sortedData = {}
    for (let d of data) {
        if (sortedData[d['Supervisor']] == undefined)
            sortedData[d['Supervisor']] = [d]
        else
            sortedData[d['Supervisor']].push(d)
    }
    for (let sd in sortedData) {
        sortedData[sd].sort((a, b) => {
            b = b['Full name']
            a = a['Full name']
            return a < b ? -1 : a > b ? 1 : 0;
        });
    }
    return sortedData;
}

const updateTable = (data, value, check, type) => {
    let final_data = []
    let filtered = false
    if (check)
        filters[type].push(value)
    else
        filters[type].remove(value)

    for (let key in filters) {
        for (let f of filters[key]) {
            filtered = true
            final_data = final_data.concat(data.filter(x => x[key] === f))
        }
    }

    if (filtered)
        fillTable(final_data, false)
    else
        fillTable(data, false)

}

export function fillTable(data, first) {
    if (first)
        getFilters(data)

    data = groupAndSortData(data)
    $('#employees-data tbody').html('');
    let html = ''
    for (let key in data)
        for (let d of data[key])
            html += `<tr>
                        <th scope="row">${d['ID']}</th>
                        <td>${d['Full name']}</td>
                        <td>${d['Supervisor']}</td>
                        <td>${d['Class']}</td>
                        <td>${d['Department']}</td>
                        <td>${d['Subsidiary']}</td>
                    </tr>`
    $('#employees-data').DataTable().clear().destroy();
    $('#employees-data tbody').append(html);
    $('#employees-data').DataTable({
        dom: 'Bfrtip',
        buttons: [
            'excelHtml5',
            'csvHtml5',
            'pdfHtml5',
            'print'
        ]
    });




}