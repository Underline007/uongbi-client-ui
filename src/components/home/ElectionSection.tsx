import Link from "next/link";

interface ElectionSectionProps {
    election: {
        id: string;
        name: string;
        slug: string;
        featured: {
            id: string;
            title: string;
            image: string;
        };
    };
}

export function ElectionSection({ election }: ElectionSectionProps) {
    return (
        <div className="bg-white pt-6 pb-4 sm:pt-8 md:pt-10 lg:pb-8 lg:pt-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:pt-4 lg:border-t border-gray-200">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white mt-2 lg:mt-0">
                            <div className="flex items-center mb-2 lg:mb-4 pb-2 lg:pb-3 border-b border-gray-200">
                                <div className="w-1 h-6 bg-red-600 mr-3"></div>
                                <Link href={`/categories/${election.id}`}>
                                    <h3 className="font-bold text-gray-900 uppercase hover:text-red-600 transition-colors">
                                        {election.name}
                                    </h3>
                                </Link>
                            </div>
                            <div className="space-y-2 lg:space-y-4">
                                <Link className="block group" href={`/news/${election.featured.id}`}>
                                    <div className="space-y-2">
                                        <div className="aspect-video overflow-hidden bg-gray-100">
                                            <img
                                                src={election.featured.image}
                                                alt={election.featured.title}
                                                className="w-full h-full group-hover:scale-105 transition-transform duration-200"
                                                loading="lazy"
                                            />
                                        </div>
                                        <h4 className="font-bold text-gray-900 leading-relaxed group-hover:text-red-600 transition-colors line-clamp-2">
                                            {election.featured.title}
                                        </h4>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
