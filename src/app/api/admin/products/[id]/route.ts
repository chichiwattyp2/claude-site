import { NextRequest, NextResponse } from 'next/server';
import { verifySession } from '@/lib/auth';
import { getProductById } from '@/lib/products';
import fs from 'fs/promises';
import path from 'path';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const isAuthenticated = await verifySession();
  if (!isAuthenticated) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const product = getProductById(params.id);

    if (!product) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch product' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const isAuthenticated = await verifySession();
  if (!isAuthenticated) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const updatedProduct = await request.json();

    // Read the current products file
    const productsPath = path.join(process.cwd(), 'src/lib/products.ts');
    let fileContent = await fs.readFile(productsPath, 'utf-8');

    // Find and replace the product data
    // This is a simple implementation - in production, you'd want a database
    const productIdPattern = new RegExp(
      `{[\\s\\S]*?id: '${params.id}'[\\s\\S]*?},?`,
      'g'
    );

    const newProductData = `{
    id: '${params.id}',
    name: '${updatedProduct.name}',
    strainId: '${updatedProduct.strainId}',
    price: ${updatedProduct.price},
    description: '${updatedProduct.description}',
    imageUrl: '${updatedProduct.imageUrl}',
    inStock: ${updatedProduct.inStock},
    quantity: ${updatedProduct.quantity},
  }`;

    fileContent = fileContent.replace(productIdPattern, newProductData);

    await fs.writeFile(productsPath, fileContent, 'utf-8');

    return NextResponse.json({ success: true, product: updatedProduct });
  } catch (error) {
    console.error('Update error:', error);
    return NextResponse.json(
      { error: 'Failed to update product' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const isAuthenticated = await verifySession();
  if (!isAuthenticated) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    // Read the current products file
    const productsPath = path.join(process.cwd(), 'src/lib/products.ts');
    let fileContent = await fs.readFile(productsPath, 'utf-8');

    // Remove the product
    const productPattern = new RegExp(
      `{[\\s\\S]*?id: '${params.id}'[\\s\\S]*?},?\\n`,
      'g'
    );

    fileContent = fileContent.replace(productPattern, '');

    await fs.writeFile(productsPath, fileContent, 'utf-8');

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to delete product' },
      { status: 500 }
    );
  }
}
