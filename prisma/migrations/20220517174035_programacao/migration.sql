-- CreateTable
CREATE TABLE "Programacoes" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "dia" TEXT NOT NULL,
    "hora" TEXT NOT NULL,

    CONSTRAINT "Programacoes_pkey" PRIMARY KEY ("id")
);
