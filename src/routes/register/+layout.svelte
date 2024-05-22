<header class="flex justify-between bg-white items-center pl-10 py-4">
    <p>APOLO</p>
    <nav>
        <a href="/login">Iniciar sesión</a>
        <a href="/about">Acerca de</a>
        <a href="/contact">Contacto</a>
    </nav>
</header>
  

<slot></slot>

<style>
    nav a {
        margin-right: 15px;
        text-decoration: none;
        color: black
    }
</style>