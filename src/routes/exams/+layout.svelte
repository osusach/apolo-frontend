<header class="bg-white py-4">
    <div class="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div class="flex items-center space-x-4">
            <p class="text-lg">APOLO</p>
        </div>
        <div class="flex flex-row">
            <p class="mr-3">Perfil</p>
            <button class="w-8 h-8 bg-purple-600 rounded-full"></button> <!-- Simulating the purple icon -->
        </div>
    </div>
    <div class="w-full h-px bg-gray-300 mt-2"></div> <!-- Divider Line -->
    <div class="max-w-7xl mx-auto px-4 flex flex-col justify-between items-center">
        <nav class="flex items-center space-x-4">
            <a href="/carpetas" class="text-purple-800 hover:text-purple-600">Carpetas</a>
            <a href="/preguntas" class="text-purple-800 hover:text-purple-600">Preguntas</a>
            <a href="/configuracion" class="text-purple-800 hover:text-purple-600">Configuración</a>    
        </nav>
    </div>
</header>
  

<slot></slot>

<style>
    nav a {
        margin-right: 15px;
        text-decoration: none;
        color: black
    }
</style>