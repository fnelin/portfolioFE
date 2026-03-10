-- CreateTable
CREATE TABLE "reviews" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "titel" TEXT NOT NULL,
    "ingress" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "score" INTEGER NOT NULL,
    "mainmedia" TEXT NOT NULL,
    "category_id" TEXT NOT NULL,
    "original_review" TEXT NOT NULL,
    "published" BOOLEAN DEFAULT false,
    "updatedAt" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "reviews_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "category" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "category_name" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "category_category_name_key" ON "category"("category_name");
