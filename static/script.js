let url = window.location.pathname;

if (url == "/")
{
    document.querySelector('#pagina_atual').textContent = "Home";
}
else if (url == "/sobre")
{
    document.querySelector('#pagina_atual').textContent = "Sobre"
}
else if (url == "/produtos")
{
    document.querySelector('#pagina_atual').textContent = "Produtos";
}