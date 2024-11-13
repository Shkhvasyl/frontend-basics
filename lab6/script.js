function fetchUsersData() {
    return new Promise((resolve, reject) => {
        fetch('https://randomuser.me/api/?results=5')
            .then(response => {
                if (!response.ok) {
                    reject('Network response was not ok');
                } else {
                    resolve(response.json()); 
                }
            })
            .catch(error => {
                reject('There was a problem with the fetch operation: ' + error);
            });
    });
}
function displayUsers(users) {
    const usersInfoDiv = document.getElementById('users-info');
    usersInfoDiv.innerHTML = '';
    users.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.classList.add('user-info');
        userDiv.innerHTML = `
            <img src="${user.picture.large}" alt="User Picture" />
            <h3>${user.name.first} ${user.name.last}</h3>
            <p>City: ${user.location.city}</p>
            <p>Country: ${user.location.country}</p>
            <p>Postcode: ${user.location.postcode}</p>
        `;
        usersInfoDiv.appendChild(userDiv);
    });
}

document.getElementById('load-users-btn').addEventListener('click', () => {
    fetchUsersData()
        .then(data => {
            displayUsers(data.results); 
        })
        .catch(error => {
            console.error(error); 
        });
});
