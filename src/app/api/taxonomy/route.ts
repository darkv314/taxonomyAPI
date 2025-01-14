import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const primaries =
        request.nextUrl.searchParams.get("primaries") || undefined;
    const secondaries =
        request.nextUrl.searchParams.get("secondaries") || undefined;
    console.log("primaries", primaries);
    console.log("secondaries", secondaries);
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
        returnList = returnList.filter((x) => x.taxonomyType !== primaries);
    }
    if (secondaries) {
        returnList = returnList.filter((x) => x.taxonomyType !== secondaries);
    }
    return NextResponse.json(returnList);
}
