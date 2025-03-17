<template>
  <div>
    <!-- 导航栏 -->
    <nav class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-300 p-4">
      <div class="container mx-auto flex items-center justify-between">
        <div class="text-white text-2xl font-bold">MyLogo</div>
        <div class="hidden md:flex space-x-4">
          <a href="#" class="text-gray-300 hover:text-white">Home</a>
          <a href="#" class="text-gray-300 hover:text-white">About</a>
          <a href="#" class="text-gray-300 hover:text-white">Services</a>
          <a href="#" class="text-gray-300 hover:text-white">Contact</a>
        </div>

        <div class="md:hidden">
          <button id="menu-button" class="text-white focus:outline-none">
            <!-- 菜单图标 -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <div id="menu" class="hidden">
            <a
              href="#"
              class="text-gray-300 hover:text-white transition duration-200 ease-in-out"
              >Home</a
            >
            <a
              href="#"
              class="text-gray-300 hover:text-white transition duration-200 ease-in-out"
              >About</a
            >
            <a
              href="#"
              class="text-gray-300 hover:text-white transition duration-200 ease-in-out"
              >Services</a
            >
            <a
              href="#"
              class="text-gray-300 hover:text-white transition duration-200 ease-in-out"
              >Contact</a
            >
          </div>
        </div>
      </div>
    </nav>
    <!-- 
    <div>
      <img src="@/assets/bg/bg.jpg" class="filter opacity-[0.75]" />
    </div> -->

    <div class="flex flex-col lg:flex-row">
      <div class="w-full lg:w-1/2">
        <img src="@/assets/desktop/bg.jpg" alt="Desktop Image" class="filter opacity-[0.75] w-full lg:hidden" />
        <img
          src="@/assets/desktop/bg.jpg"
          alt="Tablet Image"
          class="filter opacity-[0.75]  w-full lg:block hidden md:hidden"
        />
        <img src="@/assets/mobile/bg.png" alt="Mobile Image" class="filter opacity-[0.75] w-full md:hidden" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    document.getElementById("menu-button").addEventListener("click", function () {
      const menu = document.getElementById("menu");
      menu.classList.toggle("hidden");
    });
  },
};
</script>
