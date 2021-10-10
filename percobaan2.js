let student_data = document.getElementById("student_table_data");
let Search_student = document.getElementById("search_student");
let dataStudent = [
    {
        "NIM" : "105021810050",
        "fullName" : "Junior Luntungan",
        "gender" : "Male",
        "faculty" : "Fakultas Ilmu Komputer",
        "programOfStudy" : "Informatika"
    },
]
function show_add_student_form_button() {
    let button = document.getElementById("Add_student_button");

    if(button.innerText == "Show Form Add New Student") {
        button.innerText = "Hide Form Add New Student";
    } else if(button.innerText == "Hide Form Add New Student") {
        button.innerText = "Show Form Add New Student";
    }
}

function Add_student() {
    let NIM = document.getElementById("NIM").value;
    let fullName = document.getElementById("FullName").value;
    
    let gender = "";
    if(document.getElementById("gender_male").checked) {
        gender = "Male";
    } else if (document.getElementById("gender_female").checked)
    {
        gender = "Female";
    }

    let faculty = document.getElementById("Faculty").value;
    let programOfStudy = document.getElementById("ProgramOfStudy");
    programOfStudy = programOfStudy.options[programOfStudy.selectedIndex].text;

    dataStudent.push({
        "NIM" : NIM,
        "fullName" : fullName,
        "gender" : gender,
        "faculty" : faculty,
        "programOfStudy" : programOfStudy
    });

    refresh_student_table_data();
    document.getElementById("NIM").value = "";
    document.getElementById("FullName").value = "";
    document.getElementById("Faculty").selectedIndex = 0;
    {
        let ProgramOfStudy = document.getElementById("ProgramOfStudy");
        ProgramOfStudy.textContent = ''; //kill all children element sadisticialy
        ProgramOfStudy.appendChild((() => 
        {
            let x = document.createElement("option"); 
            x.innerText = "--- Select Program Of Study ---"; return x;})());
        ProgramOfStudy.selectedIndex = 0;
    }
}
function createListOption(value, innerHtml) {
    let newOption = document.createElement("option");

    newOption.value = value;
    newOption.innerHTML = innerHtml;

    return newOption;
}

function Faculty_onchange() {
    let Faculty_list = document.getElementById("Faculty");
    let ProgramOfStudy_list = document.getElementById("ProgramOfStudy");

    let selected_faculty = Faculty_list.options[Faculty_list.selectedIndex].text;

    let Pilihan = [
        {
            "option" : "Pascasarjana",
            "list" : ["Magister Manajemen", "Magiser Teologi"]
        },
        {
            "option" : "Fakultas Filsafat",
            "list" : ["Ilmu Filsafat"]
        },
        {
            "option" : "Fakultas Keguruan dan Ilmu Pendidikan",
            "list" : ["Pendidikan Agama", "Pendidikan Bahasa Inggris","Pendidikan Ekonomi", "Pendidikan Luar Sekolah"]
        },
        {
            "option" : "Fakultas Ekonomi dan Bisnis",
            "list" : ["Akuntansi", "Manajemen"]
        },
        {
            "option" : "Fakultas Pertanian",
            "list" : ["Agroteknologi"]
        },
        {
            "option" : "Fakultas Ilmu Komputer",
            "list" : ["Informatika", "Sistem Informasi"]
        },
        {
            "option" : "Fakultas Keperawatan",
            "list" : ["Profesi Ners", "Keperawatan"]
        },
        {
            "option" : "Akademi Sekretaris Manajemen Indonesia Klabat",
            "list" : ["Sekretaris (D3)"]
        }
    ];

    //clear child
    while(ProgramOfStudy_list.children.length > 0) {
        ProgramOfStudy_list.removeChild(ProgramOfStudy_list.children[0]);
    }

    for(let i=0; i<Pilihan .length; i++) {
        if(selected_faculty == Pilihan [i].option) {
            for(let j=0; j<Pilihan [i].list.length; j++) {
                ProgramOfStudy_list.appendChild(createListOption(i, Pilihan[i].list[j]));
            }
        }
    }
}

refresh_student_table_data();

function refresh_student_table_data() {
    //clear table every refresh
    while(student_table_data.children.length > 0) {
        student_table_data.removeChild(student_table_data.children[0]);
    }

    for(let i=0; i<dataStudent.length; i++) {
        let row = student_table_data.insertRow();
        
        let NIM = row.insertCell(0);
        NIM.innerHTML = dataStudent[i].NIM;

        let fullName = row.insertCell(1);
        fullName.innerHTML = dataStudent[i].fullName;

        let gender = row.insertCell(2);
        gender.innerHTML = dataStudent[i].gender;

        let faculty = row.insertCell(3);
        faculty.innerHTML = dataStudent[i].faculty;

        let programOfStudy = row.insertCell(4);
        programOfStudy.innerHTML = dataStudent[i].programOfStudy;

        let removeButton_cell = row.insertCell(5);
        
        let removeButton = document.createElement("button");
        removeButton.classList.add("btn");
        removeButton.classList.add("btn-danger");
        removeButton.classList.add("shadow-sm");
        removeButton.innerHTML = "X";
        removeButton.addEventListener('click', (e) => {
            dataStudent.splice(i, 1);
            refresh_student_table_data();
        })

        removeButton_cell.appendChild(removeButton);
    }
}



