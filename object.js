let emp = [
                {'id':101, 'name':'varsha kushwah', 'designation':'software engineer', 'salary':100000},
                {'id':102, 'name':'mansi chouhan', 'designation':'project manager', 'salary':100000},
                {'id':103, 'name':'shivani mathe', 'designation':'UX designer', 'salary':85000},
                {'id':104, 'name':'saloni rajput', 'designation':'data scientist', 'salary':90000}
            ];

            function displayTable(emp)
            {
                let tableHTML = "<table border='1' width='100%'><tr><th>ID</th><th>Name</th><th>Designation</th><th>Salary</th></tr>";                
                for(let i of emp)
                {
                    tableHTML += `
                    <tr>
                        <td>${i.id}</td>
                        <td>${i.name}</td>
                        <td>${i.designation}</td>
                        <td>${i.salary}</td>
                    </tr>`;
                }
                tableHTML += '</table>';
                document.getElementById('tableContainer').innerHTML += tableHTML;
            
            }



            displayTable(emp);
