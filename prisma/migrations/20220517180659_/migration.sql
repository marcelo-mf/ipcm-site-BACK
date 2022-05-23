/*
  Warnings:

  - You are about to drop the `Programacoes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Programacoes";

-- CreateTable
CREATE TABLE "programacoes" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "dia" TEXT NOT NULL,
    "hora" TEXT NOT NULL,

    CONSTRAINT "programacoes_pkey" PRIMARY KEY ("id")
);
