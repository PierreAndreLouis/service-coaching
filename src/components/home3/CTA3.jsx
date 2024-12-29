import React from 'react';

const CTA3 = () => {
  return (
    <div className="relative bg-sky-600 dark:bg-gray-900">
      <div className="absolute inset-x-0 dark:hidden bottom-0">
        <svg
          viewBox="0 0 224 12"
          fill="white"
          className="w-full -mb-1 text-white dark:text-gray-200"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z"
          ></path>
        </svg>
      </div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div id="mc_embed_signup" className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
          <h2 className="mb-6 font-sans text-4xl text-center font-bold tracking-tight text-white dark:text-gray-100 sm:text-4xl sm:leading-none">
            Rejoignez Notre Communauté de Coaching
          </h2>
          <p className="mb-6 text-base text-indigo-200 dark:text-indigo-300 md:text-lg text-center">
            Inscrivez-vous à notre newsletter pour recevoir des conseils personnalisés, des mises à jour sur nos programmes de coaching, et des astuces pour atteindre vos objectifs plus rapidement.
          </p>
          <form
            action="https://gmail.us17.list-manage.com/subscribe/post?u=fe0c8c450e6899f0d6f68376c&amp;id=a07b274bde&amp;f_id=00d255e0f0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            target="_blank"
            className="validate flex flex-col items-center w-full mb-4 md:flex-row md:px-16"
          >
            <input
              type="email"
              name="EMAIL"
              id="mce-EMAIL"
              placeholder="Entrez votre email"
              required
              aria-label="Adresse email"
              className="required email flex-grow w-full h-12 px-4 mb-3 text-black transition duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-deep-purple-900 dark:bg-deep-purple-800 focus:border-teal-accent-700 focus:outline-none focus:shadow-outline"
            />
            <button
              type="submit"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="button border inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide text-gray-200 transition duration-200 rounded shadow-md md:w-auto hover:text-deep-purple-900 bg-teal-accent-400 hover:bg-teal-accent-700 focus:shadow-outline focus:outline-none dark:bg-teal-500 dark:hover:bg-teal-600 dark:text-gray-900 dark:hover:text-gray-800"
            >
              S'abonner
            </button>
          </form>
          <p className="max-w-md mb-10 text-center text-xs tracking-wide text-indigo-100 dark:text-indigo-200 sm:text-sm sm:mx-auto md:mb-16">
            Recevez nos meilleurs conseils pour améliorer vos compétences et atteindre vos objectifs professionnels.
          </p>
          <div
            aria-label="Scroll down"
            className="flex items-center justify-center w-10 h-10 mx-auto text-white duration-300 transform border border-gray-400 rounded-full hover:text-teal-accent-400 hover:border-teal-accent-400 hover:shadow hover:scale-110 dark:border-gray-600 dark:hover:text-teal-300 dark:hover:border-teal-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="currentColor"
            >
              <path
                d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA3;
