import { getDraft } from "@/app/lib/firebase/firestore";
import { Document, Packer, Paragraph } from "docx";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const params = request.nextUrl.searchParams;
    const draft_id = params.get("draft");
    if (!draft_id) return NextResponse.error();
    const draft = await getDraft(draft_id);
    if (!draft) return NextResponse.error();

    const {
        keywords,
        thesis,
        introduction,
        abstract,
        methodology,
        results,
        discussion,
        conclusion,
        references
    } = draft;

    const doc = new Document({
        sections: [
            {
                properties: {},
                children: [
                    new Paragraph({
                        text: thesis!,
                        heading: "Heading1",
                        alignment: "center",
                    }),
                    new Paragraph({
                        text: "Abstract",
                        heading: "Heading2",
                    }),
                    new Paragraph(abstract!),
                    new Paragraph({
                        text: "Keywords",
                        heading: "Heading2",
                    }),
                    new Paragraph(keywords!.join(", ")),
                    new Paragraph({
                        text: "Introduccion",
                        heading: "Heading2",
                    }),
                    new Paragraph(introduction!),
                    new Paragraph({
                        text: "Metodologia",
                        heading: "Heading2",
                    }),
                    new Paragraph(methodology!),
                    new Paragraph({
                        text: "Resultados",
                        heading: "Heading2",
                    }),
                    new Paragraph(results!),
                    new Paragraph({
                        text: "Discusion",
                        heading: "Heading2",
                    }),
                    new Paragraph(discussion!),
                    new Paragraph({
                        text: "Conclusion",
                        heading: "Heading2",
                    }),
                    new Paragraph(conclusion!),
                    new Paragraph({
                        text: "Referencias",
                        heading: "Heading2",
                    }),
                    new Paragraph(references!.join("\n"))
                ],
            },
        ],
    });

    const blob = await Packer.toBlob(doc);
    return new NextResponse(blob, { status: 200, });
}