//LINKS FIREBASE
const firebaseConfig = {
    apiKey: "AIzaSyD-5XoPTMs0t50WW0LU2rCnvAEmgGn_ZEQ",
    authDomain: "kwitter-c93-29b87.firebaseapp.com",
    databaseURL: "https://kwitter-c93-29b87-default-rtdb.firebaseio.com",
    projectId: "kwitter-c93-29b87",
    storageBucket: "kwitter-c93-29b87.appspot.com",
    messagingSenderId: "1016150020027",
    appId: "1:1016150020027:web:b382e88e737c0e41663e9e"
};
const app = initializeApp(firebaseConfig);

function getData() {
    firebase.database().ref("/" + roomName).on('value',
        function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                childData = childSnapshot.val();
                if (childKey != "purpose") {
                    firebaseMessageId = childKey;
                    messageData = childData;
                    //Início do código

                    //Fim do código
                }
            });
        });
}
getData();

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(roomName).push({
        name: userName,
        message: msg,
        like: 0
    });
    document.getElementById("msg").value = "";
}

function logout() {
    localStorage.removeItem("userName");
    localStorage.removeItem("roomName");
    window.location = "index.html";
}