import React from 'react'


const Footer = () => {
  return (
    <footer className="block">
    {/* Container */}
    <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24">
        {/* Component */}
        <div
            className="flex flex-row justify-between max-[767px]:flex-col max-[767px]:items-start"
        >
            <div
                className="max-[767px]: w-full max-w-[560px] max-[991px]:mr-4 max-[991px]:flex-initial"
            >
                <h2 className="text-3xl font-bold md:text-5xl"><a href="./"  title="AI Image Editor">
                  Revolutionary AI Image Editor</a>
                </h2>
            </div>
            <div
                className="max-[767px]: max-[991px]:ml-4 max-[991px]:flex-none max-[767px]:mt-8"
            >
               
                <div className="mb-4 flex max-w-[272px] items-start justify-start">
                    <img
                        src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358f6e24e55dd49a541fd06_EnvelopeSimple-3.svg"
                        alt=""
                        className="mr-3 inline-block"
                    />
                    <p className="text-[#636262] max-[479px]:text-sm">
                        sakshamsingh857@gmail.com
                    </p>
                </div>
            </div>
        </div>
        <div
            className="mb-14 mt-16 w-full [border-bottom:1.7px_solid_rgb(0,_0,_0)]"
        ></div>
        <div
            className="flex flex-row justify-between max-[991px]:items-center max-[767px]:flex-col max-[767px]:items-start max-[479px]:flex-col-reverse"
        >
            
            <div className="max-[991px]:flex-none">
                <p className="text-[#636262] max-[479px]:text-sm">
                    © Copyright 2024 . <a href="./"  title="AI Image Editor">AI Image Editor</a> By Saksham .
                </p>
            </div>
            <div className="flex items-center mt-2">
                    <a href="https://github.com/grimster44" target="_blank" rel="noopener noreferrer">
                        <img
                            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"  // Update with your GitHub icon URL
                            alt="GitHub Icon"
                            className="mr-3 inline-block"
                            style={{ width: '60px', height: '60px' }}  // Adjust the size as needed
                        />
                    </a>
                    <p className="text-[#636262] max-[479px]:text-sm">
                       Github
                    </p>
                </div>
                <div className="flex items-center mt-2">
                    <a href="https://sakshamio.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <img
                            src="https://sakshamio.netlify.app/images/gh.svg"  // Update with your portfolio icon URL
                            alt="Portfolio Icon"
                            className="mr-3 inline-block"
                            style={{ width: '50px', height: '50px' }}  // Adjust the size as needed
                        />
                    </a>
                    <p className="text-[#636262] max-[479px]:text-sm">
                       Saksham.io
                    </p>
                </div>
        </div>
    </div>
</footer>
  )
}

export default Footer