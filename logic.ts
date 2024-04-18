const dbRef = firebase.database().ref();

dbRef.on('value', (snapshot) => {
  const data = snapshot.val();
  document.getElementById('dataDisplay').innerHTML = JSON.stringify(data, null, 2);
}, (error) => {
  console.error(error);
  document.getElementById('dataDisplay').innerHTML = 'Error fetching data!';
});
