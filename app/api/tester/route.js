import { NextResponse } from "next/server";
import { interviewData } from "@/app/lib/data";

export async function GET() {
	return NextResponse.json(interviewData);
}
