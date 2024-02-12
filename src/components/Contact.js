const Contact = () => {
    return (
        <div className="w-3/4 m-auto">
            <h2 className="flex justify-center text-center text-4xl font-bold my-6">We would love to hear from you!</h2>
            <div className="flex flex-col w-1/3 m-auto gap-4 my-8">
                <input className="border border-black rounded-sm px-4 py-2" type="text" name="name" placeholder="How can we help you?" required/>
                <input className="border border-black rounded-sm px-4 py-2" type="text" name="name" placeholder="Full Name" required />
                <input className="border border-black rounded-sm px-4 py-2" type="email" name="name" placeholder="Email Address " required />
                <input className="border border-black rounded-sm px-4 py-2" type="tel" name="name" placeholder="Mobile Number (optional)" />
                <input className="border border-black rounded-sm px-4 py-2" type="text" name="name" placeholder="Type text" required />
            <button className="bg-red-400 text-white px-4 py-2 rounded-lg max-w-40" value="Submit">Submit feedback</button>
            </div>
        </div>
    );
};

export default Contact;
