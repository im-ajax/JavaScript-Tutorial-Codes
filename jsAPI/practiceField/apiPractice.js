const loadPost=()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>res.json())
    .then((datas)=>loadData(datas))
};
const loadData=(datas)=>{
    let count=0;
    const postHolder=document.getElementById("postHolder");
    postHolder.innerHTML="";
    datas.forEach((data)=>{
        count++;
        const postCard=document.createElement('div');
        postCard.innerHTML=`
            <div class="post-card">
                <h1>${data.name}</h1>
                <p>${data.username}</p>
                <p>${data.email}</p>
                <p>${data.address.city}</p>
                <p>Card Count: ${count}</p>
            </div>        
        `;
        postHolder.append(postCard);
    });
};