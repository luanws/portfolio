import { NextResponse } from 'next/server';

export async function GET() {
  const pdfUrl = 'https://github.com/no-code-luanws/cv/releases/latest/download/CV.pdf';

  try {
    const response = await fetch(pdfUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch PDF');
    }

    const pdfBuffer = await response.arrayBuffer();

    return new NextResponse(pdfBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'inline; filename="CV.pdf"',
      },
    });
  } catch (error) {
    console.error('Error fetching PDF:', error);
    return NextResponse.error();
  }
}