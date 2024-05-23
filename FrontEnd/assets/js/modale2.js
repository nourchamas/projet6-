// Récupérer le bouton de fermeture de la modale 2
let boutonFermer = document.querySelector("#modal2 .close");

// Ajouter un gestionnaire d'événements au clic sur le bouton de fermeture
if (boutonFermer) {
  boutonFermer.addEventListener("click", fermerModale2);
}

// Récupérer le formulaire d'ajout de photo
let addProjectForm = document.getElementById("ajouterPhotoBtnModal2");

// Ajouter un gestionnaire d'événements pour la soumission du formulaire
if (addProjectForm) {
  addProjectForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Empêcher la soumission du formulaire par défaut
    /* validerAjoutPhoto(); // Valider l'ajout de la photo*/
    
  });
}
let inputImage = document.getElementById("imageUrl");
const titleimage = document.getElementById("selectorTitle");
const categoryimage = document.getElementById("selectorCategory");
inputImage.addEventListener("change", function () {
  let file = inputImage.files[0];
  document.querySelector(".apercuImg").style.display = "flex";
  document.querySelector(".mountaincontainer").style.display = "none";
  document.querySelector(".apercuImg img").src =
    window.URL.createObjectURL(file);
  console.log(file);
});
titleimage.addEventListener("input", function(){

    checkelements();
})
// Fonction pour valider l'ajout de la photo
function validerAjoutPhoto() {
  let photoInput = document.getElementById("ajouterPhotoBtnModal2");
  let photo = photoInput.files[0];

  if (!photo) {
    alert("Veuillez sélectionner une photo.");
    return;
  }



  // Logique pour valider l'ajout de la photo
  // ...

  fermerModale2(); // Fermer la modale 2 après la validation
} // Fonction pour ouvrir la modale 2
function checkelements(){
if (inputImage.value!='' && titleimage.value!=''  && categoryimage.value!=''){

    const buttonvalidation = document.getElementById("validate");
    buttonvalidation.style.backgroundColor="red";
}


}
/// Sélectionnez la flèche de retour
const modale2head = document.querySelector(".modale2-head");
document.addEventListener("DOMContentLoaded", function () {
  // Récupérer la flèche pour revenir à la modale précédente
  let backArrow = document.querySelector(".fa-arrow-left");

  // Ajouter un gestionnaire d'événements au clic sur la flèche
  if (backArrow) {
    backArrow.addEventListener("click", function () {
      fermerModale2(); // Fermer la modale 2
      ouvrirModale1(); // Ouvrir la modale 1
    });
  }
  // Function to close modal 2
  function fermerModale2() {
    const modale2 = document.getElementById("modale2");
    modale2.style.display = "none";
  }
  // Ajouter un gestionnaire d'événements pour le clic sur la croix
  const closeButton = document.querySelector(".close");
  closeButton.addEventListener("click", function () {
    fermerModale2(); // Appeler la fonction pour fermer la modale 1
  });
});
