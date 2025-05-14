const popSound = document.getElementById('popSound');

document.querySelectorAll('.avatar').forEach(avatar => {
  avatar.addEventListener('mouseenter', () => {
    popSound.currentTime = 0; // Repart du début
    popSound.play();
  });
});
