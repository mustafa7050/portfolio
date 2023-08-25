var typed = new Typed('#element', {
    strings: ['Cyber Security Expert', 'Networking Engineer', 'IT Professional'],
    typeSpeed: 50,
  });

document.querySelector(".certification").addEventListener("click", function() {
    window.open("https://learn.microsoft.com/en-us/users/javediqbal-5910/transcript/dr995sz5o4nno0g?source=docs", "_blank");
});

document.querySelector(".view-resume-btn").addEventListener("click", function() {
    window.open("/resume/JavedIqbalResume.pdf", "_blank");
});
