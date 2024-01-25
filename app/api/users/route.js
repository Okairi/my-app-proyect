import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  process.env.TOKEN;

  return NextResponse.json({
    message: "OBTENIENDO DATOS",
    data: data,
  });
}
export async function POST(request) {
  const { nombre, apellido } = await request.json();
  console.log(nombre, apellido);
  return NextResponse.json({
    message: "Creando datos",
  });
}

export function PUT() {
  return NextResponse.json({
    message: "Actualizando datos",
  });
}
export function DELETE() {
  return NextResponse.json({
    message: "Borrando datos",
  });
}
