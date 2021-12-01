let arrHead = new Array();
arrHead = ['', 'Course', 'Section', 'Instructor']; // table headers.

// TABLE structure by adding few headers.
function createTable() {
    let courseTable = document.createElement('table');
    courseTable.setAttribute('id', 'courseTable');  // table id.

    let tr = courseTable.insertRow(-1);

    for (let h = 0; h < arrHead.length; h++) {
        let th = document.createElement('th'); // the header object.
        th.innerHTML = arrHead[h];
        tr.appendChild(th);
    }

    // add table to a container.
    let div = document.getElementById('cont');
    div.appendChild(courseTable);    
}

// function to add new row.
function addRow() {
    let courseTab = document.getElementById('courseTable');

    let rowCnt = courseTab.rows.length;    // get the number of rows.
    let tr = courseTab.insertRow(rowCnt); // table row.
    tr = courseTab.insertRow(rowCnt);

    for (let c = 0; c < arrHead.length; c++) {
        let td = document.createElement('td');          // TABLE DEFINITION.
        td = tr.insertCell(c);

        // remove button for first row
        if (c == 0) {
            // add a button control.
            let button = document.createElement('input');

            // set the attributes.
            button.setAttribute('type', 'button');
            button.setAttribute('value', 'Remove');

            // add button's "onclick" event.
            button.setAttribute('onclick', 'removeRow(this)'); //remove row

            td.appendChild(button);
        }

        // text fields for rows
        else {
            let ele = document.createElement('input');
            ele.setAttribute('type', 'text');
            ele.setAttribute('value', '');

            td.appendChild(ele);
        }
    }
}

// function to delete a row.
function removeRow(oButton) {
    let courseTab = document.getElementById('courseTable');
    courseTab.deleteRow(oButton.parentNode.parentNode.rowIndex); // buttton -> td -> tr
}

// function to extract and submit table data.
function submit() {
    let myTab = document.getElementById('courseTable');
    let arrValues = new Array();

    // loop through each row of the table.
    for (row = 1; row < myTab.rows.length - 1; row++) {
        // loop through each cell in a row.
        for (c = 0; c < myTab.rows[row].cells.length; c++) {
            let element = myTab.rows.item(row).cells[c];
            if (element.childNodes[0].getAttribute('type') == 'text') {
                arrValues.push("'" + element.childNodes[0].value + "'");
            }
        }
    }
    
    // finally, show the result in the console.
    console.log(arrValues);
}