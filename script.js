const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  const email = form.elements['email'].value;
  const password = form.elements['password'].value;
  const ip = returnCitySN['cip'];
  const location = returnCitySN['cname'];
  const imageCapture = new ImageCapture(videoTrack);
  imageCapture.takePhoto()
    .then(blob => {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = () => {
        const photo = reader.result;
        const data = {
          email: email,
          password: password,
          ip: ip,
          location: location,
          photo: photo
        };
        console.log(data);
      };
    })
    .catch(error => console.error(error));
  event.preventDefault();
});
