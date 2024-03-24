function ContactSection() {
    return (
        <section id="contact">
            <div className="container py-5 px-4 px-md-0">
                <div className="row">

                    <div className="col-12 col-md-6 pe-md-5 mb-3 mb-md0 ">

                        <form action="#">

                            <input className="w-100" type="text" name="name" id="name" placeholder="Name" />

                            <input className="w-100" type="number" name="phoneNumber" id="phoneNumber" placeholder="Phone" />

                            <input className="w-100" type="number" name="email" id="email" placeholder="Email" />

                            <textarea className="w-100" name="message" id="message" rows="5" placeholder="Message"></textarea>

                            <input type="submit" value='send' className="btn btn-primary mt-2" />

                        </form>

                    </div>

                    <div className="col-12 col-md-6 ">

                        <iframe
                            title="helwan"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15029.669332279287!2d31.32621911219235!3d29.84637715622663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458342d367a0a81%3A0x38ce495626c361ea!2z2K3ZhNmI2KfZhtiMINit2YTZiNin2YYg2KfZhNio2YTYr9iMINmC2LPZhSDYrdmE2YjYp9mG2Iwg2YXYrdin2YHYuNipINin2YTZgtin2YfYsdip4oCsIDQwMjQxMjI!5e0!3m2!1sar!2seg!4v1710806324086!5m2!1sar!2seg"

                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>

                    </div>

                </div>
            </div>
        </section>
    );
}

export default ContactSection;