import React from 'react';

const Parents = () => {
    return (
        <div className="min-h-screen bg-light py-24">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Header */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <p className="text-primary font-bold tracking-widest uppercase mb-3">The Nobi Family</p>
                    <h1 className="text-4xl md:text-5xl font-black text-dark mb-6">
                        Nobita's Parents
                    </h1>
                    <div className="w-24 h-2 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
                        Nobita Nobi’s parents are <strong>Tamako Nobi</strong> (mother) and <strong>Nobisuke Nobi</strong> (father).
                        They play a crucial role in his life, shaping his personality and guiding him through his daily struggles.
                        While their parenting styles differ, both deeply care for Nobita and want the best for his future.
                    </p>
                </div>

                {/* Tamako Nobi Section */}
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-12 transform hover:scale-[1.01] transition-transform duration-300" data-aos="fade-right">
                    <div className="grid md:grid-cols-3">
                        <div className="md:col-span-1 bg-pink-50 flex items-center justify-center p-6">
                            <img
                                src="https://placehold.co/400x500/FFB6C1/white?text=Tamako+Nobi"
                                alt="Tamako Nobi"
                                className="w-48 h-48 md:w-full md:h-auto object-cover rounded-full md:rounded-lg shadow-md border-4 border-white"
                            />
                        </div>
                        <div className="md:col-span-2 p-8 md:p-10 flex flex-col justify-center">
                            <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                                Tamako Nobi
                            </h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Tamako Nobi is Nobita’s strict, bespectacled stay-at-home mother who runs the Nobi household. She is frequently seen scolding Nobita for his poor grades (often zeros!), his general laziness, and his habit of leaving chores unfinished.
                                <br /><br />
                                From Nobita’s perspective, she can appear quite harsh and intimidating, often sparking his desire to use Doraemon’s gadgets to escape her lectures. However, beneath her strict exterior, she genuinely cares for Nobita’s well-being and future success, believing that discipline is necessary for him to grow into a responsible adult.
                            </p>
                            <a
                                href="https://doraemon.fandom.com/wiki/Tamako_Nobi"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors"
                            >
                                🔗 Read more on Doraemon Wiki
                            </a>
                        </div>
                    </div>
                </div>

                {/* Nobisuke Nobi Section */}
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-16 transform hover:scale-[1.01] transition-transform duration-300" data-aos="fade-left">
                    <div className="grid md:grid-cols-3">
                        <div className="md:col-span-2 p-8 md:p-10 flex flex-col justify-center order-2 md:order-1">
                            <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                                Nobisuke Nobi
                            </h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Nobisuke Nobi is Nobita’s calm and laid-back father, a diligent salaryman who works long hours to support the family. In contrast to Tamako, he is generally more tolerant and easy-going with Nobita.
                                <br /><br />
                                He often offers gentle advice rather than shouting and tries to support Nobita emotionally. While he does discipline Nobita occasionally, he sometimes feels guilty about it afterwards. He enjoys relaxing at home when he can and shares a relatable, human bond with his son.
                            </p>
                            <a
                                href="https://doraemon.fandom.com/wiki/Nobisuke_Nobi"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors"
                            >
                                🔗 Read more on Doraemon Wiki
                            </a>
                        </div>
                        <div className="md:col-span-1 bg-blue-50 flex items-center justify-center p-6 order-1 md:order-2">
                            <img
                                src="https://placehold.co/400x500/87CEEB/white?text=Nobisuke+Nobi"
                                alt="Nobisuke Nobi"
                                className="w-48 h-48 md:w-full md:h-auto object-cover rounded-full md:rounded-lg shadow-md border-4 border-white"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Parents;
