import prismaDb from "@/lib/prismadb";
import { NoteForm } from "./components/note-form";

interface NoteIdPageProps {
    params: {
        noteId: string;
    }
}

const NoteIdPage = async ({
    params
}: NoteIdPageProps) => {

    const note = await prismaDb.note.findUnique({
        where: {
            id: params.noteId,
        }
    })

    const categories = await prismaDb.category.findMany();
    return (
        <NoteForm
            initialData={note}
            categories={categories}

        />
    )
}

export default NoteIdPage;