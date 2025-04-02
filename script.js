document.querySelector(".hamburger").addEventListener("click", function() {
    document.querySelector(".nav-links").classList.toggle("active");
});

document.querySelector(".btn").addEventListener("click", function() {
    document.querySelector(".popup-overlay").classList.add("active");
});

document.querySelector(".close-popup").addEventListener("click", function() {
    document.querySelector(".popup-overlay").classList.remove("active");
});

// About Section 
document.querySelector(".nav-links li:nth-child(2) a").addEventListener("click", function(event) {
    event.preventDefault(); // ডিফল্ট ক্লিক অ্যাকশন বন্ধ করবে
    document.querySelector("#about").scrollIntoView({
        behavior: "smooth"
    });
});
// "Home" বাটনে ক্লিক করলে স্মুথ স্ক্রল করে উপরে নিয়ে যাবে
document.querySelector(".nav-links li:nth-child(1) a").addEventListener("click", function(event) {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

const counters = document.querySelectorAll('.count');
counters.forEach(counter => {
    counter.innerText = '0';
    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / 200;
        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCounter, 10);
        } else {
            counter.innerText = target;
        }
    };
    updateCounter();
});

document.querySelector(".nav-links li:nth-child(3) a").addEventListener("click", function(event) {
    event.preventDefault(); // ডিফল্ট ক্লিক অ্যাকশন বন্ধ করবে
    document.querySelector("#menu").scrollIntoView({
        behavior: "smooth"
    });
});
document.querySelector(".nav-links li:nth-child(4) a").addEventListener("click", function(event) {
    event.preventDefault(); // ডিফল্ট ক্লিক অ্যাকশন বন্ধ করবে
    document.querySelector("#gallery").scrollIntoView({
        behavior: "smooth"
    });
});
document.querySelector(".nav-links li:nth-child(5) a").addEventListener("click", function(event) {
    event.preventDefault(); 
    document.querySelector("#contact").scrollIntoView({
        behavior: "smooth"
    });
});



// Live Chat ক্লিক করলে WhatsApp / Messenger ওপেন করবে
document.querySelector(".live-chat").addEventListener("click", function () {
    window.location.href = "https://wa.me/+8801989031796"; // এখানে তোমার WhatsApp নম্বর বা Messenger লিংক বসাও
});



document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("etsBuODi4NTN_yn2L"); // EmailJS Public Key বসাও

    document.querySelector(".contact-form").addEventListener("submit", function (e) {
        e.preventDefault(); // ফর্ম সাবমিটের ডিফল্ট রিলোড বন্ধ করবে

        let templateParams = {
            user_name: document.getElementById("name").value,
            user_email: document.getElementById("email").value,
            message: document.getElementById("message").value,
        };

        emailjs.send("service_ayvxq6s", "template_f39oio6", templateParams)
            .then(function (response) {
                console.log("SUCCESS!", response.status, response.text);
                alert("✅ Your message has been sent successfully!");
                document.querySelector(".contact-form").reset();
            }, function (error) {
                console.log("FAILED...", error);
                alert("❌ Failed to send message. Please try again!");
            });
    });
});

let lastScrollTop = 0;
document.addEventListener("scroll", function () {
  let footer = document.querySelector(".footer");
  let scrollHeight = document.documentElement.scrollHeight;
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  let clientHeight = document.documentElement.clientHeight;

  if (scrollTop + clientHeight >= scrollHeight - 10) {
    // যখন একদম নিচে চলে যাবে তখন ফিক্সড থাকবে
    footer.style.bottom = "0";
  } else if (scrollTop > lastScrollTop) {
    // নিচের দিকে স্ক্রল করলে ফুটার দেখাবে
    footer.style.bottom = "0";
  } else {
    // স্ক্রল বন্ধ করলে লুকিয়ে রাখবে
    footer.style.bottom = "-100px";
  }
  lastScrollTop = scrollTop;
});