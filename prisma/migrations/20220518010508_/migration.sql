/*
  Warnings:

  - You are about to drop the column `dia` on the `programacoes` table. All the data in the column will be lost.
  - Added the required column `diaId` to the `programacoes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "programacoes" DROP COLUMN "dia",
ADD COLUMN     "diaId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "dias" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "dias_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "programacoes" ADD CONSTRAINT "programacoes_diaId_fkey" FOREIGN KEY ("diaId") REFERENCES "dias"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