function search_student() {
    while(student_table_data.children.length > 0) {
        student_table_data.removeChild(student_table_data.children[0]);
    }

    for(let i=0; i<dataStudent.length; i++) {
        if(dataStudent[i].fullName.includes(Search_student.value))
        {
            let row = student_table_data.insertRow();
            
            let NIM = row.insertCell(0);
            NIM.innerHTML = dataStudent[i].NIM;

            let fullName = row.insertCell(1);
            fullName.innerHTML = dataStudent[i].fullName;

            let gender = row.insertCell(2);
            gender.innerHTML = dataStudent[i].gender;

            let faculty = row.insertCell(3);
            faculty.innerHTML = dataStudent[i].faculty;

            let programOfStudy = row.insertCell(4);
            programOfStudy.innerHTML = dataStudent[i].programOfStudy;

            let removeButton_cell = row.insertCell(5);
            
            let removeButton = document.createElement("button");
            removeButton.classList.add("btn");
            removeButton.classList.add("btn-danger");
            removeButton.classList.add("shadow-sm");
            removeButton.innerHTML = "X";
            removeButton.addEventListener('click', (e) => {
                dataStudent.splice(i, 1);
                refresh_student_table_data();
            })

            removeButton_cell.appendChild(removeButton);
        }
    }
}

function search_byFaculty() {
    let selectByFaculty = document.getElementById("selectByFaculty");
    selectByFaculty = selectByFaculty.options[selectByFaculty.selectedIndex];
    
    while(student_table_data.children.length > 0) {
        student_table_data.removeChild(student_table_data.children[0]);
    }

    for(let i=0; i<dataStudent.length; i++) {
        if(dataStudent[i].faculty == selectByFaculty.text)
        {
            let row = student_table_data.insertRow();
            
            let NIM = row.insertCell(0);
            NIM.innerHTML = dataStudent[i].NIM;

            let fullName = row.insertCell(1);
            fullName.innerHTML = dataStudent[i].fullName;

            let gender = row.insertCell(2);
            gender.innerHTML = dataStudent[i].gender;

            let faculty = row.insertCell(3);
            faculty.innerHTML = dataStudent[i].faculty;

            let programOfStudy = row.insertCell(4);
            programOfStudy.innerHTML = dataStudent[i].programOfStudy;

            let removeButton_cell = row.insertCell(5);
            
            let removeButton = document.createElement("button");
            removeButton.classList.add("btn");
            removeButton.classList.add("btn-danger");
            removeButton.classList.add("shadow-sm");
            removeButton.innerHTML = "X";
            removeButton.addEventListener('click', (e) => {
                dataStudent.splice(i, 1);
                refresh_student_table_data();
            })

            removeButton_cell.appendChild(removeButton);
        }
    }
}

function search_byProgramOfStudy() {
    let selectByProgramOfStudy = document.getElementById("selectByProgramOfStudy");
    selectByProgramOfStudy = selectByProgramOfStudy.options[selectByProgramOfStudy.selectedIndex];
    
    while(student_table_data.children.length > 0) {
        student_table_data.removeChild(student_table_data.children[0]);
    }

    for(let i=0; i<dataStudent.length; i++) {
        if(dataStudent[i].programOfStudy == selectByProgramOfStudy.text)
        {
            let row = student_table_data.insertRow();
            
            let NIM = row.insertCell(0);
            NIM.innerHTML = dataStudent[i].NIM;

            let fullName = row.insertCell(1);
            fullName.innerHTML = dataStudent[i].fullName;

            let gender = row.insertCell(2);
            gender.innerHTML = dataStudent[i].gender;

            let faculty = row.insertCell(3);
            faculty.innerHTML = dataStudent[i].faculty;

            let programOfStudy = row.insertCell(4);
            programOfStudy.innerHTML = dataStudent[i].programOfStudy;

            let removeButton_cell = row.insertCell(5);
            
            let removeButton = document.createElement("button");
            removeButton.classList.add("btn");
            removeButton.classList.add("btn-danger");
            removeButton.classList.add("shadow-sm");
            removeButton.innerHTML = "X";
            removeButton.addEventListener('click', (e) => {
                dataStudent.splice(i, 1);
                refresh_student_table_data();
            })

            removeButton_cell.appendChild(removeButton);
        }
    }
}