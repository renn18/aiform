import React from 'react'

const Hero = () => {
    return (
        <section className="bg-gray-50">
            <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen">
                <div className="mx-auto max-w-xl text-center">
                    <h1 className="text-3xl font-extrabold sm:text-5xl">
                        Create your Form
                        <strong className="font-extrabold text-themeblue-light sm:block"> In Seconds Not i Hours. </strong>
                    </h1>

                    <p className="mt-4 sm:text-xl/relaxed">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
                        numquam ea!
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <a
                            className="block w-full rounded bg-themeblue px-12 py-3 text-sm font-medium text-white shadow hover:bg-themeblue-light focus:outline-none focus:ring active:bg-themeblue sm:w-auto"
                            href="#"
                        >
                            + Create AI Form
                        </a>

                        <a
                            className="block w-full rounded px-12 py-3 text-sm font-medium text-themeblue shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
                            href="#"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero