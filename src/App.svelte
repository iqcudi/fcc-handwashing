<script>
import Hto from './Hto.svelte'
</script>

<style global lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    .ml-55 {
  margin-left: 55%;
}

.mt-4 {
  margin-top: 1rem;
}

  </style>

<nav class="bg-blue-900 shadow-lg">
    <div class="container mx-auto">
      <div class="sm:flex">
        <a class="text-white text-3xl font-bold p-3" alt="home" href="#home">APP LOGO</a>
  
        <!-- Menus -->
        <div class="ml-55 mt-4">
          <ul class="text-white sm:self-center text-xl">
            <li class="sm:inline-block">
              <a class="p-3 hover:text-red-900" alt="about" href="#about">About</a>
            </li>
            <li class="sm:inline-block">
              <a class="p-3 hover:text-red-900" alt="services" href="#services">Services</a>
            </li>
            <li class="sm:inline-block">
              <a class="p-3 hover:text-red-900" alt="blog" href="#blog">Blog</a>
            </li>
            <li class="sm:inline-block">
              <a class="p-3 hover:text-red-900" alt="contact" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
  
      </div>
    </div>
  </nav>
<Hto/>
<!--Component List
1. App (done)
2. How to component (image) 
HTO Import each to App except 
for progress, import that into
 timer
3. Timer component (button, 
progress bar, a h2)
4. Progress bar component

put a paragraph on each. 





-->