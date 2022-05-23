-- CreateTable
CREATE TABLE "membros" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "sexo" TEXT NOT NULL,

    CONSTRAINT "membros_pkey" PRIMARY KEY ("id")
);
