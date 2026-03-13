import GithubIcon from "@/components/feature/githubicon"
import LinekdinIcon from "@/components/feature/linkedinicon"
import BlueskyIcon from "../feature/blueskyicon"
import { Mail } from "lucide-react"

export default function BottomBar() {
    const styleContact = "text-muted transition-colors duration-300 hover:text-accent"
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
                    © {new Date().getFullYear()} Me — All opinions are my own
                </p>

                <div className="
                    flex 
                    items-center 
                    gap-4">
                    <a href="https://linkedin.com/in/fnelin"
                        target="_blank"
                        className={styleContact}
                        aria-label="LinkedIn">
                        <LinekdinIcon />
                    </a>
                    <a href="https://github.com/fnelin"
                        target="_blank"
                        className={styleContact}
                        aria-label="GitHub">
                        <GithubIcon />
                    </a>
                    <a href="mailto:fredrik.nelin@outlook.com"
                        className={styleContact}
                        aria-label="Email">
                        <Mail size={24} />
                    </a>
                    <a href="https://bsky.app/profile/fnelin.bsky.social"
                        className={styleContact}
                        aria-label="Bluesky">
                        <BlueskyIcon />
                    </a>
                </div>

            </div>
        </footer>
    )
}