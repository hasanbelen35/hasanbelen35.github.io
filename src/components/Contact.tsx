import emailjs from 'emailjs-com';
import '../CSS/Contact.css'

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_q3nasvm', 'template_0i6pr3m', e.target, '0j9CG4w3zdgLXxpTO')
            .then((result) => {
                alert('E-posta gönderildi!');
                e.target.reset(); // Formu sıfırla
            }, (error) => {
                alert('E-posta gönderme hatası.');
                console.log(error.text);
            });
    };

    return (
        <div>
            <div id='contact' className="bg-black text-white text-center pb-24">
                <h1 className='text-3xl mb-12 text-gray-400 font-bold'>CONTACT WITH ME :)</h1>
                <form onSubmit={handleSubmit} className='flex flex-col gap-12 justify-center items-center'>
                    <input placeholder='Your Email...' type="email" id="email" name="email" className='w-9/12 border-b shadow-xl shadow-gray-500 rounded-2xl h-12 bg-black' required />
                    <input placeholder='Your Full-Name...' type="text" id="fullname" name="fullname" className='w-8/12 border-b shadow-xl shadow-gray-500 rounded-2xl h-12 bg-black' required />
                    <textarea placeholder='Your Message To Me...' id="message" name="message" className='w-7/12 border-b shadow-xl shadow-gray-500 rounded-2xl h-36 bg-black' required></textarea>
                    <button type="submit" className='w-5/12 border-b hover:bg-red-700 hover:text-white hover:border transition duration-500 shadow-gray-500 rounded-2xl h-8 bg-gray-500'>SEND</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
