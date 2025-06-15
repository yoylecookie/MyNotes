                function addnote() {
                    let name;
                    let content;
                    let add;
                    name = document.getElementById('name').value;
                    content = document.getElementById('content').value;
                    add = "<h1>" + name + "</h1>" + "<p>" + content + "</p>" + "<hr />";
                    document.getElementById("notes").innerHTML += add;
                    window.localStorage.setItem("n", document.getElementById("notes").innerHTML);
                    
                }
                
                function restore() {
                    let oldnotes;
                    oldnotes = window.localStorage.getItem("n");
                    document.getElementById("notes").innerHTML += oldnotes;
                }
                
                function deletenotes() {
    let sure = window.prompt("Are you sure? This will delete all of your notes, and you will not be able to restore them", "Type 'y' to confirm this action");
    
    if (sure === "y") {
        // Clear the HTML content inside the 'notes' div
        document.getElementById("notes").innerHTML = "";

        // Remove the notes from localStorage
        window.localStorage.removeItem("n");

        alert("All notes have been deleted.");
    } else {
        alert("Deletion cancelled.");
    }
}
