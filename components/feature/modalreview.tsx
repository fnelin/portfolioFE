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
                rounded-2xl
                bg-parch
                shadow-[0_8px_32px_rgba(26,20,16,0.25)]
                backdrop:bg-ink/50
                backdrop:backdrop-blur-sm">
            {children}
        </dialog>
    )
}