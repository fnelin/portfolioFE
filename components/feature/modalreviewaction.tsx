"use client"
import { useEffect, useRef } from "react"
import { useRouter } from "next/navigation"

export default function ModalReview({ children }: { children: React.ReactNode }) {
    const router = useRouter()
    const dialogReference = useRef<HTMLDialogElement>(null)

    useEffect(() => {
        dialogReference.current?.showModal()
    }, [])

    return (
        <dialog
            ref={dialogReference}
            onClose={() => router.back()}
            onClick={(e) => {
                if (e.target === dialogReference.current) {
                    dialogReference.current?.close()
                }
            }}
            className="
                m-auto
                w-full
                max-w-160
                rounded-2xl
                bg-parch
                shadow-ink/50
                backdrop:bg-ink/50
                backdrop:backdrop-blur-sm">
            {children}
        </dialog>
    )
}