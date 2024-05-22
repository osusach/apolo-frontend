<script>
    let username = '';
    let password = '';
  
    function handleLogin() {
      // Aquí puedes añadir la lógica para manejar el inicio de sesión
      console.log('Intento de inicio de sesión', { username, password });
    }
  </script>
  
  <div class="flex justify-center items-center h-screen gradiente">
    <div class="flex flex-col ml-40 px-10 py-10 mx-20 w-1/4 bg-slate-50/35 gap-3 rounded-3xl shadow-md">
      <div class="text-white text-5xl text-center pt-6">APOLO</div>
      <input class="p-3 rounded-lg mt-12" bind:value={username} placeholder="Usuario" type="text">
      <input class="p-3 rounded-lg mb-12" bind:value={password} placeholder="Contraseña" type="password">
      <button class="button text-white font-semibold text-lg transition-all p-3 rounded-lg hover:bg-violet-700" on:click={handleLogin}>Iniciar sesión</button>
    </div>
    <div class=" text-slate-800 font-light align-middle px-40 text-2xl">
      APOLO es una herramienta creada por estudiantes para profesores con la finalidad de ayudarlos en su labor docente.
    </div>
  </div>

  <style>
    .gradiente {
        background: rgb(101,57,156);
        background: linear-gradient(90deg, rgba(101,57,156,1) 0%, rgba(136,255,212,1) 100%); 
    }

    .button {
        background-color: #7F61BE;
    }
  </style>