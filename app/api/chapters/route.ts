import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    // Read the JSON file
    const filePath = path.join(process.cwd(), 'public', 'data', 'all_subjects_chapter_data.json');
    const fileData = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileData);
    
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error reading chapter data:', error);
    return NextResponse.json(
      { error: 'Failed to load chapter data' },
      { status: 500 }
    );
  }
}
