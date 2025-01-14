import { NextRequest, NextResponse } from "next/server";

type taxonomy = {
    taxonomyCodeId: number;
    code: string;
    taxonomyType: string;
    classification: string | null;
    isDeleted: boolean;
    isPrimary: boolean;
}

type queryP = {
    title: string;
    relatedTerms: string;
}

export async function GET(request: NextRequest) {
    const primaries =
        request.nextUrl.searchParams.get("primaries") || undefined;
    const secondaries =
        request.nextUrl.searchParams.get("secondaries") || undefined;
    const primaryResult = primaries ? JSON.parse(primaries) : '';
    const secondaryResult = secondaries ? JSON.parse(secondaries) : '';
    const taxonomyList = [
        {
            taxonomyCodeId: 1,
            code: "2278S1500X",
            taxonomyType: "Psychiatric/Mental Health, Child & Adolescent",
            classification: null,
            isDeleted: false,
            isPrimary: false,
        },
        {
            taxonomyCodeId: 2,
            code: "163WP0807X",
            taxonomyType: "SNF/Subacute Care",
            classification: null,
            isDeleted: false,
            isPrimary: false,
        },
        {
            taxonomyCodeId: 4,
            code: "207VM0101X",
            taxonomyType: "Maternal & Fetal Medicine",
            classification: null,
            isDeleted: false,
            isPrimary: false,
        },
        {
            taxonomyCodeId: 5,
            code: "2085P0229X",
            taxonomyType: "Pediatric Radiology",
            classification: null,
            isDeleted: false,
            isPrimary: false,
        },
        {
            taxonomyCodeId: 6,
            code: "163WX0003X",
            taxonomyType: "Obstetric, Inpatient",
            classification: null,
            isDeleted: false,
            isPrimary: false,
        },
        {
            taxonomyCodeId: 7,
            code: "101YS0200X",
            taxonomyType: "School",
            classification: null,
            isDeleted: false,
            isPrimary: false,
        },
        {
            taxonomyCodeId: 8,
            code: "2080P0216X",
            taxonomyType: "Pediatric Rheumatology",
            classification: null,
            isDeleted: false,
            isPrimary: false,
        },
        {
            taxonomyCodeId: 9,
            code: "2279E0002X",
            taxonomyType: "Emergency Care",
            classification: null,
            isDeleted: false,
            isPrimary: false,
        },
        {
            taxonomyCodeId: 10,
            code: "367500000X",
            taxonomyType: "Nurse Anesthetist, Certified Registered",
            classification: null,
            isDeleted: false,
            isPrimary: false,
        },
    ];
    let returnList = [...taxonomyList]
    if (primaries) {
        const primaryString = primaryResult.map((x:queryP) => x.title)
        returnList = returnList.filter((x) => !primaryString.includes(x.taxonomyType));
    }
    if (secondaries) {
        const secondaryString = secondaryResult.map((x:queryP) => x.title)
        returnList = returnList.filter((x) => !secondaryString.includes(x.taxonomyType));
    }
    return NextResponse.json(returnList);
}
