import React from 'react';

const Programs = () => {
    return (
        <section id="programs" className="py-12">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold mb-8 text-center">Programs</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Program Card 1 */}
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col justify-between">
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">Program 1</h3>
                            <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. A alias odit assumenda voluptatem tenetur deserunt.</p>
                        </div>
                        <div className="flex flex-col items-center p-6">
                            <p className="text-gray-700 mb-4">Price: XX$</p>
                            <button className="bg-gray-900 text-white py-2 px-4 rounded-lg">Book</button>
                        </div>
                    </div>
                    {/* Program Card 2 */}
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col justify-between">
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">Program 2</h3>
                            <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit asperiores quis quaerat tempora velit nam.</p>
                        </div>
                        <div className="flex flex-col items-center p-6">
                            <p className="text-gray-700 mb-4">Price: XX$</p>
                            <button className="bg-gray-900 text-white py-2 px-4 rounded-lg">Book</button>
                        </div>
                    </div>
                    {/* Program Card 3 */}
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col justify-between">
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">Program 3</h3>
                            <p className="text-gray-700 mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae nobis optio, eligendi natus asperiores sunt!</p>
                        </div>
                        <div className="flex flex-col items-center p-6">
                            <p className="text-gray-700 mb-4">Price: $XX</p>
                            <button className="bg-gray-900 text-white py-2 px-4 rounded-lg">Book</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Programs;
