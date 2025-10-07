import React from "react";

const ContactCard = () => {
    return (
        <div id="contactus" className=" flex flex-col items-center justify-center bg-gray-100 p-6 ">
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">Contact Us</h2>

            </div>
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden transform transition-all hover:scale-105 max-w-6xl w-full">
                <div className="flex flex-col md:flex-row">
                    {/* Email */}
                    <a href="mailto:stratosedgelearning@gmail.com" className="flex-1 p-6  hover:bg-gray-100 transition cursor-pointer">
                        <div className="flex flex-col gap-2 justify-center items-center  text-center">

                            <img src="https://img.icons8.com/?size=100&id=37246&format=png&color=000000" className="w-8 h-8"></img>
                            <h3 className="text-lg font-semibold text-gray-700 mb-2">Email to : stratosedgelearning@gmail.com </h3>
                        </div>
                        
                    </a>

                    {/* Phone */}
                    <a href="tel:+919289867821" className="flex-1 p-6   hover:bg-gray-100 transition cursor-pointer">
                        <div className="flex flex-col gap-2 justify-center items-center  text-center">

                            <img src="https://img.icons8.com/?size=100&id=dvZnjC1SVTyx&format=png&color=000000" className="w-8 h-8"></img>
                            <h3 className="text-lg font-semibold text-gray-700 mb-2">Call: +91 92898 67821  </h3>
                        </div>
                        
                    </a>

                    {/* LinkedIn */}
                    <a href="https://www.linkedin.com/company/stratos-edge-training-solutions/posts/?feedView=all&viewAsMember=true"
                            target="_blank"
                            rel="noopener noreferrer" className="flex-1 p-6 hover:bg-gray-100 transition cursor-pointer">
                        
                            <div className="flex flex-col gap-2 justify-center items-center  text-center">

                                <img src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000" className="w-10 h-10"></img>
                                <h3 className="text-lg font-semibold text-gray-700 mb-2">Follows us on LinkedIn </h3>
                            </div>
                        
                    </a>
                    <a href="https://t.me/+X7io5Oy4Kg81ODI1"
                            target="_blank"
                            rel="noopener noreferrer" className="flex-1 p-6 hover:bg-gray-100 transition cursor-pointer">
                        <div className="flex flex-col gap-2 justify-center items-center  text-center">

                            <img src="https://img.icons8.com/?size=100&id=63306&format=png&color=000000" className="w-8 h-8"></img>
                            <h3 className="text-lg font-semibold text-gray-700 mb-2">Telegram Channel </h3>
                        </div>
                    </a>
                    <a href="https://www.whatsapp.com/channel/0029Vb6OJFY6LwHjLDrAkB0v"
                            target="_blank"
                            rel="noopener noreferrer" className="flex-1 p-6 hover:bg-gray-100 transition cursor-pointer">
                        <div className="flex flex-col gap-2 justify-center items-center  text-center">

                            <img src="https://img.icons8.com/?size=100&id=16713&format=png&color=000000" className="w-8 h-8"></img>
                            <h3 className="text-lg font-semibold text-gray-700 mb-2">Whatsapp Channel </h3>
                        </div>
                        
                    </a>


                </div>

            </div>
        </div>
    );
};

export default ContactCard;
