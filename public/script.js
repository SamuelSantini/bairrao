const form = document.getElementById("loginForm");
const result = document.getElementById("result");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const login = await fetch("/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            username: document.getElementById("username").value,
            password: document.getElementById("password").value,
        }),
    });

    const dados = await login.json();

    if (!login.ok) {
        result.textContent = dados.erro;
        return;
    }

    const perfil = await fetch("/perfil", {
        headers: { Authorization: dados.token },
    });

    const usuario = await perfil.json();
    result.textContent = perfil.ok ? "Olá, " + usuario.username : usuario.erro;
});
