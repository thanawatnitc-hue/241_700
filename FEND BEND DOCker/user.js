//1. load user ทั้งหมด จาก api http://localhost:8000/users

//2. นำ user ที่ไม่ได้แสดงในหน้าเว็ป ใน html
const BASE_URL = "http://localhost:8000";
window.onload = async () => {
    await loadData();
}

const loadData = async () => {
    const response = await axios.get(`${BASE_URL}/users`);
    console.log(response.data);
    const users = response.data[0]; 

    const userDOM = document.getElementById("user");
    let htmlData = '<div>';
    
    for (let i = 0; i < users.length; i++) {
        let user = users[i];
        htmlData += ` <div>
        ${user.id} ${user.firstname} ${user.lastname} ${user.gender}
        <a href="index.html?id=${user.id}"><button>Edit</button></a>
        <button class='delete' data-id='${user.id}'>Delete</button>
        </div>`
    }
    htmlData += '</div>';
    userDOM.innerHTML = htmlData;

    const deleteDOMs = document.getElementsByClassName("delete");
    for (let i = 0; i < deleteDOMs.length; i++) {
        deleteDOMs[i].addEventListener("click", async (event) => {
            const id = event.target.dataset.id;
            try{
                await axios.delete(`${BASE_URL}/users/${id}`);
                loadData(); 
            }catch(error){
                console.error("Error deleting user:", error);
            }    
        });
    }
}