const arrow = document.querySelectorAll<HTMLElement>(".arrow");
for (let i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e: Event) => {
    const arrowParent = (e.target as HTMLElement).parentElement!.parentElement; // selecting main parent of arrow
    arrowParent.classList.toggle("showMenu");
  });
}

const sidebar = document.querySelector<HTMLElement>(".sidebar");
const sidebarBtn = document.querySelector<HTMLElement>(".bx-menu");
console.log(sidebarBtn);
sidebarBtn.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});
