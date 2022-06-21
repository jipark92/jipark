import { Link } from 'react-router-dom'

export default function Projects() {
    return (
        <section className="projects-box bg-dark text-light">

            <header className="project-header">
                <h1> Noteworthy Projects</h1>
                <Link to='/archive' className='archive-link'>
                    view the archive
                </Link>
            </header>

            <div className="projects">
                <article>
                    <div>Title</div>
                    <div>Description</div>
                    <div>Tools used</div>
                </article>
                
                <article>
                    <div>Title</div>
                    <div>Description</div>
                    <div>Tools used</div>
                </article>

                <article>
                    <div>Title</div>
                    <div>Description</div>
                    <div>Tools used</div>
                </article>

                <article>
                    <div>Title</div>
                    <div>Description</div>
                    <div>Tools used</div>
                </article>

                <article>
                    <div>Title</div>
                    <div>Description</div>
                    <div>Tools used</div>
                </article>

                <article>
                    <div>Title</div>
                    <div>Description</div>
                    <div>Tools used</div>
                </article>
            </div>
        </section>
    )
}