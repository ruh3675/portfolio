  // type writter effect
  const text = "a Final year BCA student";
  const speed = 100; // Speed in milliseconds
  const element = document.getElementById("typewriter");
  let index = 0;

  function typeWriter() {
    if (index < text.length) {
      element.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeWriter, speed);
    } else {
      setTimeout(resetTypewriter, 1000); // Pause for 1 second before resetting
    }
  }
  function resetTypewriter() {
    element.innerHTML = ""; // Clear the text
    index = 0;
    setTimeout(typeWriter, speed);
  }

  window.onload = typeWriter;

  

  let isScrollingDown = false;
  const header = document.getElementById("header");

  window.addEventListener("scroll", function () {
    const scrollY = window.scrollY;

    if (scrollY > 100 && !isScrollingDown) {
      isScrollingDown = true;
      header.classList.remove("dark:bg-transparent");
      header.classList.add("dark:bg-stone-400");
    } else if (scrollY <= 100 && isScrollingDown) {
      isScrollingDown = false;
      header.classList.remove("dark:text-black")
      header.classList.add("dark:text-white")
      header.classList.remove("dark:bg-stone-400");
      header.classList.add("dark:bg-transparent");
    }
  });

  
//dark mode

  const darkModeToggle = document.getElementById('dark-mode-toggle');
  const iconSun = document.getElementById('icon-sun');
  const iconMoon = document.getElementById('icon-moon');

  // Function to toggle dark/light mode
  function toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
    iconSun.classList.toggle('hidden');
    iconMoon.classList.toggle('hidden');
  }

  // Event listener for toggle switch change
  darkModeToggle.addEventListener('change', toggleDarkMode);

  // Check if the user has a dark mode preference
  const isDarkModePreferred = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (isDarkModePreferred) {
    darkModeToggle.checked = true;
  }

  // Initial call to set the initial state
  toggleDarkMode();