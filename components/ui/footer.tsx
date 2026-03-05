import { Mail } from "lucide-react"

export default function BottomBar() {
    const styleContact = "text-muted hover:text-accent transition-colors duration-200"
    return (
        <footer className="
            mt-auto
            bg-parch-dark
            border-t border-ink/10
            py-8 px-6
        ">
            <div className="
                max-w-6xl 
                mx-auto
                flex 
                flex-col 
                sm:flex-row
                justify-between 
                items-center
                gap-4
            ">
                <span className="
                    font-heading 
                    text-ink 
                    font-bold">
                    Another Dudes Opinion
                </span>
                <p className="
                    font-mono 
                    text-xs 
                    text-muted">
                    © {new Date().getFullYear()} — All opinions are my own
                </p>

                <div className="
                    flex 
                    items-center 
                    gap-4">
                    <a href="https://linkedin.com/in/fnelin"
                        target="_blank"
                        className={styleContact}
                        aria-label="LinkedIn">
                        LinkedIn
                    </a>
                    <a href="https://github.com/fnelin"
                        target="_blank"
                        className={styleContact}
                        aria-label="GitHub">
                        Gitub
                    </a>
                    <a href="mailto:fredrik.nelin@outlook.com"
                        className={styleContact}
                        aria-label="Email">
                        <Mail size={18} />
                    </a>
                </div>

            </div>
        </footer>
    )
}