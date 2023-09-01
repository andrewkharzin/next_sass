"use client"

import { Note, Category } from "@prisma/client"


interface NoteFormProps {
    initilaData: Note | null;
    categories: Category[],
}

export const NoteForm = () => {
    return (
        <div>
            NoteForm
        </div>
    )
}