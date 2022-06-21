import Button from "./Button";

export default function Contact() {
    return (
        <section className="contact-box bg-dark text-light">
            <h1 className="get-in-touch">Get In Touch</h1>
            <p className="contact-description">I am currently looking for any new opportunities. My inbox is always open. I will try my best to get back to you!</p>
            <Button
                btnText="Say Hello"
            />
        </section>
    )
}