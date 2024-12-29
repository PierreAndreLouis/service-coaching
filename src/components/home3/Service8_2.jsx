import React from 'react';

const Service8_2 = ({ voirEtaps, setVoirEtaps }) => {
    return (
        <div className="py-14 dark:bg-slate-900 bg-slate-100 duration-300 px-5">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 gap-6 lg:flex flex-row-reverse max-w-6xl mx-auto">
                    <div data-aos="fade-up" className="border-4 w-full lg:w-full">
                        <img
                            src="https://mentorat.red/wp-content/uploads/2019/09/achievement-3390228_960_720-630x408.jpg"
                            alt="Session de démarrage"
                            className="w-full drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
                        />
                    </div>

                    <div className="lg:w-full">
                        <div className="space-y-5 pb-6">
                            <div data-aos="zoom-in" className="flex items-center gap-4">
                                <div className="text-sky-600 text-7xl">
                                    <h1 className="font-bold">02</h1>
                                </div>
                                <div>
                                    <p className="text-sky-600">Étape 2</p>
                                    <h1 className="text-xl sm:text-3xl font-bold dark:text-white">Session de démarrage</h1>
                                </div>
                            </div>
                            <p data-aos="fade-up" className="dark:text-white text-gray-600 tracking-wide">
                                Cette étape consiste en un échange interactif permettant de recueillir des informations sur le contexte organisationnel, les attentes et les objectifs à atteindre. Lors de cette séance initiale, le coaché peut exprimer les problématiques rencontrées et ses objectifs.
                                <br /><br />
                                L’objectif est de recueillir des informations pour mieux conseiller le coaché et l’orienter vers des solutions auxquelles il n’avait pas pensé.
                            </p>

                            {/* <button data-aos="fade-up" className="bg-sky-600 text-white px-10 py-3 font-bold">
                                Commencer
                            </button> */}
                        </div>
                    </div>
                </div>
                <div className="w-full flex lg:mt-10">
                    {!voirEtaps && (
                        <button
                            onClick={() => setVoirEtaps(!voirEtaps)}
                            className="bg-transparent border border-sky-600 text-sky-600 font-semibold py-2 px-7 mx-auto">
                            Voir l'étape suivante
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Service8_2;
