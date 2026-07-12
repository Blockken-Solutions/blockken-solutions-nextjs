import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");

  if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  try {
    const body = (await request.json()) as { _type?: string; slug?: { current?: string } };
    const documentType = body._type;

    if (documentType === "siteSettings") {
      revalidateTag("siteSettings", "max");
    }

    if (documentType === "project") {
      revalidateTag("projects", "max");
    }

    if (documentType === "page") {
      revalidateTag("pages", "max");

      const slug = body.slug?.current;

      if (slug) {
        revalidateTag(`page:${slug}`, "max");
        revalidatePath(slug === "home" ? "/" : `/${slug}`);
      }
    }

    revalidatePath("/");

    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch {
    return NextResponse.json({ message: "Error revalidating" }, { status: 500 });
  }
}
