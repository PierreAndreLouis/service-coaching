import React, { useState } from 'react';
import emailjs from "emailjs-com";

const Contact4 = () => {
  // npm install emailjs-com
  const [loading, setLoading] = useState(false); // État pour gérer le chargement

  function sendMail(e) {
    e.preventDefault(); // Empêche le rechargement de la page

    const params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };

    if (params.name.length > 0 && params.email.length > 0 && params.message.length > 0) {
      setLoading(true); // Active le mode chargement

      const serviceID = "service_vsuzpsx";
      const templateID = "template_e11xt3v";

      emailjs.init("Y4DfcLA5moa5C1k6K"); // Clé publique

      emailjs.send(serviceID, templateID, params)
        .then(res => {
          // Réinitialise les champs du formulaire
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";

          console.log(res);
          alert("Votre message a été envoyé avec succès !");
        })
        .catch(err => {
          console.log(err);
          alert("Erreur lors de l'envoi du message. Veuillez réessayer.");
        })
        .finally(() => {
          setLoading(false); // Désactive le mode chargement après l'envoi
        });
    } else {
      alert("Veuillez remplir tous les champs avant d'envoyer votre message.");
    }
  }

  return (
    <div>
      <section className="bg-sky-50 dark:bg-slate-900" id="contact">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mb-4">
            <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
              <p className="text-base font-semibold uppercase tracking-wide text-gray-600 dark:text-sky-200">
                Contact
              </p>
              <h2 className="font-heading mb-4 tracking-tight text-sky-600 dark:text-white text-3xl sm:text-4xl">
                Prenons Contact
              </h2>
            </div>
          </div>
          <div className="flex items-stretch justify-center">
            <div className="grid md:grid-cols-2 max-w-6xl">
              <div className="h-full pr-6">
                <p className="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400">
                  Vous avez des questions ou souhaitez en savoir plus sur nos services de coaching ? Nous sommes là pour vous aider ! N'hésitez pas à nous contacter pour toute information ou demande.
                </p>
                <ul className="mb-6 md:mb-0">
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-sky-600 text-gray-50">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                      </svg>
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-bold leading-6 text-gray-700 dark:text-white">Notre Adresse</h3>
                      <p className="text-gray-600 dark:text-slate-400">1230 Maecenas Street Donec Road</p>
                      <p className="text-gray-600 dark:text-slate-400">New York, EEUU</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-sky-600 text-gray-50">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                        <path d="M15 7a2 2 0 0 1 2 2"></path>
                        <path d="M15 3a6 6 0 0 1 6 6"></path>
                      </svg>
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-bold leading-6 text-gray-700 dark:text-white">Contactez-nous</h3>
                      <p className="text-gray-600 dark:text-slate-400">Téléphone : +1 (123) 456-7890</p>
                      <p className="text-gray-600 dark:text-slate-400">Email : tailnext@gmail.com</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-sky-600 text-gray-50">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                        <path d="M12 7v5l3 3"></path>
                      </svg>
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-bold leading-6 text-gray-700 dark:text-white">Heures d'ouverture</h3>
                      <p className="text-gray-600 dark:text-slate-400">Lundi - Vendredi : 08:00 - 17:00</p>
                      <p className="text-gray-600 dark:text-slate-400">Samedi &amp; Dimanche : 08:00 - 12:00</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="card h-fit max-w-6xl md:p-12" id="form">
                <h2 className="mb-4 text-2xl font-bold dark:text-white">Prêt à Commencer ?</h2>
                <form id="contactForm">
                  <div className="mb-6">
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label htmlFor="name" className="pb-1 text-xs uppercase tracking-wider">Nom</label>
                      <input
                        type="text"
                        id="name"
                        autoComplete="given-name"
                        placeholder="Votre nom"
                        className="mb-2 w-full rounded-md dark:bg-gray-800 border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                        name="name"
                        required
                      />
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label htmlFor="email" className="pb-1 text-xs uppercase tracking-wider">Email</label>
                      <input
                        type="email"
                        id="email"
                        autoComplete="email"
                        placeholder="Votre adresse email"
                        className="mb-2 w-full rounded-md dark:bg-gray-800 border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                        name="email"
                        required
                      />
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label htmlFor="textarea" className="pb-1 text-xs uppercase tracking-wider">Message</label>
                      <textarea
                        id="message"
                        required
                        name="textarea"
                        cols="30"
                        rows="5"
                        placeholder="Écrivez votre message..."
                        className="mb-2 w-full rounded-md dark:bg-gray-800 border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                      ></textarea>
                    </div>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      disabled={loading}
                      onClick={(e) => { sendMail(e) }}
                      className="w-full bg-sky-600 text-white px-6 py-3 font-xl rounded-md sm:mb-0"
                    >
                      {loading ? 'Envoi en cours...' : 'Envoyer'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact4;