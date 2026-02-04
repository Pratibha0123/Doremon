import React from 'react';

const Movies = () => {
    return (
        <div className="min-h-screen bg-light py-24">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Header Section */}
                <div className="text-center mb-12" data-aos="fade-up">
                    <p className="text-primary font-bold tracking-widest uppercase mb-3">Movie Guide</p>
                    <h1 className="text-3xl md:text-5xl font-black text-dark mb-6">
                        Doraemon Hindi Dubbed Movies on YouTube
                    </h1>
                    <div className="w-24 h-2 bg-secondary mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        While finding official full movie uploads of Doraemon in Hindi on YouTube can be tricky due to copyright restrictions, the platform is bustling with fan compilations, playlists, and best-scene highlights. Here is your guide to the most popular Doraemon movies often searched for by fans in India.
                    </p>
                </div>

                {/* Table Section */}
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-12" data-aos="fade-up" data-aos-delay="100">
                    <div className="bg-primary py-6 px-8">
                        <h2 className="text-2xl font-bold text-white text-center">Top 10 Doraemon Hindi-Dubbed Movies on YouTube</h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-blue-50 border-b border-blue-100">
                                    <th className="p-4 md:p-6 font-bold text-gray-700">Movie Title (Hindi Dub)</th>
                                    <th className="p-4 md:p-6 font-bold text-gray-700">YouTube Availability / Highlights</th>
                                    <th className="p-4 md:p-6 font-bold text-gray-700">Release Year</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                <tr className="hover:bg-blue-50/50 transition-colors">
                                    <td className="p-4 md:p-6 font-medium text-gray-800">Nobita's Dinosaur</td>
                                    <td className="p-4 md:p-6 text-gray-600">Clips & Fan Edits often available</td>
                                    <td className="p-4 md:p-6 text-gray-600">1980 / 2006 (Remake)</td>
                                </tr>
                                <tr className="hover:bg-blue-50/50 transition-colors">
                                    <td className="p-4 md:p-6 font-medium text-gray-800">Stand By Me Doraemon</td>
                                    <td className="p-4 md:p-6 text-gray-600">Short clips, emotional scenes, & trailers</td>
                                    <td className="p-4 md:p-6 text-gray-600">2014</td>
                                </tr>
                                <tr className="hover:bg-blue-50/50 transition-colors">
                                    <td className="p-4 md:p-6 font-medium text-gray-800">Nobita and the Steel Troops (New Age)</td>
                                    <td className="p-4 md:p-6 text-gray-600">Widely searched; reaction videos & parts</td>
                                    <td className="p-4 md:p-6 text-gray-600">2011</td>
                                </tr>
                                <tr className="hover:bg-blue-50/50 transition-colors">
                                    <td className="p-4 md:p-6 font-medium text-gray-800">Nobita in the Secret Gadget Museum</td>
                                    <td className="p-4 md:p-6 text-gray-600">Gadget showcases & funny moments</td>
                                    <td className="p-4 md:p-6 text-gray-600">2013</td>
                                </tr>
                                <tr className="hover:bg-blue-50/50 transition-colors">
                                    <td className="p-4 md:p-6 font-medium text-gray-800">Nobita's Little Star Wars 2021</td>
                                    <td className="p-4 md:p-6 text-gray-600">Trailers & promotional clips</td>
                                    <td className="p-4 md:p-6 text-gray-600">2021</td>
                                </tr>
                                <tr className="hover:bg-blue-50/50 transition-colors">
                                    <td className="p-4 md:p-6 font-medium text-gray-800">Nobita's Treasure Island</td>
                                    <td className="p-4 md:p-6 text-gray-600">Song clips & key adventure scenes</td>
                                    <td className="p-4 md:p-6 text-gray-600">2018</td>
                                </tr>
                                <tr className="hover:bg-blue-50/50 transition-colors">
                                    <td className="p-4 md:p-6 font-medium text-gray-800">Nobita's New Dinosaur</td>
                                    <td className="p-4 md:p-6 text-gray-600">Highlights of Kyu & Myu</td>
                                    <td className="p-4 md:p-6 text-gray-600">2020</td>
                                </tr>
                                <tr className="hover:bg-blue-50/50 transition-colors">
                                    <td className="p-4 md:p-6 font-medium text-gray-800">Nobita and the Birth of Japan</td>
                                    <td className="p-4 md:p-6 text-gray-600">Historical scenes & food creation clips</td>
                                    <td className="p-4 md:p-6 text-gray-600">2016</td>
                                </tr>
                                <tr className="hover:bg-blue-50/50 transition-colors">
                                    <td className="p-4 md:p-6 font-medium text-gray-800">Nobita's Great Battle of the South Seas</td>
                                    <td className="p-4 md:p-6 text-gray-600">Fan uploads of classic dubs</td>
                                    <td className="p-4 md:p-6 text-gray-600">1998</td>
                                </tr>
                                <tr className="hover:bg-blue-50/50 transition-colors">
                                    <td className="p-4 md:p-6 font-medium text-gray-800">Nobita's Earth Symphony</td>
                                    <td className="p-4 md:p-6 text-gray-600">Recent topic; teasers available</td>
                                    <td className="p-4 md:p-6 text-gray-600">2024</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Watch Tips Section */}
                <div className="bg-white rounded-3xl shadow-lg p-8 md:p-10 border border-gray-100" data-aos="fade-up" data-aos-delay="200">
                    <h3 className="text-2xl font-bold text-dark mb-6 flex items-center gap-3">
                        <span className="text-3xl">💡</span> Watch Tips for Fans
                    </h3>
                    <ul className="space-y-4 text-gray-700 leading-relaxed">
                        <li className="flex items-start gap-3">
                            <span className="text-secondary font-bold text-xl">•</span>
                            <div>
                                <strong>Use Specific Keywords:</strong> Search for terms like <em>"Doraemon full movie Hindi dubbed"</em>, <em>"Doraemon movie scenes Hindi"</em>, or specific movie titles to find the best results.
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-secondary font-bold text-xl">•</span>
                            <div>
                                <strong>Check Official Channels:</strong> For high-quality clips, check official channels like <strong>Disney India</strong> or <strong>Netflix Anime</strong> (where available).
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-secondary font-bold text-xl">•</span>
                            <div>
                                <strong>Availability Varies:</strong> Full movies are often taken down for copyright reasons. Fan compilations and "part-by-part" uploads are more common.
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-secondary font-bold text-xl">•</span>
                            <div>
                                <strong>Streaming Apps:</strong> For the best experience, checking legal streaming apps like <strong>Disney+ Hotstar</strong> or <strong>Prime Video</strong> is recommended for full Hindi-dubbed movies.
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Movies;
