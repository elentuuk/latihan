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

    let faculty = document.getElementById("faculty").value;
    let programOfStudy = document.getElementById("programOfStudy").value;

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
    document.getElementById("faculty").selectedIndex = 0;
    {
        let ProgramOfStudy = document.getElementById("programOfStudy");
        ProgramOfStudy.textContent = ''; //kill all children element sadisticialy
        ProgramOfStudy.appendChild((() => 
        {
            let x = document.createElement("option"); 
            x.innerText = "--- Select Program Of Study ---"; return x;})());
        ProgramOfStudy.selectedIndex = 0;
    }
}