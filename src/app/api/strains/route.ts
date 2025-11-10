import { NextRequest, NextResponse } from 'next/server';
import { STRAINS_DATABASE, searchStrains, getStrainsByType } from '@/lib/strains';
import { StrainType } from '@/types';

/**
 * API endpoint for getting all strains or searching strains
 * GET /api/strains
 * GET /api/strains?search=blue
 * GET /api/strains?type=indica
 */
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const searchQuery = searchParams.get('search');
  const typeFilter = searchParams.get('type');

  try {
    let strains;

    if (searchQuery) {
      // Search strains by query
      strains = searchStrains(searchQuery);
    } else if (typeFilter) {
      // Filter by strain type
      strains = getStrainsByType(typeFilter as StrainType);
    } else {
      // Return all strains
      strains = STRAINS_DATABASE;
    }

    return NextResponse.json({
      strains,
      count: strains.length,
    });
  } catch (error) {
    console.error('Error fetching strains:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
