import React, { Fragment, useState } from "react";
import readXlsxFile from 'read-excel-file';
import * as XLSX from 'xlsx';

const Search = () => {

    const [classList, setClassList] = useState();

    const autoHeight = () => {
        let textEle = document.querySelector('#searchText');
        textEle.style.height = '1px';
        textEle.style.height = (12 + textEle.scrollHeight) + 'px';
    }

    const searchName = () => {
        if(classList === undefined)
        {
            alert('출석부 선택을 먼저 해주세요.');
            return;
        }

        let classNo = document.querySelector("#classNo");

        if(classNo.value === "")
        {
            alert("반을 선택해 주세요.")
            return;
        }

        let textEle = document.querySelector('#searchText');
        let div = document.querySelector('#checkDiv');

        div.innerText = "";

        let table = document.createElement('table');
        let noTh = document.createElement('th');
        let nameTh = document.createElement('th');
        let checkTh = document.createElement('th');

        noTh.innerText = "번호";
        nameTh.innerText = "이름";
        checkTh.innerText = "출석";

        noTh.style.padding = "10px";
        nameTh.style.padding = "10px";
        checkTh.style.padding = "10px";

        table.border = 1;
        table.style.textAlign = "center";

        table.append(noTh);
        table.append(nameTh);
        table.append(checkTh);
        div.append(table);

        for(let i=0; i<classList[classNo.value-1].length; i++)
        {
            let tr = document.createElement('tr');
            let noTd = document.createElement('td');
            let nameTd = document.createElement('td');
            let checkTd = document.createElement('td');

            noTd.innerText = classList[classNo.value-1][i][0];
            nameTd.innerText = classList[classNo.value-1][i][1];

            if (textEle.value.indexOf(classList[classNo.value-1][i][1]) != -1) {
                checkTd.innerText = "O";
                noTd.style.color = "green";
                nameTd.style.color = "green";
                checkTd.style.color = "green";
            }
            else {
                checkTd.innerText = "X";
                noTd.style.color = "red";
                nameTd.style.color = "red";
                checkTd.style.color = "red";
            }

            noTd.style.padding = "10px";
            nameTd.style.padding = "10px";
            checkTd.style.padding = "10px";

            tr.append(noTd);
            tr.append(nameTd);
            tr.append(checkTd);
            table.append(tr);
        }
    }

    const checkClassNo = () => {
        let classNo = document.querySelector("#classNo");

        if(classNo.value === "")
        {
            alert("반을 선택해 주세요.");
            window.location = '.';
        }
    }

    const addClassList = (e) => {
        e.preventDefault();

        if(e.target.files.length === 0)
        {
            return;
        }
        
        let files = e.target.files, f = files[0];
        let reader = new FileReader();

        reader.onload = function (e) {
            let data = e.target.result;
            let readedData = XLSX.read(data, {type: 'binary'});
            let classArray = [];

            for(let i=0; i<readedData.SheetNames.length; i++)
            {
                const wsname = readedData.SheetNames[i];
                const ws = readedData.Sheets[wsname];
        
                /* Convert array to json*/
                const dataParse = XLSX.utils.sheet_to_json(ws, {header:1});
                classArray.push(dataParse);
            }
            setClassList(classArray);
        };

        reader.readAsBinaryString(f)

        e.target.files = null;
    }

    return (
        <Fragment>
            <input type="number" id="classNo"></input>반 <br />
            <input type="file" id="fileInput" onClick={checkClassNo} onChange={addClassList} />
            <button onClick={searchName}>출석체크</button>
            <div id="checkDiv"></div>
            <textarea id="searchText" onKeyDown={autoHeight} onKeyUp={autoHeight} style={{width:'100%', minHeight:'400px'}}></textarea>
        </Fragment>
    );
};

export default Search;
