document.addEventListener("DOMContentLoaded", () =>
{
    const formAs = document.querySelectorAll("a");

    function toggleForm() {
        document.getElementById('login').classList.toggle('hidden');
        document.getElementById('register').classList.toggle('hidden');
      }     


    formAs.forEach(formA => {
        formA.addEventListener("click", toggleForm);
    });

});