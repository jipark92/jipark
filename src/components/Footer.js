import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

export default function Footer() {

    return (
        <footer className="bg-dark text-center text-white">
            <div className="container p-4 pb-0">
                <section className="mb-2">
                    <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/norfkorean" role="button"target="_blank" rel="noreferrer">
                        <AiFillGithub/>
                    </a>
                
                    <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/ji-young-park-457a96a1/" role="button"target="_blank" rel="noreferrer">
                        <AiFillLinkedin/>
                    </a>
                </section>
            </div>
            
            <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2);"}}>
                © 2020 Copyright:
                <a className="text-white" href="https://github.com/norfkorean" target="_blank" rel="noreferrer" >Ji Park</a>
            </div>
        </footer>
    )
}