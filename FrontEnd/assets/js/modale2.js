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
    event.preventDefault();

    // Empêcher la soumission du formulaire par défaut

    validerAjoutPhoto(event); // Valider l'ajout de la photo
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

titleimage.addEventListener("input", function () {
  checkelements();
});

// Fonction pour valider l'ajout de la photo

function validerAjoutPhoto(event) {
  let photoInput = document.getElementById("ajouterPhotoBtnModal2");

  let photo = photoInput.files[0];

  if (!photo) {
    alert("Veuillez sélectionner une photo.");

    return;
  }

  const data = new FormData(event.target);

  // Logique pour valider l'ajout de la photo

  fetch("http://localhost:5678/api/works", {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },

    body: data,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("La suppression du travail a échoué");
      }
    })
    .catch((error) => {
      console.error("Erreur lors de la suppression du travail:", error);
    });

  fermerModale2(); // Fermer la modale 2 après la validation
} // Fonction pour ouvrir la modale 2

function checkelements() {
  if (
    inputImage.value != "" &&
    titleimage.value != "" &&
    categoryimage.value != ""
  ) {
    const buttonvalidation = document.getElementById("validate");

    buttonvalidation.style.backgroundColor = "red";
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

